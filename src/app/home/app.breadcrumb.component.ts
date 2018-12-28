import {Component, OnDestroy} from '@angular/core';
import {BreadcrumbService} from "../service/breadcrumb.service"
import {Subscription} from 'rxjs/index';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-breadcrumb',
  template:
  `
  <div class="layout-breadcrumb">
    <ul>
        <li>
            <a>
                <i class="material-icons">home</i>
            </a>
        </li>
        <li>/</li>
    </ul>

    <div class="layout-breadcrumb-options">
        <a  title="Logout" >
            <i class="material-icons">power_settings_new</i>
        </a>
    </div>
</div>
  `
})
export class AppBreadcrumbComponent implements OnDestroy {

  subscription: Subscription;

  items: MenuItem[];

  constructor(public breadcrumbService: BreadcrumbService) {
    this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
      this.items = response;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
