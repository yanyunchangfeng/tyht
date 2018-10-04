import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {EchartDirective} from "../directive/echart.directive";
import {
  DropdownModule,
  InputTextModule,
  CalendarModule,
  GrowlModule,
  InputTextareaModule,
  ScrollPanelModule,
  ConfirmDialogModule,
  CardModule
} from "primeng/primeng";
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
    ConfirmDialogModule,
    InputTextareaModule,
    EchartDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
