import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {HomeComponent} from "./home.component";
// import {SelectItem} from '../UIcomponent/primeng/components/common/selectitem';
// import {ScrollPanel} from '../UIcomponent/primeng/components/scrollpanel/scrollpanel';
import{ScrollPanel} from 'primeng/components/scrollpanel/scrollpanel';
@Component({
  selector: 'app-rightpanel',
  template: `
    <div class="layout-rightpanel" [ngClass]="{'layout-rightpanel-active': app.rightPanelActive}"
         >
      <p-scrollPanel #scrollRightPanel [style]="{height: '100%'}">
        <div class="layout-rightpanel-wrapper">
          <div class="layout-rightpanel-header themeColor">
            <div class="weather-day">星期三</div>
            <div class="weather-date">2018-06-06</div>
          </div>
          <div class="layout-rightpanel-content">
            <h1>切换主题</h1>
            <div class="ui-g" style="margin-top: 20px">
              <div class="ui-g-12 ui-md-12">
                <button class="ui-g-12" type="button" label="默认" (click)="changeTheme('default')" pButton
                        style="background-color: #333333"></button>
              </div>
              <div class="ui-g-12 ui-md-12 ">
                <button class="ui-g-12" type="button" label="蓝色" (click)="changeTheme('blue')" pButton
                        style="background-color: #3F51B5"></button>
              </div>
              <div class="ui-g-12  ui-md-12 ">
                <button class="ui-g-12" type="button" label="灰色" (click)="changeTheme('grey')" pButton
                        style="background-color: #757575"></button>
              </div>
            </div>
            <h1 style="margin-top: 20px;margin-bottom: 20px">菜单模式</h1>
            <div class="ui-g">
              <div class="ui-g-12 ">
                <button class="ui-g-12" type="button" label="固定" pButton
                        icon="ui-icon-reorder"></button>
              </div>
            </div>
            <div class="ui-g">
              <div class="ui-g-12 ">
                <button class="ui-g-12" type="button" label="模态"  pButton
                        icon="ui-icon-format-indent-increase"></button>
              </div>
            </div>
            <div class="ui-g">
              <div class="ui-g-12 ">
                <button class="ui-g-12" type="button" label="微型"  pButton
                        icon="ui-icon-more-vert"></button>
              </div>
            </div>
            <div class="ui-g-12 ">
              <button class="ui-g-12" type="button" label="吸顶"  pButton
                      icon="ui-icon-border-horizontal"></button>
            </div>
          </div>
        </div>
      </p-scrollPanel>
    </div>
  `
})
export class AppRightpanelComponent implements AfterViewInit {

  @ViewChild('scrollRightPanel') rightPanelMenuScrollerViewChild: ScrollPanel;


  constructor(public app: HomeComponent) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.rightPanelMenuScrollerViewChild.moveBar();
    }, 100);
  }

  changeTheme(theme) {
    const themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
    const layoutLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('layout-css');
    themeLink.href = 'assets/theme/theme-' + theme + '.css';
    layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
  }
}
