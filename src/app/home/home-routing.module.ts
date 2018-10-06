import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AuthGuard} from "../service/auth-guard.service";
const route:Routes = [
  {
    path:'index',component:HomeComponent,
    canActivateChild:[AuthGuard],
    children:[
      {path:'visual',loadChildren:'../graph-visual/graph-visual.module#GraphVisualModule',data:{preload:true}},
      {path:'cabient',loadChildren:'../cabient/cabient.module#CabientModule'},
      {path:'form',loadChildren:'../form/form.module#FormModule'},
      {path:'shadow',loadChildren:'../content-shadow/content-shadow.module#ContentShadowModule'},
    ]
  }
]
@NgModule({
  imports:[RouterModule.forChild(route)],
  exports:[RouterModule],
})
export class HomeRoutingModule{}
