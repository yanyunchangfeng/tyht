"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var DialogService = /** @class */ (function () {
    function DialogService() {
        this.zIndex = 10000;
        this.requireDialogSource = new rxjs_1.ReplaySubject(1);
        this.requireDialogSource$ = this.requireDialogSource.asObservable();
    }
    DialogService.prototype.confirm = function (dialog) {
        this.zIndex++;
        this.requireDialogSource.next(dialog);
        return this;
    };
    DialogService.prototype.close = function () {
        this.requireDialogSource.next(null);
    };
    DialogService.decorators = [
        { type: core_1.Injectable },
    ];
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map