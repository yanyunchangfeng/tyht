import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
// import {DialogService} from "xxddialog/components/index";
// import {DialogService} from "../UIcomponent/dialog/dialog.service";
import {throwIfAlreadyLoaded} from "../service/module-import-guard";
@NgModule({
  exports:[HttpClientModule],
  providers:[MessageService]
})
export class CoreModule {
  constructor(@Optional()@SkipSelf()parent:CoreModule){
     if(parent){
       throwIfAlreadyLoaded(parent,'CoreModule')
     }
  }
}
