"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    DialogService = __decorate([
        core_1.Injectable()
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map