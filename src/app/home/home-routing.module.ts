import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AuthGuard} from "../service/auth-guard.service";
const route:Routes = [
  {
    path:'index',component:HomeComponent,
    canActivateChild:[AuthGuard],
    children:[
      {path:'visual',loadChildren:() => import('../graph-visual/graph-visual.module').then(m => m.GraphVisualModule),data:{preload:true}},
      {path:'cabient',loadChildren:() => import('../cabient/cabient.module').then(m => m.CabientModule)},
      {path:'form',loadChildren:() => import('../form/form.module').then(m => m.FormModule)},
      {path:'shadow',loadChildren:() => import('../content-shadow/content-shadow.module').then(m => m.ContentShadowModule)},
    ]
  }
]
@NgModule({
  imports:[RouterModule.forChild(route)],
  exports:[RouterModule],
})
export class HomeRoutingModule{}
