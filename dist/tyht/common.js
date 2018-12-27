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



/***/ }),

/***/ "./src/app/service/public.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/public.service.ts ***!
  \*******************************************/
/*! exports provided: PublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicService", function() { return PublicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicService = /** @class */ (function () {
    function PublicService(http) {
        this.http = http;
    }
    PublicService.prototype.getEquipment = function () {
        return this.http.get('assets/equipment.json');
    };
    PublicService.prototype.getAreas = function () {
        return this.http.get('assets/province.json').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['province']; }));
    };
    PublicService.prototype.getOptions = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('token', '78erewregvfdsgfsd');
        var options = { headers: headers };
        return options;
    };
    PublicService.prototype.getData = function () {
        return this.http.get('assets/piedata.json');
    };
    PublicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PublicService);
    return PublicService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map