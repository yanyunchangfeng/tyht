import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module"
import {FormRoutingModule} from "./form-routing.module";
import {FormComponent} from "./form.component";
import { UpimgComponent } from './upimg/upimg.component';
import { EditorComponent } from './editor/editor.component';
import {WangeditorModule} from "../UIcomponent/wangeditor/wangeditor.module";
import {LinkageComponent} from "./linkage/linkage.component";
import {ThreeLinkComponent} from "./three-link/three-link.component"
// import {DialogModule} from "xxddialog/components/dialog.component"
 import {DialogModule} from "../UIcomponent/dialog/dialog.component";
 import {DialogService} from "../UIcomponent/dialog/dialog.service";
//import {DialogService} from "xxddialog/components/dialog.service"
import {DiademoComponent } from './diademo/diademo.component'
@NgModule({
  imports: [
    ShareModule,
    DialogModule,
    WangeditorModule,
    FormRoutingModule
  ],
  declarations: [FormComponent, UpimgComponent, EditorComponent,LinkageComponent,ThreeLinkComponent, DiademoComponent],
  providers:[DialogService]
})
export class FormModule { }
