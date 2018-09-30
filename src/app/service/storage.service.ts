import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setUser(key,value){
    window.sessionStorage.setItem(key,value);
  }
  getUser(key){
    return window.sessionStorage.getItem(key);
  }
  remove(key){
    window.sessionStorage.removeItem(key);
  }
}
