import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PublicService} from "../../service/public.service"
import mytransform from "../../common/util";
@Component({
  selector: 'app-three-link',
  templateUrl: './three-link.component.html',
  styleUrls: ['./three-link.component.scss']
})
export class ThreeLinkComponent implements OnInit {
  @Input() area;
  @Output() areaOut = new EventEmitter();
  oldproviceData = [];
  provinceData =[];
  oldcityData = [];
  cityData = [];
  townData = [];
  constructor(private publicService:PublicService) { }

  ngOnInit() {
    this.publicService.getAreas().subscribe(data=>{
      this.oldproviceData = data;
      this.provinceData = mytransform.Util.transform(this.oldproviceData,'name','code');
      this.changeProvince();
    })
  }
  changeProvince(){
    for(let i = 0;i<this.oldproviceData.length;i++){
      let temp = this.oldproviceData[i];
      if(this.area.provinceName['name'] === temp['name']){
        this.oldcityData = temp['city'];
        this.cityData = mytransform.Util.transform(this.oldcityData,'name','code');
        break;
      }
    }
    this.changeCity()
  }
  changeCity(){
    let exit = false;
    for(let i = 0;i<this.oldcityData.length;i++){
      let temp = this.oldcityData[i];
      if(this.area.cityName.name === temp['name']){
        this.townData = temp['county']
        exit = true;
      }
    }
    if(!exit){
      this.area.cityName.name =  this.oldcityData[0]['name'];
      this.area.cityName.code =  this.oldcityData[0]['code'];
      this.townData = this.oldcityData[0]['county']
    }
    this.changeTown();
  }
  changeTown(){
    let exit = false;
    for(let i = 0;i<this.townData.length;i++){
      let temp = this.townData[i];
      if(this.area.townName.name === temp['name']){
        this.area.townName.code = temp['code']
        exit = true;
      }
    }
    if(!exit){
      this.area.townName.name = this.townData[0]['name'];
      this.area.townName.code = this.townData[0]['code'];
    }
    this.areaOut.emit(this.area);
  }
}
