"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var footer_component_1 = require("./footer.component");
var dialog_service_1 = require("./dialog.service");
;
var rxjs_1 = require("rxjs");
var common_1 = require("@angular/common");
var animations_2 = require("@angular/animations");
var HTML_TEMPLATE = "\n<div class=\"g-dialog-container\" *ngIf=\"visible\" [@scale]  [ngStyle]=\"{'background':'rgba(0,0,0,+'+opacity+')','zIndex':zIndex}\">\n      <div class=\"overlay\" (click)=\"hide()\" *ngIf=\"!(dialog.accept&&dialog.reject)\"></div>\n      <div class=\"dialog-window\" [style.width.px]=\"width\" [style.height.px]=\"height\" [ngStyle]=\"{'zIndex':zIndex}\">\n        <div [ngClass]=\"header\" class=\"dialog-header\"></div>\n        <div class=\"dialog-content\" [innerHTML]=\"message\"></div>\n        <div class=\"dialog-footer\" *ngIf=\"footer\">\n          <ng-content select=\"xxd-footer\"></ng-content>\n        </div>\n        <div class=\"dialog-footer\" *ngIf=\"!footer\">\n          <button [ngClass]=\"okButton\" (click)=\"accept()\" *ngIf=\"okVisible\">{{okLabel}}</button>\n          <button [ngClass]=\"offButton\" (click)=\"reject()\" *ngIf=\"offVisible\">{{offLabel}}</button>\n        </div>\n      </div>\n</div>\n";
var css_STYLE = "   \n   .g-dialog-container {\n  color: #ffffff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .g-dialog-container .dialog-window {\n    width: 15rem;\n    padding: 1rem;\n    border-radius: 10px;\n    background: rgba(0, 0, 0, 0.8);\n    transition: all 0.9s cubic-bezier(0.43, -0.14, 0.34, 1.6); }\n    .g-dialog-container .dialog-window .dialog-header {\n      width: 45px;\n      height: 45px;\n      margin: 0 auto;\n      border: 2px solid #fff;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      .g-dialog-container .dialog-window .dialog-header.ok:after {\n        content: '';\n        display: block;\n        width: 30px;\n        height: 10px;\n        border: 2px solid #fff;\n        border-width: 0 0 2px 2px;\n        transform: rotate(-50deg); }\n      .g-dialog-container .dialog-window .dialog-header.warning {\n        transform: rotate(90deg); }\n        .g-dialog-container .dialog-window .dialog-header.warning:before {\n          content: '';\n          display: block;\n          width: 20px;\n          height: 5px;\n          background: #fff;\n          margin-right: 5px; }\n        .g-dialog-container .dialog-window .dialog-header.warning:after {\n          content: '';\n          display: block;\n          width: 5px;\n          height: 5px;\n          border-radius: 50%;\n          background: #fff; }\n      .g-dialog-container .dialog-window .dialog-header.waiting:before {\n        content: '';\n        display: block;\n        width: 5px;\n        height: 5px;\n        background: yellow;\n        border-radius: 50%;\n        animation: waiting1 0.8s infinite; }\n      .g-dialog-container .dialog-window .dialog-header.waiting:after {\n        content: '';\n        display: block;\n        width: 5px;\n        height: 5px;\n        background: red;\n        border-radius: 50%;\n        animation: waiting2 0.8s infinite; }\n    .g-dialog-container .dialog-window .dialog-content {\n      padding: 1rem 1rem 0;\n      font-size: 1rem;\n      text-align: center; }\n    .g-dialog-container .dialog-window .dialog-footer {\n      padding: 1rem 1rem 0;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      .g-dialog-container .dialog-window .dialog-footer button {\n        background: rgba(255, 255, 255, 0.8);\n        border: none;\n        padding: 0.5rem 1.5rem;\n        margin: 0.3rem;\n        text-shadow: #666 1px 1px;\n        outline: none;\n        font-size: 1rem;\n        border-radius: 5px;\n        color: #eee; }\n        .g-dialog-container .dialog-window .dialog-footer button.green {\n          background-color: #0f8f0f; }\n          .g-dialog-container .dialog-window .dialog-footer button.green:hover {\n            background-color: #0a610a; }\n          .g-dialog-container .dialog-window .dialog-footer button.green:active {\n            background-color: #1de71d; }\n        .g-dialog-container .dialog-window .dialog-footer button.red {\n          background-color: #8f0f0f; }\n          .g-dialog-container .dialog-window .dialog-footer button.red:hover {\n            background-color: #610a0a; }\n          .g-dialog-container .dialog-window .dialog-footer button.red:active {\n            background-color: #e71d1d; }\n        .g-dialog-container .dialog-window .dialog-footer button.blue {\n          background-color: #39b9c6; }\n          .g-dialog-container .dialog-window .dialog-footer button.blue:hover {\n            background-color: #2e949e; }\n          .g-dialog-container .dialog-window .dialog-footer button.blue:active {\n            background-color: #88d5dd; }\n\n@keyframes waiting1 {\n  0% {\n    transform: translate(-5px 0); }\n  50% {\n    transform: translate(10px, 0); }\n  100% {\n    transform: translate(-5px, 0); } }\n@keyframes waiting2 {\n  0% {\n    transform: translate(5px, 0); }\n  50% {\n    transform: translate(-10px, 0); }\n  100% {\n    transform: translate(5px, 0); } }\n    .overlay{\n      position:absolute;\n      top:0;\n      left:0;\n      width:100%;\n      height:100%;\n      z-index:9999;\n    }\n";
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogService) {
        this.dialogService = dialogService;
        this.header = 'waiting';
        this.width = "auto";
        this.height = "auto";
        this.opacity = ".5";
        this.message = 'How are you';
        this.okLabel = '确定';
        this.offLabel = '取消';
        this.okVisible = true;
        this.offVisible = true;
        this.okButton = 'blue';
        this.offButton = 'green';
    }
    DialogComponent.prototype.accept = function () {
        if (this.dialog.acceptEvent) {
            this.dialog.acceptEvent.emit();
        }
        else {
            this.hide();
            this.dialog = null;
        }
    };
    DialogComponent.prototype.reject = function () {
        if (this.dialog.rejectEvent) {
            this.dialog.rejectEvent.emit();
        }
        else {
            this.hide();
            this.dialog = null;
        }
    };
    DialogComponent.prototype.hide = function () {
        this.visible = false;
    };
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dialogService.requireDialogSource$.subscribe(function (dialog) {
            if (dialog == null) {
                _this.hide();
                return;
            }
            if (dialog.key == _this.key) {
                _this.dialog = dialog;
                _this.message = _this.dialog.message || _this.message;
                _this.okLabel = _this.dialog.okLabel || _this.okLabel;
                _this.offLabel = _this.dialog.offLabel || _this.offLabel;
                _this.okVisible = _this.dialog.okVisible == null ? _this.okVisible : _this.dialog.okVisible;
                _this.offVisible = _this.dialog.offVisible == null ? _this.offVisible : _this.dialog.offVisible;
                _this.zIndex = _this.dialogService.zIndex || _this.zIndex;
                _this.header = _this.dialog.header || _this.header;
                _this.delay = _this.dialog.delay || _this.delay;
                _this.okButton = _this.dialog.okButton || _this.okButton;
                _this.offButton = _this.dialog.offButton || _this.offButton;
                if (_this.dialog.accept) {
                    _this.dialog.acceptEvent = new core_1.EventEmitter();
                    _this.dialog.acceptEvent.subscribe(function () {
                        _this.dialog.accept();
                        _this.hide();
                        _this.dialog = null;
                    });
                }
                if (_this.dialog.reject) {
                    _this.dialog.rejectEvent = new core_1.EventEmitter();
                    _this.dialog.rejectEvent.subscribe(function () {
                        _this.dialog.reject();
                        _this.hide();
                        _this.dialog = null;
                    });
                }
                if (_this.delay && _this.delay != 0) {
                    rxjs_1.timer(_this.delay).subscribe(function (val) { return _this.visible = false; });
                }
                _this.visible = true;
            }
        });
    };
    DialogComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "height", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "opacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "okLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "offLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DialogComponent.prototype, "zIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "okVisible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "offVisible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "okButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "offButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DialogComponent.prototype, "delay", void 0);
    __decorate([
        core_1.ViewChild('mask'),
        __metadata("design:type", core_1.ElementRef)
    ], DialogComponent.prototype, "mask", void 0);
    __decorate([
        core_1.ContentChild(footer_component_1.Footer),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "footer", void 0);
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'xxd-dialog',
            template: HTML_TEMPLATE,
            styles: [css_STYLE],
            animations: [
                animations_1.trigger('scale', [animations_2.transition('*<=>*', [
                        animations_1.query('.dialog-window', [
                            animations_2.style({ transform: 'scale(0,0)' }),
                            animations_2.stagger('0ms', animations_1.animate('100ms cubic-bezier(0.43, -0.14, 0.34, 1.6)', animations_2.style({ transform: 'scale(1,1)' })))
                        ], { optional: true }),
                        animations_1.query('.dialog-window', [
                            animations_1.animate('100ms', animations_2.style({ transform: 'scale(0,0)' }))
                        ], { optional: true })
                    ])])
            ]
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [DialogComponent, footer_component_1.Footer],
            exports: [DialogComponent, footer_component_1.Footer]
        })
    ], DialogModule);
    return DialogModule;
}());
exports.DialogModule = DialogModule;
//# sourceMappingURL=dialog.component.js.map