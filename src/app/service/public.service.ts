import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";
@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http:HttpClient) { }
  getEquipment(){
    return this.http.get('assets/equipment.json')
  }
  getAreas(){
    return this.http.get('assets/province.json').pipe(map(res=>{return this.transform(res['province'])}))
  }
  transform(arr){
    /*
    let newarr = [];
    for(let i = 0;i<arr.length;i++){
      let temp = arr[i];
      newarr.push({name:temp['name'],code:temp['code']})
    }
    */
    return arr;
  }
  getData():any{
    return this.http.get('assets/piedata.json')
  }
}
