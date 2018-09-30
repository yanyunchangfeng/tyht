import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {AppTopbarComponent} from "./app.topbar.component";
import {AppFooterComponent} from "./app.footer.component";
import {AppRightpanelComponent} from "./app.rightpanel.component";
import {AppInlineProfileComponent} from "./app.profile.component";
import {AppBreadcrumbComponent} from "./app.breadcrumb.component";
import {AppMenuComponent} from "./app.menu.component";
import {AppSubMenuComponent} from "./app.menu.component";
import {NgProgressModule} from "@ngx-progressbar/core";
import {ShareModule} from "../share/share.module";
@NgModule({
  imports: [ShareModule,HomeRoutingModule,NgProgressModule.forRoot()],
  declarations: [
    AppTopbarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppRightpanelComponent,
    AppInlineProfileComponent,
    AppBreadcrumbComponent,
    HomeComponent]
})
export class HomeModule { }
