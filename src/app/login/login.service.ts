import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'
import {map, debounceTime} from 'rxjs/operators';
import {StorageService} from '../service/storage.service';
import { of } from 'rxjs';
@Injectable({
  providedIn : 'root'
})
export class LoginService {
  redirectUrl: string;
  constructor(
    private http : HttpClient,
    private storageService : StorageService
  ) { }
  login({name,password}) {
    // mock server use
    // return this.http.get(`${environment.url}/users`,{params :{'name' :loginModel.name,'password' :loginModel.password}}).pipe(
    //   map((res :Response)=>{
    //     if(res['length']>0){
    //       this.storageService.setUser('user',res[0]['name']);
    //     }else{
    //       throw new Error('用户名或密码错误');
    //     }
    //   })
    // )
    this.storageService.setUser('user', name);
    return of(name);
  }
  isLoggedIn(): boolean {
    const user = this.storageService.getUser('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    this.storageService.remove('user');
  }
}
