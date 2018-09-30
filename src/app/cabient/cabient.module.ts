import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module"
import {CabientRoutingModule} from "./cabient-routing-module";
import {CabientComponent} from "./cabient.component";
@NgModule({
  imports: [
    ShareModule,
    CabientRoutingModule
  ],
  declarations: [CabientComponent]
})
export class CabientModule { }
