import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {EchartDirective} from "../directive/echart.directive";
import {
  DropdownModule,
  InputTextModule,
  CalendarModule,
  GrowlModule,
  ScrollPanelModule,
  CardModule
} from "primeng/primeng";
import {ToastModule} from "primeng/toast";
@NgModule({
  imports: [],
  declarations:[EchartDirective],
  exports:[
    CommonModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    ScrollPanelModule,
    GrowlModule,
    CardModule,
    EchartDirective,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
