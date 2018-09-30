import {trigger, state, transition, style, animate} from '@angular/animations';
import {Component} from "@angular/core";
import {HomeComponent} from "./home.component";
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-inline-profile',
  template: `
    <div class="profile" [ngClass]="{'profile-expanded':active}">
      <a (click)="onClick($event)">
        <img class="profile-image" src="assets/img/ym.jpg"/>
        <span class="profile-name">浪漫的野马</span>
        <i class="material-icons">keyboard_arrow_down</i>
      </a>
    </div>

    <ul class="ultima-menu profile-menu" [@menu]="active ? 'visible' : 'hidden'">
      <li role="menuitem">
        <a class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
          <i class="material-icons">person</i>
          <span>个人资料</span>
        </a>
      </li>
      <li role="menuitem">
        <a class="ripplelink" routerLink="./resetpwd" [attr.tabindex]="!active ? '-1' : null">
          <i class="material-icons">security</i>
          <span>修改密码</span>
        </a>
      </li>
      <li role="menuitem">
        <a class="ripplelink" [attr.tabindex]="!active ? '-1' : null" (click)="toogleProfileModel()">
          <i class="material-icons">settings_application</i>
          <span>切换位置</span>
        </a>
      </li>
      <li role="menuitem">
        <a class="ripplelink" [attr.tabindex]="!active ? '-1' : null" href='' (click)="logout()">
          <i class="material-icons">power_settings_new</i>
          <span>安全退出</span>
        </a>
      </li>
    </ul>
  `,
  animations: [
    trigger('menu', [
      state('hidden', style({
        height: '0px'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AppInlineProfileComponent {

  active: boolean;

  constructor(public app: HomeComponent,
              private loginService:LoginService,
              public router: Router) {
  }

  onClick(event) {
    this.active = !this.active;
    setTimeout(() => {
      this.app.layoutMenuScrollerViewChild.moveBar();
    }, 450);
    event.preventDefault();
  }

  toogleProfileModel() {
    this.app.profileMode = this.app.profileMode === 'top' ? 'inline' : 'top';
  }

  logout() {
    this.loginService.logOut();
    this.router.navigateByUrl('/login');
    // TODO:广播登出事件 该请的要清了
  }
}
