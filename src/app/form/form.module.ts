import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module"
import {FormRoutingModule} from "./form-routing.module";
import {FormComponent} from "./form.component";
import { UpimgComponent } from './upimg/upimg.component';
import { EditorComponent } from './editor/editor.component';
import {WangeditorModule} from "../UIcomponent/wangeditor/wangeditor.module";
import {LinkageComponent} from "./linkage/linkage.component";
import {ThreeLinkComponent} from "./three-link/three-link.component"
@NgModule({
  imports: [
    ShareModule,
    WangeditorModule,
    FormRoutingModule
  ],
  declarations: [FormComponent, UpimgComponent, EditorComponent,LinkageComponent,ThreeLinkComponent]
})
export class FormModule { }
