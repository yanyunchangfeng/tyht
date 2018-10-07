import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {EchartDirective} from "../directive/echart.directive";
import {DialogModule} from "xxddialog/components/dialog.component"
import {
  DropdownModule,
  InputTextModule,
  CalendarModule,
  GrowlModule,
  InputTextareaModule,
  ScrollPanelModule,
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
    DialogModule,
    InputTextareaModule,
    EchartDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
