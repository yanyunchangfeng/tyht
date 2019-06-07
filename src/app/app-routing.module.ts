import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from "./home/home.module";
import {SelectivePreloadingStrategy} from "./service/selective-preloading-strategy.service";
import {AuthGuard} from "./service/auth-guard.service";
const routes: Routes = [
  {path:'',canActivate:[AuthGuard],redirectTo:"index/visual",pathMatch:'full'},
  {path:'login',loadChildren:() => import('../app/login/login.module').then(m => m.LoginModule)},
];
@NgModule({
  imports: [HomeModule,RouterModule.forRoot(routes,{preloadingStrategy:SelectivePreloadingStrategy,useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
