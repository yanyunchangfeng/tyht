import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
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
    return this.http.get('assets/province.json').pipe(map(res=>{return res['province']}))
  }
  getOptions(){
    let headers = new HttpHeaders();
    headers.append('token','78erewregvfdsgfsd');
    let options = {headers:headers};
    return options
  }
  getData():any{
    return this.http.get('assets/piedata.json')
  }
}
