import { NgModule } from '@angular/core';
import {GraphVisualRoutingModule} from "./graph-visual-routing.module";
import {VisualComponent} from "./visual/visual.component";
import {ShareModule} from "../share/share.module";
@NgModule({
  imports: [
    ShareModule,
    GraphVisualRoutingModule
  ],
  declarations: [VisualComponent]
})
export class GraphVisualModule { }
