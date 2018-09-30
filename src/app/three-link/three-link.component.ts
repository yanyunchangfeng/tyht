import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PublicService} from "../service/public.service";
@Component({
  selector: 'app-three-link',
  templateUrl: './three-link.component.html',
  styleUrls: ['./three-link.component.scss']
})
export class ThreeLinkComponent implements OnInit {
  @Input() area;
  @Output() areaOut = new EventEmitter();
  provinceData :any;
  cityData = [];
  townData = [];
  constructor(private publicService:PublicService) { }

  ngOnInit() {
    this.publicService.getAreas().subscribe(data=>{
      this.provinceData = data;
      this.changeProvince();
    })
  }
  changeProvince(){
    for(let i = 0;i<this.provinceData.length;i++){
      let temp = this.provinceData[i];
      if(this.area.provinceName['name'] === temp['name']){
        this.cityData = temp['city']
      }
    }
    this.changeCity()
  }
  changeCity(){
    let exit = false;
    for(let i = 0;i<this.cityData.length;i++){
      let temp = this.cityData[i];
      if(this.area.cityName.name === temp['name']){
        this.townData = temp['county']
        exit = true;
      }
    }
    if(!exit){
      this.area.cityName.name =  this.cityData[0]['name'];
      this.area.cityCode = this.cityData[0]['code'];
      this.townData = this.cityData[0]['county']
    }
    this.changeTown();
  }
  changeTown(){
    let exit = false;
    for(let i = 0;i<this.townData.length;i++){
      let temp = this.townData[i];
      if(this.area.townName.name === temp['name']){
        this.area.townCode = temp['code']
        exit = true;
      }
    }
    if(!exit){
      this.area.townName.name = this.townData[0]['name'];
      this.area.code = this.townData[0]['code'];
    }
    this.areaOut.emit(this.area);
  }
}
