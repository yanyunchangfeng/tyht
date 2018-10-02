import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NgContentComponent} from "./ng-content/ng-content.component";
const route:Routes = [{
  path:'',component:NgContentComponent
}]
@NgModule({
   imports:[RouterModule.forChild(route)],
   exports:[RouterModule]
})
export class ContentShadowRouting{}
