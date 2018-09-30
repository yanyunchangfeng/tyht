import { Component, OnInit } from '@angular/core';
import {PublicService} from "../service/public.service"
@Component({
  selector: 'app-cabient',
  templateUrl: './cabient.component.html',
  styleUrls: ['./cabient.component.scss']
})
export class CabientComponent implements OnInit {
  totalSize;//总u位;
  devices;//设备总数;
  equipmentArrs = [];
  constructor(private publicService:PublicService){

  }
  ngOnInit(){
    this.totalSize = Math.floor(Math.random()*(50-20+1)+30);
    this.publicService.getEquipment().subscribe(data=>{
        this.devices = data;
        this.equipmentArrs = this.initEquipmentArrs(this.totalSize);
        for(let device of this.devices){
          let begin = device.location*1-1;
          let end = device.location*1-1 +device.size*1;
          for(let i = begin;i<end;i++){
            this.equipmentArrs[i] = Object.assign({},device);
            if(i=== end-1){
              this.equipmentArrs[i]['isEnd'] = true;
            }else{
              this.equipmentArrs[i]['isEnd'] = false;
            }
          }
        }
        for(let i =0;i<this.totalSize;i++){
          this.equipmentArrs[i]['index'] = i+1
        }
        console.log(this.equipmentArrs)
    })
  }
  initEquipmentArrs(size){
    let result = [];
    for (let i= 0; i<size;i++){
      result.push({});
    }
    return result
  }
}
