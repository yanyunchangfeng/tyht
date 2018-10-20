import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {ShareModule} from "../share/share.module";
import {LoginRoutingModule} from "./login-routing.module";
// import{DialogService} from "../UIcomponent/dialog/dialog.service";

@NgModule({
  imports: [ShareModule,LoginRoutingModule],
  declarations: [LoginComponent],
  // providers:[DialogService]
})
export class LoginModule { }
