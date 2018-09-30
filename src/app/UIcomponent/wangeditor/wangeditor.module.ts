import { NgModule } from '@angular/core';
import { WangeditorComponent } from '../../UIcomponent/wangeditor/wangeditor.component';
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WangeditorComponent],
  exports:[WangeditorComponent]
})
export class WangeditorModule { }
