import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {ShareModule} from "../share/share.module";
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
  imports: [ShareModule,LoginRoutingModule],
  declarations: [LoginComponent]
})
export class LoginModule { }
