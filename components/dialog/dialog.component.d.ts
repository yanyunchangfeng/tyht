import { OnDestroy, OnInit } from '@angular/core';
import { DialogService } from "./dialog.service";
import { Subscription } from "rxjs";
import { Dialog } from "./dialog";
export declare class DialogComponent implements OnDestroy, OnInit {
    private dialogService;
    header: string;
    key: string;
    width: string;
    height: string;
    opacity: number;
    message: string;
    okLabel: string;
    offLabel: string;
    zIndex: number;
    okVisible: boolean;
    offVisible: boolean;
    okButton: string;
    offButton: string;
    visible: boolean;
    delay: number;
    dialog: Dialog;
    footer: any;
    subscription: Subscription;
    constructor(dialogService: DialogService);
    accept(): void;
    reject(): void;
    hide(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class DialogModule {
}
