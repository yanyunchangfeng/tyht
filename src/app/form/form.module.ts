import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module"
import {FormRoutingModule} from "./form-routing.module";
import {FormComponent} from "./form.component";
import { UpimgComponent } from './upimg/upimg.component';
import { EditorComponent } from './editor/editor.component';
import {WangeditorModule} from "../UIcomponent/wangeditor/wangeditor.module"
@NgModule({
  imports: [
    ShareModule,
    WangeditorModule,
    FormRoutingModule
  ],
  declarations: [FormComponent, UpimgComponent, EditorComponent]
})
export class FormModule { }
