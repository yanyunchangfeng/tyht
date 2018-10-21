import { Observable } from "rxjs";
import { Dialog } from "./dialog";
export declare class DialogService {
    zIndex: number;
    private requireDialogSource;
    requireDialogSource$: Observable<Dialog>;
    confirm(dialog: Dialog): this;
    close(): void;
}
