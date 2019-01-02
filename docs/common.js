(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/common/base-page.ts":
/*!*************************************!*\
  !*** ./src/app/common/base-page.ts ***!
  \*************************************/
/*! exports provided: BasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePage", function() { return BasePage; });
var BasePage = /** @class */ (function () {
    function BasePage(dialogService) {
        this.dialogService = dialogService;
    }
    BasePage.prototype.alert = function (msg) {
        this.dialogService.confirm({
            message: msg,
            header: 'ok',
            okVisible: false,
            offVisible: false,
            delay: 1500
        });
    };
    BasePage.prototype.warn = function (msg) {
        this.dialogService.confirm({
            message: msg,
            header: 'warning',
            okVisible: false,
            offVisible: false,
            delay: 1500
        });
    };
    BasePage.prototype.loading = function (msg) {
        this.loadingInstance = this.dialogService.confirm({
            message: msg,
            header: 'waiting',
            okVisible: false,
            offVisible: false,
        });
    };
    BasePage.prototype.unloading = function () {
        if (this.loadingInstance) {
            this.loadingInstance.close();
        }
    };
    BasePage.prototype.handleError = function (err) {
        if (err['ok'] === false) {
            this.warn(err['message']);
            return;
        }
        this.warn(err['message']);
    };
    BasePage.prototype.confirm = function (msg, acceptcbk, rejectcbk) {
        this.dialogService.confirm({
            message: msg,
            header: 'warning',
            accept: function () {
                if (acceptcbk && typeof acceptcbk === 'function') {
                    acceptcbk();
                }
            },
            reject: function () {
                if (rejectcbk && typeof rejectcbk === 'function') {
                    rejectcbk();
                }
            }
        });
    };
    return BasePage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map