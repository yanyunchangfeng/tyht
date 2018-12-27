import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategy implements PreloadingStrategy{
  preloadedModules: string [] = [];
  constructor() { }
  preload(route:Route,load:()=> Observable<any>):Observable<any>{
     if(route.data&&route.data['preload']){
       this.preloadedModules.push(route.path);
       console.log('Preloaded ' + route.path);
       return load();
     }else{
       return of(null);
     }
  }
}
