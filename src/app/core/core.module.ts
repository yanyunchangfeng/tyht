import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
@NgModule({
  imports: [],
  declarations: [],
  exports:[HttpClientModule,ReactiveFormsModule],
  providers:[MessageService]
})
export class CoreModule { }
