import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module"
import {FormRoutingModule} from "./form-routing.module";
import {FormComponent} from "./form.component";
import { UpimgComponent } from './upimg/upimg.component';
import { EditorComponent } from './editor/editor.component';
import {WangeditorModule} from "../UIcomponent/wangeditor/wangeditor.module";
import {LinkageComponent} from "./linkage/linkage.component";
import {ThreeLinkComponent} from "./three-link/three-link.component"
import {DiademoComponent } from './diademo/diademo.component'
import {DialogModule, DialogService} from "xxddialog/components/index"
//  import {DialogModule} from "../UIcomponent/dialog/dialog.component";
//  import {DialogService} from "../UIcomponent/dialog/dialog.service";
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
