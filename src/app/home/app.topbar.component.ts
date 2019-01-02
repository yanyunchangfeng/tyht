import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HomeComponent} from './home.component';

enum MenuOrientation {
  STATIC,
  OVERLAY,
  SLIM,
  HORIZONTAL
}

@Component({
  selector: 'app-topbar',
  template: `
    <div class="topbar clearfix">
      <div class="topbar-left">
        <div class="logo"></div>
      </div>

      <div class="topbar-right">
        <a id="menu-button" (click)="app.onMenuButtonClick($event)">
          <i></i>
        </a>
        <a id="rightpanel-menu-button">
          <i class="material-icons">more_vert</i>
        </a>
        <a id="topbar-menu-button" >
          <i class="material-icons">menu</i>
        </a>
        <ul class="topbar-items animated fadeInDown" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
          <li #profile class="profile-item" *ngIf="app.profileMode==='top'||app.isHorizontal()"
              [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">

            <a>
              <img class="profile-image" src="assets/img/ym.jpg"/>
              <span class="topbar-item-name">浪漫的野马</span>
            </a>

            <ul class="ultima-menu animated fadeInDown">
              <li role="menuitem">
                <a>
                  <i class="material-icons">person</i>
                  <span>个人资料</span>
                </a>
              </li>
              <li role="menuitem">
                <a routerLink="./resetpwd" >
                  <i class="material-icons">security</i>
                  <span>修改密码</span>
                </a>
              </li>
              <li role="menuitem">
                <a>
                  <i class="material-icons">settings_application</i>
                  <span>切换位置</span>
                </a>
              </li>
              <li role="menuitem">
                <a (click)="logout()">
                  <i class="material-icons">power_settings_new</i>
                  <span>安全退出</span>
                </a>
              </li>
            </ul>
          </li>
          <li #settings [ngClass]="{'active-top-menu':app.activeTopbarItem === settings}">
            <a>
              <i class="topbar-icon material-icons">settings</i>
              <span class="topbar-item-name">设置</span>
            </a>
            <ul class="ultima-menu animated fadeInDown">
              <li role="menuitem">
                <a >
                  <i class="material-icons">lock</i>
                  <span>锁屏</span>
                </a>
              </li>
            </ul>
          </li>
          <li #messages [ngClass]="{'active-top-menu':app.activeTopbarItem === messages}">
            <a>
              <i class="topbar-icon material-icons animated swing">message</i>
              <span class="topbar-badge animated rubberBand">5</span>
              <span class="topbar-item-name">消息</span>
            </a>
            <ul class="ultima-menu animated fadeInDown">
              <li role="menuitem">
                <a  class="topbar-message">

                  <img src="assets/img/ym.jpg" width="35"/>
                </a>
              </li>
              <li role="menuitem">
                <a  class="topbar-message">

                  <img src="assets/img/ym.jpg" width="35"/>

                  <span>消息内容2</span>
                </a>
              </li>
              <li role="menuitem">

                  <img src="assets/img/ym.jpg" width="35"/>

                  <span>消息内容3</span>
              </li>
              <li role="menuitem">
                <a  class="topbar-message">

                  <span>消息内容4</span>
                </a>
              </li>
              <li role="menuitem">
                <a  class="topbar-message">

                  <span>消息内容5</span>
                </a>
              </li>
            </ul>
          </li>
          <li #notifications [ngClass]="{'active-top-menu':app.activeTopbarItem === notifications}">
            <a>
              <i class="topbar-icon material-icons">timer</i>
              <span class="topbar-badge animated rubberBand">4</span>
              <span class="topbar-item-name">通知公告</span>
            </a>
            <ul class="ultima-menu animated fadeInDown">
              <li role="menuitem">
                <a >
                  <i class="material-icons">event</i>
                  <span>通知1通知1</span>
                </a>
              </li>
              <li role="menuitem">
                <a >
                  <i class="material-icons">event</i>
                  <span>通知2通知2</span>
                </a>
              </li>
              <li role="menuitem">
                <a >
                  <i class="material-icons">event</i>
                  <span>通知3通知3</span>
                </a>
              </li>
              <li role="menuitem">
                <a >
                  <i class="material-icons">event</i>
                  <span>通知4通知4</span>
                </a>
              </li>
            </ul>
          </li>
          <li #search class="search-item" [ngClass]="{'active-top-menu':app.activeTopbarItem === search}">
                        <span class="md-inputfield">
                            <input type="text" pInputText>
                            <label>Search</label>
                            <i class="topbar-icon material-icons">search</i>
                        </span>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class AppTopbarComponent {

  constructor(public app: HomeComponent, public router: Router) {
  }

  toogleProfileModel() {
    this.app.profileMode = this.app.profileMode === 'top' ? 'inline' : 'top';
  }

  logout() {
    this.router.navigateByUrl('sx/sxlogin');
    // TODO:广播登出事件 该请的要清了
  }
}
