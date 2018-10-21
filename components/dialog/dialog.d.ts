import { EventEmitter } from "@angular/core";
export interface Dialog {
    message: string;
    key?: string;
    delay?: number;
    icon?: string;
    header?: string;
    accept?: Function;
    reject?: Function;
    okLabel?: string;
    offLabel?: string;
    okVisible?: boolean;
    offVisible?: boolean;
    okButton?: string;
    offButton?: string;
    acceptEvent?: EventEmitter<any>;
    rejectEvent?: EventEmitter<any>;
}
