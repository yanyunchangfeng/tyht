import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VisualComponent} from "./visual/visual.component"
const route:Routes = [
  {path:'',component:VisualComponent}
]
@NgModule({
  imports:[RouterModule.forChild(route)],
  exports:[RouterModule]
})
export class GraphVisualRoutingModule{}
