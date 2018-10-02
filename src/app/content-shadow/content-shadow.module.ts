import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module";
import { NgContentComponent } from './ng-content/ng-content.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import {ContentShadowRouting} from "./content-shadow-routing"

@NgModule({
  imports: [
    ShareModule,
    ContentShadowRouting
  ],
  declarations: [NgContentComponent, ChildTwoComponent, ChildThreeComponent]
})
export class ContentShadowModule { }
