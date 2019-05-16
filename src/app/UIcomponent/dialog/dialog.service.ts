import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs";
// import {Observable} from "rxjs";
import {Dialog} from "./dialog";
@Injectable()
export class DialogService{
  zIndex: number = 10000;
  private requireDialogSource = new ReplaySubject<Dialog>(1);
  requireDialogSource$ = this.requireDialogSource.asObservable();
  confirm(dialog: Dialog) {
    this.zIndex++;
    this.requireDialogSource.next(dialog);
    return this;
  }
  close() {
    this.requireDialogSource.next(null);
  }
}
