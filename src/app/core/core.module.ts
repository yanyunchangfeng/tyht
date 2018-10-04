import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ConfirmationService} from "primeng/api";
@NgModule({
  exports:[HttpClientModule,ReactiveFormsModule],
  providers:[MessageService,ConfirmationService]
})
export class CoreModule { }
