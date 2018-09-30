import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment"
import {map} from "rxjs/internal/operators";
import {StorageService} from "../service/storage.service";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirectUrl:string;
  constructor(
    private http:HttpClient,
    private storageService:StorageService
  ) { }
  login(loginModel){
    return this.http.get(`${environment.url}/users/?name=${loginModel.name}&password=${loginModel.password}`).pipe(
      map((res:Response)=>{
        if(res['length']>0){
          this.storageService.setUser('user',res[0]['name']);
        }else{
          throw new Error('用户名或密码错误');
        }
      })
    )
  }
  isLoggedIn():boolean{
    const user = this.storageService.getUser('user');
    if(user){
      return true
    }else{
      return false
    }
  }
  logOut(){
    this.storageService.remove('user');
  }
}
