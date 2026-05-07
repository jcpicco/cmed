function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 22,
      vars: 0,
      consts: [[1, "home-container"], [1, "navbar"], [1, "hero"], [1, "hero-content"], [1, "action-buttons"], ["routerLink", "/patients", 1, "btn", "btn-primary"], [1, "features"], ["routerLink", "/documentation", 1, "feature-card", 2, "cursor", "pointer"], [1, "feature-icon"], [1, "footer"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MedCenter Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sistema Profesional de Gesti\xF3n M\xE9dica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Gestionar Pacientes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\uD83D\uDCC4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Documentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mant\xE9n documentaci\xF3n m\xE9dica completa y organizada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "footer", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA9 2026 MedCenter Manager - Sistema Profesional de Gesti\xF3n M\xE9dica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".home-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #333;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  padding: 20px 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #667eea;\n  font-size: 28px;\n}\n\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n  color: #999;\n  font-size: 12px;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.3s;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #667eea;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 5px;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n.hero[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 60px 20px;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin: 0 0 20px 0;\n  font-weight: 700;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 0 40px 0;\n  opacity: 0.9;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 20px 60px;\n  border: none;\n  border-radius: 50px;\n  font-size: 20px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n}\n\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #667eea;\n  transform: translateY(-3px);\n}\n\n.features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n  padding: 80px 40px;\n  background: white;\n}\n\n.features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  border-radius: 10px;\n  background: #f9f9f9;\n  transition: all 0.3s;\n}\n\n.features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n\n.features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n\n.features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 20px;\n  margin: 0 0 15px 0;\n}\n\n.features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n  color: white;\n  text-align: center;\n  padding: 20px;\n  font-size: 14px;\n}\n\n\n\n\n\nbody.dark-mode[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%] {\n  background: var(--color-bg-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background: var(--color-bg-secondary);\n  box-shadow: var(--shadow-sm);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, body.dark-mode   [_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  border-bottom-color: var(--color-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  border-color: var(--color-border);\n  color: var(--color-text-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover, body.dark-mode   [_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-tertiary);\n  color: var(--color-text-primary);\n  border-color: var(--color-border);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .features[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .features[_ngcontent-%COMP%] {\n  background: var(--color-bg-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: var(--color-bg-secondary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover, body.dark-mode   [_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-tertiary);\n  box-shadow: var(--shadow-md);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .features[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n}\n\nbody.dark-mode[_nghost-%COMP%]   .footer[_ngcontent-%COMP%], body.dark-mode   [_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-secondary);\n  color: var(--color-text-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEp1YW5tYVxcRG9jdW1lbnRzXFxnaXRcXG1lZGNlbnRlci1tYW5hZ2VyXFx3ZWIvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkRBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQ0NGOztBREVJO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQU47O0FER0k7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRE47O0FES0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQ0hKOztBREtJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0hOOztBREtNO0VBQ0UsY0FBQTtBQ0hSOztBRE1NO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNKUjs7QURTRTtFQTVDRjtJQTZDSSxzQkFBQTtJQUNBLFNBQUE7RUNORjtFRFFFO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VDTko7QUFDRjs7QURVQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURTRTtFQUNFLFlBQUE7QUNQSjs7QURTSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUE47O0FEVUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUk47O0FEV0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1ROOztBRFdNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNUUjs7QURXUTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ1RWOztBRFdVO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQ1RaOztBRGFRO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNYVjs7QURhVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDWFo7O0FEbUJBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNoQkY7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDaEJKOztBRGtCSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtBQ2hCTjs7QURtQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNqQk47O0FEb0JJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2xCTjs7QURxQkk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ25CTjs7QUR5QkE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDdEJGOztBRHlCQSx3QkFBQTs7QUFDQSx3QkFBQTs7QUFFRTtFQUNFLG1DQUFBO0FDdkJKOztBRDBCRTtFQUNFLHFDQUFBO0VBQ0EsNEJBQUE7QUN4Qko7O0FEMEJJO0VBQ0UsMkJBQUE7QUN4Qk47O0FEMkJJO0VBQ0Usa0NBQUE7QUN6Qk47O0FENEJJO0VBQ0UsZ0NBQUE7QUMxQk47O0FENEJNO0VBQ0UsMkJBQUE7QUMxQlI7O0FENkJNO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQzNCUjs7QURnQ0U7RUFDRSxnQ0FBQTtBQzlCSjs7QURpQ007RUFDRSxzQ0FBQTtFQUNBLHlCQUFBO0FDL0JSOztBRGtDTTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUNoQ1I7O0FEa0NRO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDaENWOztBRHNDRTtFQUNFLG1DQUFBO0FDcENKOztBRHNDSTtFQUNFLHFDQUFBO0FDcENOOztBRHNDTTtFQUNFLG9DQUFBO0VBQ0EsNEJBQUE7QUNwQ1I7O0FEdUNNO0VBQ0UsMkJBQUE7QUNyQ1I7O0FEd0NNO0VBQ0UsZ0NBQUE7QUN0Q1I7O0FEeUNNO0VBQ0Usa0NBQUE7QUN2Q1I7O0FENENFO0VBQ0UsMkNBQUE7RUFDQSxrQ0FBQTtBQzFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDVweCAwIDAgMDtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXYtbGlua3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMzBweDtcclxuXHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2N2VlYTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcblxyXG4gICAgLm5hdi1saW5rcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZXJvIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG5cclxuICAuaGVyby1jb250ZW50IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIG1hcmdpbjogMCAwIDQwcHggMDtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMjBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4gICAgICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogIzY2N2VlYTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmVhdHVyZXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgLmZlYXR1cmUtY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmZlYXR1cmUtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vKiBEYXJrIE1vZGUgT3ZlcnJpZGVzICovXHJcbi8qIERhcmsgTW9kZSBPdmVycmlkZXMgKi9cclxuOmhvc3QtY29udGV4dChib2R5LmRhcmstbW9kZSkge1xyXG4gIC5ob21lLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XHJcblxyXG4gICAgLmxvZ28gaDEge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28gcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rcyAubmF2LWxpbmsge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlcm8gLmhlcm8tY29udGVudCB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuXHJcbiAgICAuYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XHJcbiAgICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXRlcnRpYXJ5KTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXByaW1hcnkpO1xyXG5cclxuICAgIC5mZWF0dXJlLWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctdGVydGlhcnkpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mZWF0dXJlLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gIH1cclxufSIsIi5ob21lLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBjb2xvcjogIzMzMztcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5uYXZiYXIgLmxvZ28gaDEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNjY3ZWVhO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4ubmF2YmFyIC5sb2dvIHAge1xuICBtYXJnaW46IDVweCAwIDAgMDtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5uYXZiYXIgLm5hdi1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbn1cbi5uYXZiYXIgLm5hdi1saW5rcyAubmF2LWxpbmsge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xufVxuLm5hdmJhciAubmF2LWxpbmtzIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjNjY3ZWVhO1xufVxuLm5hdmJhciAubmF2LWxpbmtzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzY2N2VlYTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NjdlZWE7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgLm5hdmJhciAubmF2LWxpbmtzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4uaGVybyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMjBweDtcbn1cbi5oZXJvIC5oZXJvLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVybyAuaGVyby1jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uaGVybyAuaGVyby1jb250ZW50IHAge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMCAwIDQwcHggMDtcbiAgb3BhY2l0eTogMC45O1xufVxuLmhlcm8gLmhlcm8tY29udGVudCAuYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaGVybyAuaGVyby1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgcGFkZGluZzogMjBweCA2MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5oZXJvIC5oZXJvLWNvbnRlbnQgLmFjdGlvbi1idXR0b25zIC5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM2NjdlZWE7XG59XG4uaGVybyAuaGVyby1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uaGVybyAuaGVyby1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYnRuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5oZXJvIC5oZXJvLWNvbnRlbnQgLmFjdGlvbi1idXR0b25zIC5idG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzY2N2VlYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xufVxuXG4uZmVhdHVyZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nOiA4MHB4IDQwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmZlYXR1cmVzIC5mZWF0dXJlLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmZlYXR1cmVzIC5mZWF0dXJlLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5mZWF0dXJlcyAuZmVhdHVyZS1jYXJkIC5mZWF0dXJlLWljb24ge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZmVhdHVyZXMgLmZlYXR1cmUtY2FyZCBoMyB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbn1cbi5mZWF0dXJlcyAuZmVhdHVyZS1jYXJkIHAge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW46IDA7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIERhcmsgTW9kZSBPdmVycmlkZXMgKi9cbi8qIERhcmsgTW9kZSBPdmVycmlkZXMgKi9cbjpob3N0LWNvbnRleHQoYm9keS5kYXJrLW1vZGUpIC5ob21lLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXByaW1hcnkpO1xufVxuOmhvc3QtY29udGV4dChib2R5LmRhcmstbW9kZSkgLm5hdmJhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAubmF2YmFyIC5sb2dvIGgxIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QtY29udGV4dChib2R5LmRhcmstbW9kZSkgLm5hdmJhciAubG9nbyBwIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cbjpob3N0LWNvbnRleHQoYm9keS5kYXJrLW1vZGUpIC5uYXZiYXIgLm5hdi1saW5rcyAubmF2LWxpbmsge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbn1cbjpob3N0LWNvbnRleHQoYm9keS5kYXJrLW1vZGUpIC5uYXZiYXIgLm5hdi1saW5rcyAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAubmF2YmFyIC5uYXYtbGlua3MgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAuaGVybyAuaGVyby1jb250ZW50IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAuaGVybyAuaGVyby1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAuaGVybyAuaGVyby1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYnRuLmJ0bi1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xufVxuOmhvc3QtY29udGV4dChib2R5LmRhcmstbW9kZSkgLmhlcm8gLmhlcm8tY29udGVudCAuYWN0aW9uLWJ1dHRvbnMgLmJ0bi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuOmhvc3QtY29udGV4dChib2R5LmRhcmstbW9kZSkgLmZlYXR1cmVzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAuZmVhdHVyZXMgLmZlYXR1cmUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAuZmVhdHVyZXMgLmZlYXR1cmUtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXRlcnRpYXJ5KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbn1cbjpob3N0LWNvbnRleHQoYm9keS5kYXJrLW1vZGUpIC5mZWF0dXJlcyAuZmVhdHVyZS1jYXJkIC5mZWF0dXJlLWljb24ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAuZmVhdHVyZXMgLmZlYXR1cmUtY2FyZCBoMyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xufVxuOmhvc3QtY29udGV4dChib2R5LmRhcmstbW9kZSkgLmZlYXR1cmVzIC5mZWF0dXJlLWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG46aG9zdC1jb250ZXh0KGJvZHkuZGFyay1tb2RlKSAuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _share_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../share/share.module */
    "./src/app/share/share.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.routes */
    "./src/app/home/home.routes.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_share_share_module__WEBPACK_IMPORTED_MODULE_1__["ShareModule"], _home_routes__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_1__["ShareModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_1__["ShareModule"], _home_routes__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.routes.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.routes.ts ***!
    \*************************************/

  /*! exports provided: RoutingModule */

  /***/
  function srcAppHomeHomeRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
      return RoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }];

    var RoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
    /***/

  },

  /***/
  "./src/app/share/share.module.ts":
  /*!***************************************!*\
    !*** ./src/app/share/share.module.ts ***!
    \***************************************/

  /*! exports provided: ShareModule */

  /***/
  function srcAppShareShareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareModule", function () {
      return ShareModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/core.module */
    "./src/app/core/core.module.ts");

    var ShareModule = function ShareModule() {
      _classCallCheck(this, ShareModule);
    };

    ShareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ShareModule
    });
    ShareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ShareModule_Factory(t) {
        return new (t || ShareModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShareModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map