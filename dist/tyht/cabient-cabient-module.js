(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cabient-cabient-module"],{

/***/ "./src/app/cabient/cabient-routing-module.ts":
/*!***************************************************!*\
  !*** ./src/app/cabient/cabient-routing-module.ts ***!
  \***************************************************/
/*! exports provided: CabientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabientRoutingModule", function() { return CabientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cabient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cabient.component */ "./src/app/cabient/cabient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _cabient_component__WEBPACK_IMPORTED_MODULE_2__["CabientComponent"] }
];
var CabientRoutingModule = /** @class */ (function () {
    function CabientRoutingModule() {
    }
    CabientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CabientRoutingModule);
    return CabientRoutingModule;
}());



/***/ }),

/***/ "./src/app/cabient/cabient.component.html":
/*!************************************************!*\
  !*** ./src/app/cabient/cabient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let obj of equipmentArrs.reverse()\" [ngStyle]=\"{'background-color':!obj.id?'#fff':'transparent'}\">\n    <b *ngIf=\"obj.isEnd||!obj.status\" [ngClass]=\"{'empty': !obj.status , 'dang': obj.status == '警告', 'book': obj.status == '预定','normal': obj.status == '在线'}\"></b><span>{{obj.index}}</span>\n    <img *ngIf=\"obj.isEnd\" [ngStyle]=\"{'height.px':obj.size*20,'width':'100%'}\"  src=\"assets/img/u.png\">\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/cabient/cabient.component.scss":
/*!************************************************!*\
  !*** ./src/app/cabient/cabient.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 30px;\n  background-color: #ccc;\n  width: 225px; }\n\nli {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  height: 20px;\n  line-height: 20px;\n  position: relative;\n  width: 215px;\n  overflow: visible;\n  border-bottom: 1px solid #ccc; }\n\nli > img {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\nli > span {\n  position: absolute;\n  width: 30px;\n  text-align: center;\n  top: 0px;\n  right: -30px; }\n\nli > b {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 10px;\n  top: 6px;\n  left: -16px;\n  background-color: transparent; }\n\nli > b.empty {\n  background-color: blue; }\n\nli > b.danger {\n  background-color: red; }\n\nli > b.book {\n  background-color: yellow; }\n\nli > b.normal {\n  background-color: green; }\n\n/deep/ * {\n  box-sizing: content-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJwcm9qZWN0L3R5aHQvc3JjL2FwcC9jYWJpZW50L2NhYmllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFBRzs7QUFFakI7RUFDRSxXQUFVO0VBQ1YsVUFBUztFQUNULGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLDhCQUE2QixFQUFHOztBQUVsQztFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTyxFQUFHOztBQUVaO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLGFBQVksRUFBRzs7QUFFakI7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsU0FBUTtFQUNSLFlBQVc7RUFDWCw4QkFBNkIsRUFBRzs7QUFFbEM7RUFDRSx1QkFBc0IsRUFBRzs7QUFFM0I7RUFDRSxzQkFBcUIsRUFBRzs7QUFFMUI7RUFDRSx5QkFBd0IsRUFBRzs7QUFFN0I7RUFDRSx3QkFBdUIsRUFBRzs7QUFDNUI7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jYWJpZW50L2NhYmllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHdpZHRoOiAyMjVweDsgfVxuXG5saSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjE1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsgfVxuXG5saSA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwOyB9XG5cbmxpID4gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtMzBweDsgfVxuXG5saSA+IGIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0b3A6IDZweDtcbiAgbGVmdDogLTE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbmxpID4gYi5lbXB0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7IH1cblxubGkgPiBiLmRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgfVxuXG5saSA+IGIuYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgfVxuXG5saSA+IGIubm9ybWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47IH1cbi9kZWVwLyAqe1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cabient/cabient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cabient/cabient.component.ts ***!
  \**********************************************/
/*! exports provided: CabientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabientComponent", function() { return CabientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_public_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/public.service */ "./src/app/service/public.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CabientComponent = /** @class */ (function () {
    function CabientComponent(publicService) {
        this.publicService = publicService;
        this.equipmentArrs = [];
    }
    CabientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.totalSize = Math.floor(Math.random() * (50 - 20 + 1) + 30);
        this.publicService.getEquipment().subscribe(function (data) {
            _this.devices = data;
            _this.equipmentArrs = _this.initEquipmentArrs(_this.totalSize);
            for (var _i = 0, _a = _this.devices; _i < _a.length; _i++) {
                var device = _a[_i];
                var begin = device.location * 1 - 1;
                var end = device.location * 1 - 1 + device.size * 1;
                for (var i = begin; i < end; i++) {
                    _this.equipmentArrs[i] = Object.assign({}, device);
                    if (i === end - 1) {
                        _this.equipmentArrs[i]['isEnd'] = true;
                    }
                    else {
                        _this.equipmentArrs[i]['isEnd'] = false;
                    }
                }
            }
            for (var i = 0; i < _this.totalSize; i++) {
                _this.equipmentArrs[i]['index'] = i + 1;
            }
            console.log(_this.equipmentArrs);
        });
    };
    CabientComponent.prototype.initEquipmentArrs = function (size) {
        var result = [];
        for (var i = 0; i < size; i++) {
            result.push({});
        }
        return result;
    };
    CabientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cabient',
            template: __webpack_require__(/*! ./cabient.component.html */ "./src/app/cabient/cabient.component.html"),
            styles: [__webpack_require__(/*! ./cabient.component.scss */ "./src/app/cabient/cabient.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_public_service__WEBPACK_IMPORTED_MODULE_1__["PublicService"]])
    ], CabientComponent);
    return CabientComponent;
}());



/***/ }),

/***/ "./src/app/cabient/cabient.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cabient/cabient.module.ts ***!
  \*******************************************/
/*! exports provided: CabientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabientModule", function() { return CabientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _cabient_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cabient-routing-module */ "./src/app/cabient/cabient-routing-module.ts");
/* harmony import */ var _cabient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cabient.component */ "./src/app/cabient/cabient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CabientModule = /** @class */ (function () {
    function CabientModule() {
    }
    CabientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_1__["ShareModule"],
                _cabient_routing_module__WEBPACK_IMPORTED_MODULE_2__["CabientRoutingModule"]
            ],
            declarations: [_cabient_component__WEBPACK_IMPORTED_MODULE_3__["CabientComponent"]]
        })
    ], CabientModule);
    return CabientModule;
}());



/***/ })

}]);
//# sourceMappingURL=cabient-cabient-module.js.map