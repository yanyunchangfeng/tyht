import { Injectable } from '@angular/core';
import {Subject,Observable} from "rxjs/index"
import { MenuItem } from 'primeng/primeng';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

    private itemsSource = new Subject<MenuItem[]>();

    itemsHandler = this.itemsSource.asObservable();

    setItems(items: MenuItem[]) {
        this.itemsSource.next(items);
    }
}
