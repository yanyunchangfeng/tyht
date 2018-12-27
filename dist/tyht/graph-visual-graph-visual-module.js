(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["graph-visual-graph-visual-module"],{

/***/ "./src/app/graph-visual/graph-visual-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/graph-visual/graph-visual-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GraphVisualRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphVisualRoutingModule", function() { return GraphVisualRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _visual_visual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual/visual.component */ "./src/app/graph-visual/visual/visual.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', component: _visual_visual_component__WEBPACK_IMPORTED_MODULE_2__["VisualComponent"] }
];
var GraphVisualRoutingModule = /** @class */ (function () {
    function GraphVisualRoutingModule() {
    }
    GraphVisualRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GraphVisualRoutingModule);
    return GraphVisualRoutingModule;
}());



/***/ }),

/***/ "./src/app/graph-visual/graph-visual.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/graph-visual/graph-visual.module.ts ***!
  \*****************************************************/
/*! exports provided: GraphVisualModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphVisualModule", function() { return GraphVisualModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graph_visual_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph-visual-routing.module */ "./src/app/graph-visual/graph-visual-routing.module.ts");
/* harmony import */ var _visual_visual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual/visual.component */ "./src/app/graph-visual/visual/visual.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GraphVisualModule = /** @class */ (function () {
    function GraphVisualModule() {
    }
    GraphVisualModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _graph_visual_routing_module__WEBPACK_IMPORTED_MODULE_1__["GraphVisualRoutingModule"]
            ],
            declarations: [_visual_visual_component__WEBPACK_IMPORTED_MODULE_2__["VisualComponent"]]
        })
    ], GraphVisualModule);
    return GraphVisualModule;
}());



/***/ }),

/***/ "./src/app/graph-visual/visual/visual.component.html":
/*!***********************************************************!*\
  !*** ./src/app/graph-visual/visual/visual.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-6 ui-sm-12\">\n    <echart [graphOpt]=\"charType\" class=\"echarts-style\"></echart>\n  </div>\n  <div class=\"ui-g-6 ui-sm-12\">\n    <div class=\"echarts-style\" #demo></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/graph-visual/visual/visual.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/graph-visual/visual/visual.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".echarts-style {\n  width: 100%;\n  height: 400px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJwcm9qZWN0L3R5aHQvc3JjL2FwcC9ncmFwaC12aXN1YWwvdmlzdWFsL3Zpc3VhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxjQUFZO0VBQ1osWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvZ3JhcGgtdmlzdWFsL3Zpc3VhbC92aXN1YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWNoYXJ0cy1zdHlsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo0MDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/graph-visual/visual/visual.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/graph-visual/visual/visual.component.ts ***!
  \*********************************************************/
/*! exports provided: VisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualComponent", function() { return VisualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_public_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/public.service */ "./src/app/service/public.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisualComponent = /** @class */ (function () {
    function VisualComponent(publicService, router) {
        this.publicService = publicService;
        this.router = router;
        this.charType = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 3350, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 500, name: '搜索引擎' }
                    ]
                }
            ]
        };
        this.nameList = [
            '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
        ];
    }
    VisualComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.genData(50);
        this.echart = echarts__WEBPACK_IMPORTED_MODULE_3__["init"](this.demo.nativeElement);
        this.echart.setOption({
            title: {
                text: '同名数量统计',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: this.data.legendData,
                selected: this.data.selected,
            },
            series: [
                {
                    name: '姓名',
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: this.data.seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ],
            color: ['#25859e', '#6acece', '#e78816', '#eabc7f', '#12619d']
        });
        // this.echart1 = echarts.init(this.demo1.nativeElement);
        this.publicService.getData().subscribe(function (data) {
            /*
            this.echart1.setOption({
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              },
              series: [
                {
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: true,
                      textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:data
                }
              ],
            })
            */
            //以下是指令方法二
            _this.charType = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: data
                    }
                ]
            };
        });
    };
    VisualComponent.prototype.genData = function (count) {
        var legendData = [];
        var seriesData = [];
        var selected = {};
        var name = '';
        for (var i = 0; i < count; i++) {
            name = Math.random() > 0.65 ? this.makeWord(4, 1) + '.' + this.makeWord(3, 0) : this.makeWord(2, 1);
            legendData.push(name);
            seriesData.push({ name: name, value: Math.round(Math.random() * 10000) });
            selected[name] = i < 6;
        }
        return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
        };
    };
    VisualComponent.prototype.makeWord = function (max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(this.nameList[Math.round(Math.random() * this.nameList.length - 1)]);
        }
        return name.join('');
    };
    VisualComponent.prototype.onResize = function (event) {
        this.echart.resize();
    };
    VisualComponent.prototype.ngOnDestroy = function () {
        console.log(this.echart);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('demo'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VisualComponent.prototype, "demo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VisualComponent.prototype, "onResize", null);
    VisualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visual',
            template: __webpack_require__(/*! ./visual.component.html */ "./src/app/graph-visual/visual/visual.component.html"),
            styles: [__webpack_require__(/*! ./visual.component.scss */ "./src/app/graph-visual/visual/visual.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_public_service__WEBPACK_IMPORTED_MODULE_1__["PublicService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VisualComponent);
    return VisualComponent;
}());



/***/ })

}]);
//# sourceMappingURL=graph-visual-graph-visual-module.js.map