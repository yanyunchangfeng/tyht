import { Dialog } from "./dialog";
export declare class DialogService {
    zIndex: number;
    private requireDialogSource;
    requireDialogSource$: import("rxjs").Observable<Dialog>;
    confirm(dialog: Dialog): this;
    close(): void;
}
