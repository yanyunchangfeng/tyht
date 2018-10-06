import {EventEmitter} from "@angular/core";

export interface Dialog{
  message: string;
  key?: string;
  icon?: string;
  header?: string;
  accept?: Function;
  reject?: Function;
  okLabel?: string;
  offLabel?: string;
  okVisible?: boolean;
  offVisible?: boolean;
  acceptEvent?: EventEmitter<any>;
  rejectEvent?: EventEmitter<any>;
}
