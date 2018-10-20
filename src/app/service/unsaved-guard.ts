import {CanDeactivate} from "@angular/router";
import {FormComponent} from "../form/form.component";
import {MessageService} from "primeng/api"
// import {DialogService} from "xxddialog/components/index";
// import{DialogService} from "../UIcomponent/dialog/dialog.service";
import {BasePage} from "../common/base-page";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard extends BasePage implements CanDeactivate <FormComponent>{

  constructor(
    public messageService:MessageService,
    // public dialogService:DialogService
  ){
    super(messageService)
  }
  canDeactivate(component: FormComponent){
    return this.obsure()
  }
  sure():Promise<boolean>{
      return new Promise((resolve,reject)=>this.confirm('确认要离开吗?',()=>{resolve(true)},()=>{resolve(false)}));
  }
  obsure():Observable<boolean>{
    return  new Observable(observer=>{
      this.confirm('确认要离开吗?',()=>{observer.next(true)},()=>{observer.next(false)})
    })
  }
}
