function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      pathMatch: 'full',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~home-home-module~patients-patients-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'patients',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | patients-patients-module */
        [__webpack_require__.e("default~home-home-module~patients-patients-module"), __webpack_require__.e("patients-patients-module")]).then(__webpack_require__.bind(null,
        /*! ./patients/patients.module */
        "./src/app/patients/patients.module.ts")).then(function (m) {
          return m.PatientsModule;
        });
      }
    }, {
      path: 'documentation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | documentation-documentation-module */
        "documentation-documentation-module").then(__webpack_require__.bind(null,
        /*! ./documentation/documentation.module */
        "./src/app/documentation/documentation.module.ts")).then(function (m) {
          return m.DocumentationModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.isDarkMode = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Check localStorage
          var storedTheme = localStorage.getItem('theme');

          if (storedTheme === 'dark') {
            this.isDarkMode = true;
          } else if (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Respect system preference if not set
            this.isDarkMode = true;
          }

          this.updateBodyClass();
        }
      }, {
        key: "toggleDarkMode",
        value: function toggleDarkMode() {
          this.isDarkMode = !this.isDarkMode;
          localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
          this.updateBodyClass();
        }
      }, {
        key: "updateBodyClass",
        value: function updateBodyClass() {
          if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
          } else {
            document.body.classList.remove('dark-mode');
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 2,
      consts: [[1, "theme-toggle-btn", 3, "title", "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener() {
            return ctx.toggleDarkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isDarkMode ? "\u2600\uFE0F" : "\uD83C\uDF19", "\n");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".theme-toggle-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  line-height: 1;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: var(--color-bg-primary);\n  border: 1px solid var(--color-border);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  color: var(--color-text-primary);\n  font-size: 24px;\n  cursor: pointer;\n  z-index: 1100;\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  padding: 0;\n}\n.theme-toggle-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(15deg);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);\n}\n.theme-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxKdWFubWFcXERvY3VtZW50c1xcZ2l0XFxjbWVkXFxjbWVkLXdlYi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDREQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQ0k7RUFDSSxtQ0FBQTtFQUNBLHlDQUFBO0FDQ1I7QURFSTtFQUNJLHNCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWUtdG9nZ2xlLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDExMDA7XHJcbiAgICAvKiBBYm92ZSBtb2RhbHMgaWYgcG9zc2libGUsIG9yIGp1c3QgaGlnaCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgxNWRlZyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB9XHJcbn0iLCIudGhlbWUtdG9nZ2xlLWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMTAwO1xuICAvKiBBYm92ZSBtb2RhbHMgaWYgcG9zc2libGUsIG9yIGp1c3QgaGlnaCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBwYWRkaW5nOiAwO1xufVxuLnRoZW1lLXRvZ2dsZS1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDE1ZGVnKTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4udGhlbWUtdG9nZ2xlLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DashboardComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u23F3 Conectando al backend... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r360.error, " ");
      }
    }

    function DashboardComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2705 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Backend conectado exitosamente!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r361.patients.length, " pacientes encontrados en la base de datos");
      }
    }

    function DashboardComponent_section_46_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DNI:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var patient_r365 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", patient_r365.firstName, " ", patient_r365.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r365.dni, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r365.email, "");
      }
    }

    function DashboardComponent_section_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pacientes Registrados");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_section_46_div_4_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r362.patients);
      }
    }

    function DashboardComponent_section_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xBFC\xF3mo Iniciar el Backend?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Abre otra terminal y ejecuta:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " cd ~/Documents/git/cmed-app/app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ./gradlew bootRun ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "El backend estar\xE1 disponible en: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "http://localhost:8080");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(patientService) {
        _classCallCheck(this, DashboardComponent);

        this.patientService = patientService;
        this.patients = [];
        this.loading = false;
        this.error = null;
        this.backendConnected = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkBackendConnection();
        }
      }, {
        key: "checkBackendConnection",
        value: function checkBackendConnection() {
          var _this = this;

          this.loading = true;
          console.log('🔍 Intentando conectar al backend...');
          this.patientService.getAllPatients().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            _this.patients = data;
            _this.backendConnected = true;
            _this.loading = false;
            console.log('✅ Backend conectado. Pacientes:', data);
          }, function (error) {
            _this.backendConnected = false;
            _this.loading = false;
            console.error('❌ Error conectando al backend:', error); // Mensajes de error más específicos

            if (error.status === 0) {
              _this.error = '❌ No se puede conectar al backend. Por favor verifica que:\n\n' + '1. Docker esté corriendo: docker ps\n' + '2. El contenedor cmed-api esté activo\n' + '3. El puerto 8080 esté expuesto\n\n' + 'O ejecuta: docker-compose up en la carpeta cmed-app';
            } else if (error.status === 403 || error.status === 401) {
              _this.error = "\u274C Error de autenticaci\xF3n (".concat(error.status, ")");
            } else if (error.status >= 500) {
              _this.error = "\u274C Error del servidor (".concat(error.status, "): ").concat(error.message);
            } else {
              _this.error = "\u274C Error: ".concat(error.message || 'Desconocido');
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 68,
      vars: 5,
      consts: [[1, "container"], [1, "header"], [1, "subtitle"], [1, "status-section"], ["class", "loading", 4, "ngIf"], ["class", "error-box", 4, "ngIf"], ["class", "success-box", 4, "ngIf"], [1, "services-section"], [1, "services-grid"], [1, "service-card"], ["class", "patients-section", 4, "ngIf"], ["class", "instructions-section", 4, "ngIf"], [1, "docs-section"], ["href", "../../START_HERE.md", "target", "_blank"], ["href", "../../QUICK_START.md", "target", "_blank"], ["href", "../../SERVICIOS_README.md", "target", "_blank"], ["href", "../../FAQ_SERVICIOS.md", "target", "_blank"], [1, "loading"], [1, "error-box"], [1, "success-box"], [1, "patients-section"], [1, "patient-list"], ["class", "patient-card", 4, "ngFor", "ngForOf"], [1, "patient-card"], [1, "instructions-section"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83C\uDFE5 Sistema de Gesti\xF3n M\xE9dica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Conectado a cmed-app Backend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estado del Sistema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_div_9_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_div_11_Template, 6, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Servicios Disponibles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uD83D\uDC65 Pacientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "7 m\xE9todos CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\uD83D\uDCCB Registros M\xE9dicos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "5 m\xE9todos CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\uD83E\uDE7A Diagn\xF3sticos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5 m\xE9todos CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\uD83D\uDCDD Notas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "5 m\xE9todos CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\uD83D\uDCC2 Registros Previos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "5 m\xE9todos CRUD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\uD83D\uDCC1 Archivos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2 m\xE9todos (upload/delete)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DashboardComponent_section_46_Template, 5, 1, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_section_47_Template, 13, 0, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\uD83D\uDCDA Documentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "START_HERE.md");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " - Comienza aqu\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "QUICK_START.md");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " - Inicio r\xE1pido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "SERVICIOS_README.md");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " - Gu\xEDa de servicios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "FAQ_SERVICIOS.md");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " - Preguntas frecuentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backendConnected && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backendConnected && ctx.patients.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.backendConnected);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0 auto;\n  max-width: 1200px;\n  min-height: 100vh;\n  padding: 20px;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 40px;\n  padding: 30px 0;\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  margin: 0;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin-top: 10px;\n  opacity: 0.9;\n}\n\nsection[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 30px;\n}\n\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #667eea;\n  color: #667eea;\n  margin-top: 0;\n  padding-bottom: 10px;\n}\n\n.loading[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: bold;\n  padding: 20px;\n  text-align: center;\n}\n\n.error-box[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 5px;\n  color: #721c24;\n  margin: 15px 0;\n  padding: 15px;\n}\n\n.success-box[_ngcontent-%COMP%] {\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 5px;\n  color: #155724;\n  margin: 15px 0;\n  padding: 15px;\n}\n\n.success-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n}\n\n.success-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n}\n\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  margin-top: 20px;\n}\n\n.service-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 8px;\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);\n  color: white;\n  padding: 20px;\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\n.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  margin: 0 0 10px;\n}\n\n.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n}\n\n.patient-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  margin-top: 20px;\n}\n\n.patient-card[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border: 2px solid #667eea;\n  border-radius: 8px;\n  padding: 15px;\n  transition: all 0.3s ease;\n}\n\n.patient-card[_ngcontent-%COMP%]:hover {\n  border-color: #764ba2;\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);\n}\n\n.patient-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #667eea;\n  margin: 0 0 10px;\n}\n\n.patient-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333;\n  margin: 5px 0;\n}\n\n.instructions-section[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  border-left: 5px solid #ffc107;\n}\n\n.instructions-section[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #333;\n  border-radius: 5px;\n  color: #0f0;\n  display: block;\n  font-family: \"Courier New\", monospace;\n  margin: 15px 0;\n  overflow-x: auto;\n  padding: 15px;\n}\n\n.docs-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.docs-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.docs-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.docs-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n\n  section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .patient-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcSnVhbm1hXFxEb2N1bWVudHNcXGdpdFxcY21lZFxcY21lZC13ZWIvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkRBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RGOztBREdFO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDREo7O0FES0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDRkY7O0FESUU7RUFDRSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7QUNISjs7QURPQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMkRBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDSkY7O0FETUU7RUFDRSwyQkFBQTtBQ0pKOztBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFFFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7QUNOSjs7QURVQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDUEY7O0FEU0U7RUFDRSxxQkFBQTtFQUNBLCtDQUFBO0FDUEo7O0FEVUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDVEo7O0FEYUE7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0FDVkY7O0FEWUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNWSjs7QURlRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ1pKOztBRGNJO0VBQ0UsY0FBQTtBQ1pOOztBRGNNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNaUjs7QURjUTtFQUNFLDBCQUFBO0FDWlY7O0FEbUJBO0VBQ0U7SUFDRSxhQUFBO0VDaEJGOztFRG1CQTtJQUNFLGdCQUFBO0VDaEJGOztFRG1CQTtJQUNFLGFBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsMEJBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsMEJBQUE7RUNoQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICBoMiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzY2N2VlYTtcclxuICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIGNvbG9yOiAjNjY3ZWVhO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3ItYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogIzE1NTcyNDtcclxuICBtYXJnaW46IDE1cHggMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc2VydmljZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxufVxyXG5cclxuLnBhdGllbnQtbGlzdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wYXRpZW50LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzY2N2VlYTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzc2NGJhMjtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmYzY2Q7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZjMTA3O1xyXG5cclxuICBjb2RlIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogIzBmMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5kb2NzLXNlY3Rpb24ge1xyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VydmljZXMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5wYXRpZW50LWxpc3Qge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZzogMzBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmhlYWRlciAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuc2VjdGlvbiBoMiB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNjY3ZWVhO1xuICBjb2xvcjogIzY2N2VlYTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5sb2FkaW5nIHtcbiAgY29sb3I6ICM2NjdlZWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci1ib3gge1xuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnN1Y2Nlc3MtYm94IHtcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzE1NTcyNDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc3VjY2Vzcy1ib3ggc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbi5zdWNjZXNzLWJveCBwIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbn1cblxuLnNlcnZpY2VzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VydmljZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uc2VydmljZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuLnNlcnZpY2UtY2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG4uc2VydmljZS1jYXJkIHAge1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnBhdGllbnQtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGF0aWVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2N2VlYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnBhdGllbnQtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzc2NGJhMjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMik7XG59XG4ucGF0aWVudC1jYXJkIGg0IHtcbiAgY29sb3I6ICM2NjdlZWE7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG4ucGF0aWVudC1jYXJkIHAge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmluc3RydWN0aW9ucy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjNjZDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZjMTA3O1xufVxuLmluc3RydWN0aW9ucy1zZWN0aW9uIGNvZGUge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjMGYwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBtYXJnaW46IDE1cHggMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmRvY3Mtc2VjdGlvbiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uZG9jcy1zZWN0aW9uIHVsIGxpIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZG9jcy1zZWN0aW9uIHVsIGxpIGEge1xuICBjb2xvcjogIzY2N2VlYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5kb2NzLXNlY3Rpb24gdWwgbGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLnNlcnZpY2VzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnBhdGllbnQtbGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/patient.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/patient.service.ts ***!
    \*********************************************/

  /*! exports provided: PatientService */

  /***/
  function srcAppServicesPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientService", function () {
      return PatientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PatientService =
    /*#__PURE__*/
    function () {
      function PatientService(http) {
        _classCallCheck(this, PatientService);

        this.http = http;
        this.apiUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/patients");
      }
      /**
       * Obtener todos los pacientes
       */


      _createClass(PatientService, [{
        key: "getAllPatients",
        value: function getAllPatients() {
          return this.http.get(this.apiUrl);
        }
        /**
         * Obtener un paciente por ID
         */

      }, {
        key: "getPatientById",
        value: function getPatientById(patientId) {
          return this.http.get("".concat(this.apiUrl, "/").concat(patientId));
        }
        /**
         * Crear un nuevo paciente
         */

      }, {
        key: "createPatient",
        value: function createPatient(patient) {
          return this.http.post(this.apiUrl, patient);
        }
        /**
         * Actualizar un paciente
         */

      }, {
        key: "updatePatient",
        value: function updatePatient(patientId, patient) {
          return this.http.patch("".concat(this.apiUrl, "/").concat(patientId), patient);
        }
        /**
         * Eliminar un paciente
         */

      }, {
        key: "deletePatient",
        value: function deletePatient(patientId) {
          return this.http["delete"]("".concat(this.apiUrl, "/").concat(patientId));
        }
        /**
         * Obtener todos los registros médicos de un paciente
         */

      }, {
        key: "getMedicalRecordsByPatientId",
        value: function getMedicalRecordsByPatientId(patientId) {
          return this.http.get("".concat(this.apiUrl, "/").concat(patientId, "/medicalRecords"));
        }
        /**
         * Obtener todos los registros previos de un paciente
         */

      }, {
        key: "getPreviousRecordsByPatientId",
        value: function getPreviousRecordsByPatientId(patientId) {
          return this.http.get("".concat(this.apiUrl, "/").concat(patientId, "/previousRecords"));
        }
      }]);

      return PatientService;
    }();

    PatientService.ɵfac = function PatientService_Factory(t) {
      return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PatientService,
      factory: PatientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: "http://localhost:8080/api"
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\Juanma\Documents\git\cmed\cmed-web\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map