function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<mat-toolbar>\n    <span>Charge Settings</span>\n</mat-toolbar>\n\n<mat-card [style.textAlign]=\"center\" [style.height]=\"'100%'\">\n    <mat-card-content [style.display]=\"inline-block\">\n        <div>\n            <h3>Miles Needed:</h3>\n            <div><mat-slider [style.width]=\"'95%'\" min=0 max=200 step=5 thumbLabel [(ngModel)]=\"chargeSettings.milesNeeded\" ></mat-slider><div class=\"sliderLabelsContainer\" ><span class=\"sliderLabel\">0</span> <span class=\"sliderLabel\">200</span></div></div>\n        </div>\n        <mat-divider></mat-divider>\n        <div>\n            <h3>Type of Charging: </h3>\n            <mat-radio-group style=\"display: flex; flex-direction: column; margin: 15px 0;\" [(ngModel)]=\"chargeSettings.flexible\">\n                <mat-radio-button [value] = \"false\" [style.margin]=\"'5px'\">\n                    <div *ngIf=\"!chargeSettings.flexible; then pricingBlockI else simpleBlockI\"></div>\n                    <ng-template #simpleBlockI>Immediate</ng-template>\n                    <ng-template #pricingBlockI>\n                        <b>Immediate: </b><span class=\"pricing_det\">${{getPrice()}} -- {{chargeSettings.milesNeeded}} mi -- Completed by {{formatLabel(0)}}</span>\n                        <p class=\"pricing_det\" style=\"margin-block-start:0; margin-block-end:0;\">Additional $5 per hour past {{formatLabel(15)}}</p>\n                        <p class=\"pricing_det\" style=\"margin-block-start:0; margin-block-end:0;\">25 miles added per hour, until fully charged</p> \n                    </ng-template>\n                </mat-radio-button>\n                <mat-radio-button [value] = \"true\" [style.margin]=\"'5px'\">\n                    <div *ngIf=\"chargeSettings.flexible; then pricingBlockF else simpleBlockF\"></div>\n                    <ng-template #simpleBlockF>Flexible</ng-template>\n                    <ng-template #pricingBlockF>\n                        <b>Flexible: </b><span class=\"pricing_det\">${{getPrice()}} -- {{chargeSettings.milesNeeded}} mi / {{minToHours()}} -- Pick up {{formatLabel(depTimeSlider)}}</span>\n                        <p class=\"pricing_det\" style=\"margin-block-start:0; margin-block-end:0;\">Additional $10 per hour past {{formatLabel(depTimeSlider+15)}}. No additional range.</p>\n                        <p class=\"pricing_det\" style=\"margin-block-start:0; margin-block-end:0;\"><b>Climate Friendly Choice: </b> 10% less CO2 emissions!</p>\n                    </ng-template>\n                </mat-radio-button>\n            </mat-radio-group>\n        </div>\n        <mat-card [style.marginTop]=\"'2em'\" *ngIf=\"chargeSettings.flexible\" [style.backgroundColor]=\"'#3a155c'\">\n            <mat-card-content>\n                <div><input [style.width]=\"'95%'\" type=\"range\" min=\"0\" max=\"720\" step=\"5\" class=\"slider\" id=\"myRange\" value=\"0\" [(ngModel)]=\"depTimeSlider\"> <div class=\"sliderLabelsContainer\" [style.marginTop]=\"'5px'\"><span class=\"sliderLabel\">{{formatLabel(0)}}</span> <span class=\"sliderLabel\">{{formatLabel(720)}}</span></div></div>\n            </mat-card-content>\n        </mat-card>\n        <br *ngIf=\"chargeSettings.flexible\">\n        <mat-divider *ngIf=\"chargeSettings.flexible\"></mat-divider>\n        <div>\n            <p style=\"margin-block-end: 2px\">Departure Time: {{chargeSettings.flexible ? formatLabel(depTimeSlider) : formatLabel(0)}}</p>\n            <p style=\"margin-block-start: 2px\">Total Cost* : ${{getPrice()}}</p>\n        </div>\n    </mat-card-content>\n\n    <mat-card-actions style=\"text-align: center;\">\n        <button mat-raised-button type=\"submit\" [disabled] = \"!isSubmitValid()\" routerLink = '/status' style=\"display: inline-block\" color=\"primary\">Charge!</button>\n        <p routerLink=\"/noThanks\" > <u>No Thanks</u></p>\n    </mat-card-actions>\n    <footer class= \"foot\"><div style=\"display: flex; justify-content: space-between;\"><span>* assuming no overstay costs</span> <span><mat-icon routerLink=\"/vehicleSettings\">edit</mat-icon></span></div></footer>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/no-thanks/no-thanks.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/no-thanks/no-thanks.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNoThanksNoThanksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n    <mat-card-content>\n        <h1>No thanks was chosen, thank you for your time. <br><br><br> You may close this window.</h1>\n    </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/previous-sessions/previous-sessions.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/previous-sessions/previous-sessions.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreviousSessionsPreviousSessionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\n    <span>Previous Sessions</span>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/status/status.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/status/status.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStatusStatusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\n    <span>Status</span>\n</mat-toolbar>\n\n<mat-card [style.height]=\"'100%'\">\n    <mat-card-content>\n        <mat-progress-spinner style=\"margin: 0 auto;\" mode='determinate' color='primary' diameter=120 value=70></mat-progress-spinner>\n        <div>\n            <h1 style=\"margin-block-start: 2em; margin-block-end: 0; font-size: 1.2em;\">Charging Status: </h1>\n            <p style=\"margin-block-start: 2px; margin-block-end: 0.25em;\">28 out of 40 miles added</p>\n        </div>\n        <!-- <mat-divider></mat-divider> -->\n        <hr>\n        <div>\n            <h1 style=\"margin-block-start: 0.35em; margin-block-end: 0; font-size: 1.2em;\">Session Time: </h1>\n            <p style=\"margin-block-start: 6px; font-size: 125%\">3h 20 min remaining</p>\n        </div>\n    </mat-card-content>\n\n    <mat-card-actions style=\"text-align: center\">\n        <button mat-raised-button style=\"display: inline-block\" color=\"primary\"> Previous Sessions</button>\n    </mat-card-actions>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-settings/vehicle-settings.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-settings/vehicle-settings.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVehicleSettingsVehicleSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\n    <span>Vehicle Settings</span>\n</mat-toolbar>\n\n<mat-card style=\"text-align: center; height: 100%\">\n    <form [formGroup]=\"formCustom\" (ngSubmit) = \"onSubmit()\">\n        <mat-card-content>\n                <mat-form-field >\n                    <mat-select placeholder= \"Vehicle Type\" required [(value)]=\"vehicleType\">\n                        <mat-option *ngFor=\"let vehicle of presetCarOptions\" [value]=\"vehicle.name\">\n                            {{vehicle.name}}\n                        </mat-option>\n                        <mat-option value=\"Custom\">Custom</mat-option>\n                    </mat-select>\n                </mat-form-field>\n                \n                <mat-card *ngIf=\"vehicleType=='Custom'\" [style.backgroundColor]=\"'#3a155c'\">\n                    <mat-list>\n                        <mat-list-item>\n                            Vehicle Name: <mat-form-field [style.marginLeft]=\"'1em'\">\n                                <input style = \"width:20em\" matInput type=\"text\" formControlName=\"name\" required>\n                            </mat-form-field>\n                        </mat-list-item>\n                        <mat-list-item>\n                            Vehicle Range (Miles): <div [style.marginLeft]=\"'1em'\"><mat-slider min=0 max=300 thumbLabel formControlName=\"range\"></mat-slider> <div class=\"sliderLabelsContainer\" ><span class=\"sliderLabel\">0</span> <span class=\"sliderLabel\">300</span></div></div>\n                        </mat-list-item>\n                        <mat-list-item>\n                            Battery Capacity (kWh): <div [style.marginLeft]=\"'1em'\"><mat-slider min=0 max=200 thumbLabel formControlName=\"capacity\"></mat-slider> <div class=\"sliderLabelsContainer\" ><span class=\"sliderLabel\">0</span> <span class=\"sliderLabel\">200</span></div></div>\n                        </mat-list-item>\n                        <mat-list-item>\n                            Driving Efficiency (Miles / kWh): <div [style.marginLeft]=\"'1em'\"><mat-slider step=0.1 min=0 max=5.0 thumbLabel formControlName=\"efficiency\"></mat-slider> <div class=\"sliderLabelsContainer\" ><span class=\"sliderLabel\">0</span> <span class=\"sliderLabel\">5.0</span></div></div>\n                        </mat-list-item>\n                    </mat-list>\n                </mat-card>\n        </mat-card-content>\n\n        <mat-card-actions style=\"position: absolute; top: 70%; left: 45%\">\n            <button mat-button type=\"submit\" [disabled] = \"(!formCustom.valid && vehicleType=='Custom') || vehicleType==''\">Submit</button>\n        </mat-card-actions>\n    </form>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _vehicle_settings_vehicle_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vehicle-settings/vehicle-settings.component */
    "./src/app/vehicle-settings/vehicle-settings.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./status/status.component */
    "./src/app/status/status.component.ts");
    /* harmony import */


    var _previous_sessions_previous_sessions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./previous-sessions/previous-sessions.component */
    "./src/app/previous-sessions/previous-sessions.component.ts");
    /* harmony import */


    var _no_thanks_no_thanks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./no-thanks/no-thanks.component */
    "./src/app/no-thanks/no-thanks.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'main'
    }, {
      path: 'vehicleSettings',
      component: _vehicle_settings_vehicle_settings_component__WEBPACK_IMPORTED_MODULE_3__["VehicleSettingsComponent"]
    }, {
      path: 'main',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    }, {
      path: 'status',
      component: _status_status_component__WEBPACK_IMPORTED_MODULE_5__["StatusComponent"]
    }, {
      path: 'previousSessions',
      component: _previous_sessions_previous_sessions_component__WEBPACK_IMPORTED_MODULE_6__["PreviousSessionsComponent"]
    }, {
      path: 'noThanks',
      component: _no_thanks_no_thanks_component__WEBPACK_IMPORTED_MODULE_7__["NoThanksComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web.service */
    "./src/app/web.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(web) {
        _classCallCheck(this, AppComponent);

        this.web = web;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _web_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./web.service */
    "./src/app/web.service.ts");
    /* harmony import */


    var _vehicle_settings_vehicle_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./vehicle-settings/vehicle-settings.component */
    "./src/app/vehicle-settings/vehicle-settings.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _status_status_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./status/status.component */
    "./src/app/status/status.component.ts");
    /* harmony import */


    var _previous_sessions_previous_sessions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./previous-sessions/previous-sessions.component */
    "./src/app/previous-sessions/previous-sessions.component.ts");
    /* harmony import */


    var _no_thanks_no_thanks_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./no-thanks/no-thanks.component */
    "./src/app/no-thanks/no-thanks.component.ts"); //angular imports
    //angular material imports
    //custom file imports


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _vehicle_settings_vehicle_settings_component__WEBPACK_IMPORTED_MODULE_21__["VehicleSettingsComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_22__["MainComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_23__["StatusComponent"], _previous_sessions_previous_sessions_component__WEBPACK_IMPORTED_MODULE_24__["PreviousSessionsComponent"], _no_thanks_no_thanks_component__WEBPACK_IMPORTED_MODULE_25__["NoThanksComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]],
      providers: [_web_service__WEBPACK_IMPORTED_MODULE_20__["WebService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/main/main.component.css":
  /*!*****************************************!*\
    !*** ./src/app/main/main.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 10px;\r\n    border-radius: 5px;  \r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    -webkit-transition: .2s;\r\n    -webkit-transition: opacity .2s;\r\n    transition: opacity .2s;\r\n    margin-top: 1em;\r\n}\r\n  \r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%; \r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n}\r\n  \r\n.slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n}\r\n  \r\n.sliderLabelsContainer {\r\n    -webkit-margin-before:0;\r\n            margin-block-start:0; \r\n    -webkit-margin-after: 0; \r\n            margin-block-end: 0; \r\n    margin-top: -10px; \r\n    display: -webkit-box; \r\n    display: flex; \r\n    -webkit-box-pack: justify; \r\n            justify-content: space-between;\r\n}\r\n  \r\n.sliderLabel {\r\n    font-weight: lighter;\r\n    font-size: 13px;\r\n}\r\n  \r\n.pricing_det{\r\n    font-size: 11.5px;\r\n}\r\n  \r\n.pricing_det_flex{\r\n    font-size: 9.5px;\r\n}\r\n  \r\n.foot {\r\n    position: absolute;\r\n    left: 2%;\r\n    bottom: 15%;\r\n    font-size: smaller;\r\n    width: 93%;\r\n    -webkit-margin-after: 0;\r\n            margin-block-end: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLCtCQUF1QjtJQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsdUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuICBcclxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuICBcclxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZXJMYWJlbHNDb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjA7IFxyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDsgXHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNsaWRlckxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucHJpY2luZ19kZXR7XHJcbiAgICBmb250LXNpemU6IDExLjVweDtcclxufVxyXG4ucHJpY2luZ19kZXRfZmxleHtcclxuICAgIGZvbnQtc2l6ZTogOS41cHg7XHJcbn1cclxuXHJcbi5mb290IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgYm90dG9tOiAxNSU7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICB3aWR0aDogOTMlO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../web.service */
    "./src/app/web.service.ts");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(web) {
        _classCallCheck(this, MainComponent);

        this.web = web;
        this.depTimeSlider = 0;
        this.chargeSettings = {
          milesNeeded: 0,
          flexible: false,
          setDepartureTime: '',
          startTime: '',
          currentMiles: 0
        };
        this.CHARGING_PER_25_MILES_COST = 1;
        this.IMMEDIATE_OVERSTAY_PER_HOUR_COST = 5;
        this.FLEXIBLE_OVERSTAY_PER_HOUR_COST = 10;
        this.FLEXIBLE_CHARGING_PER_MIN_COST = 0.05;
        this.FLEXIBLE_PARKING_PER_MIN_COST = 0.03;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.web.hasVehicle();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.chargeSettings);
        }
      }, {
        key: "isSubmitValid",
        value: function isSubmitValid() {
          return this.chargeSettings.milesNeeded != 0 && (this.chargeSettings.flexible == false || this.depTimeSlider != 0);
        }
      }, {
        key: "getPrice",
        value: function getPrice() {
          return this.chargeSettings.flexible ? (this.CHARGING_PER_25_MILES_COST * (this.chargeSettings.milesNeeded / 25.0) + this.FLEXIBLE_PARKING_PER_MIN_COST * this.depTimeSlider).toFixed(2) : (this.CHARGING_PER_25_MILES_COST * (this.chargeSettings.milesNeeded / 25.0)).toFixed(2);
        }
      }, {
        key: "minToHours",
        value: function minToHours() {
          var minutes = this.depTimeSlider % 60;
          var hours = Math.floor(this.depTimeSlider / 60);
          var minuteWord = minutes == 1 ? "min" : "mins";
          var hourWord = hours == 1 ? "hr" : "hrs";
          return hours == 0 ? minutes + " " + minuteWord : hours + " " + hourWord + ", " + minutes + " " + minuteWord;
        }
      }, {
        key: "formatLabel",
        value: function formatLabel(value) {
          value = !value ? 0 : value;
          var hhPart = new Date().getHours();
          var mmPart = new Date().getMinutes() + value + Math.trunc(this.chargeSettings.milesNeeded / 100 * 35 / 6.6 * 60);

          while (mmPart >= 60) {
            mmPart -= 60;
            hhPart += 1;
          }

          hhPart %= 24;
          return (hhPart % 12 == 0 ? "12" : hhPart % 12) + ":" + (mmPart < 10 ? "0" + mmPart : mmPart) + " " + (hhPart > 12 ? "PM" : "AM");
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.css */
      "./src/app/main/main.component.css")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/no-thanks/no-thanks.component.css":
  /*!***************************************************!*\
    !*** ./src/app/no-thanks/no-thanks.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNoThanksNoThanksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 22%;\r\n    width: 200px;\r\n}\r\n\r\nmat-card {\r\n    text-align: center;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm8tdGhhbmtzL25vLXRoYW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbm8tdGhhbmtzL25vLXRoYW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiAyMiU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/no-thanks/no-thanks.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/no-thanks/no-thanks.component.ts ***!
    \**************************************************/

  /*! exports provided: NoThanksComponent */

  /***/
  function srcAppNoThanksNoThanksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoThanksComponent", function () {
      return NoThanksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NoThanksComponent =
    /*#__PURE__*/
    function () {
      function NoThanksComponent() {
        _classCallCheck(this, NoThanksComponent);
      }

      _createClass(NoThanksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NoThanksComponent;
    }();

    NoThanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-no-thanks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./no-thanks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/no-thanks/no-thanks.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./no-thanks.component.css */
      "./src/app/no-thanks/no-thanks.component.css")).default]
    })], NoThanksComponent);
    /***/
  },

  /***/
  "./src/app/previous-sessions/previous-sessions.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/previous-sessions/previous-sessions.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreviousSessionsPreviousSessionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpb3VzLXNlc3Npb25zL3ByZXZpb3VzLXNlc3Npb25zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/previous-sessions/previous-sessions.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/previous-sessions/previous-sessions.component.ts ***!
    \******************************************************************/

  /*! exports provided: PreviousSessionsComponent */

  /***/
  function srcAppPreviousSessionsPreviousSessionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviousSessionsComponent", function () {
      return PreviousSessionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PreviousSessionsComponent =
    /*#__PURE__*/
    function () {
      function PreviousSessionsComponent() {
        _classCallCheck(this, PreviousSessionsComponent);
      }

      _createClass(PreviousSessionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreviousSessionsComponent;
    }();

    PreviousSessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-previous-sessions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./previous-sessions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/previous-sessions/previous-sessions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./previous-sessions.component.css */
      "./src/app/previous-sessions/previous-sessions.component.css")).default]
    })], PreviousSessionsComponent);
    /***/
  },

  /***/
  "./src/app/status/status.component.css":
  /*!*********************************************!*\
    !*** ./src/app/status/status.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStatusStatusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card-content {\r\n    text-align: center;\r\n}\r\np {\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/status/status.component.ts":
  /*!********************************************!*\
    !*** ./src/app/status/status.component.ts ***!
    \********************************************/

  /*! exports provided: StatusComponent */

  /***/
  function srcAppStatusStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusComponent", function () {
      return StatusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StatusComponent =
    /*#__PURE__*/
    function () {
      function StatusComponent() {
        _classCallCheck(this, StatusComponent);
      }

      _createClass(StatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatusComponent;
    }();

    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-status',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./status.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/status/status.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./status.component.css */
      "./src/app/status/status.component.css")).default]
    })], StatusComponent);
    /***/
  },

  /***/
  "./src/app/vehicle-settings/vehicle-settings.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/vehicle-settings/vehicle-settings.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVehicleSettingsVehicleSettingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sliderLabelsContainer {\r\n    -webkit-margin-before:0;\r\n            margin-block-start:0; \r\n    -webkit-margin-after: 0; \r\n            margin-block-end: 0; \r\n    margin-top: -10px; \r\n    display: -webkit-box; \r\n    display: flex; \r\n    -webkit-box-pack: justify; \r\n            justify-content: space-between;\r\n}\r\n\r\n.sliderLabel {\r\n    font-weight: lighter;\r\n    font-size: 13px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS1zZXR0aW5ncy92ZWhpY2xlLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLHVCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtc2V0dGluZ3MvdmVoaWNsZS1zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlckxhYmVsc0NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MDsgXHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwOyBcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4OyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2xpZGVyTGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vehicle-settings/vehicle-settings.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/vehicle-settings/vehicle-settings.component.ts ***!
    \****************************************************************/

  /*! exports provided: VehicleSettingsComponent */

  /***/
  function srcAppVehicleSettingsVehicleSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleSettingsComponent", function () {
      return VehicleSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../web.service */
    "./src/app/web.service.ts");

    var VehicleSettingsComponent =
    /*#__PURE__*/
    function () {
      function VehicleSettingsComponent(fb, web) {
        _classCallCheck(this, VehicleSettingsComponent);

        this.fb = fb;
        this.web = web;
        this.vehicleType = "";
        this.presetCarOptions = [{
          name: "Toyota Camry",
          range: 200,
          capacity: 50,
          efficiency: 4.0
        }, {
          name: "Honda Odyssey",
          range: 350,
          capacity: 70,
          efficiency: 3.0
        }, {
          name: "Tesla Model 3",
          range: 400,
          capacity: 120,
          efficiency: 6.0
        }];
        this.formCustom = fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          range: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, notZero()]],
          capacity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, notZero()]],
          efficiency: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, notZero()]]
        });
      }

      _createClass(VehicleSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          if (this.vehicleType == 'Custom') this.web.setVehicle(this.formCustom.value);else this.web.setVehicle(this.presetCarOptions.find(function (val) {
            return val.name == _this.vehicleType;
          }));
        }
      }]);

      return VehicleSettingsComponent;
    }();

    VehicleSettingsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _web_service__WEBPACK_IMPORTED_MODULE_3__["WebService"]
      }];
    };

    VehicleSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vehicle-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vehicle-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-settings/vehicle-settings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vehicle-settings.component.css */
      "./src/app/vehicle-settings/vehicle-settings.component.css")).default]
    })], VehicleSettingsComponent);

    function notZero() {
      return function (control) {
        return control.value != 0 ? null : {
          invalidField: "Value must be non-zero"
        };
      };
    }
    /***/

  },

  /***/
  "./src/app/web.service.ts":
  /*!********************************!*\
    !*** ./src/app/web.service.ts ***!
    \********************************/

  /*! exports provided: WebService */

  /***/
  function srcAppWebServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebService", function () {
      return WebService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var WebService =
    /*#__PURE__*/
    function () {
      function WebService(http, router) {
        _classCallCheck(this, WebService);

        this.http = http;
        this.router = router;
        this.baseUrl = "api";
      }

      _createClass(WebService, [{
        key: "hasVehicle",
        value: function hasVehicle() {
          var _this2 = this;

          this.http.get("".concat(this.baseUrl, "/hasVehicle")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(function (response) {
            if (response) {
              //user has vehicle settings
              _this2.router.navigate(['/main']);
            } else {
              _this2.router.navigate(['/vehicleSettings']);
            }
          });
        }
      }, {
        key: "setVehicle",
        value: function setVehicle(vehicle) {
          var _this3 = this;

          this.http.post("".concat(this.baseUrl, "/setVehicle"), vehicle, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).subscribe(function (resp) {
            _this3.router.navigate(['/main']);
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log(error.message);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('A data error has occured');
        }
      }]);

      return WebService;
    }();

    WebService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    WebService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WebService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\respe\OneDrive\Desktop\slrpEV-proto\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map