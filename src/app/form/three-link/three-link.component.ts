import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PublicService} from "../../service/public.service"
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
      this.provinceData = this.transform(this.oldproviceData);
      this.changeProvince();
    })
  }
  changeProvince(){
    for(let i = 0;i<this.oldproviceData.length;i++){
      let temp = this.oldproviceData[i];
      if(this.area.provinceName['name'] === temp['name']){
        this.oldcityData = temp['city'];
        this.cityData = this.transform(this.oldcityData);
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
  transform(arr){
    let newarr = [];
    for (let i =0;i<arr.length;i++){
      let temp = arr[i];
      let obj = {};
      obj['name'] = temp['name'];
      obj['code'] = temp['code'];
      newarr.push(obj);
    }
    return newarr;
  }
}
