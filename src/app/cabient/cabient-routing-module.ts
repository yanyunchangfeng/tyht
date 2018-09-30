import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CabientComponent} from "./cabient.component";
const route:Routes = [
  {path:'',component:CabientComponent}
]
@NgModule({
  imports:[RouterModule.forChild(route)],
  exports:[RouterModule]
})
export class CabientRoutingModule{}
