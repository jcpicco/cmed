function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documentation-documentation-module"], {
  /***/
  "./src/app/documentation/documentation-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/documentation/documentation-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DocumentationRoutingModule */

  /***/
  function srcAppDocumentationDocumentationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationRoutingModule", function () {
      return DocumentationRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./documentation.component */
    "./src/app/documentation/documentation.component.ts");

    var routes = [{
      path: '',
      component: _documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationComponent"]
    }];

    var DocumentationRoutingModule = function DocumentationRoutingModule() {
      _classCallCheck(this, DocumentationRoutingModule);
    };

    DocumentationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DocumentationRoutingModule
    });
    DocumentationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DocumentationRoutingModule_Factory(t) {
        return new (t || DocumentationRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocumentationRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/documentation/documentation.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/documentation/documentation.component.ts ***!
    \**********************************************************/

  /*! exports provided: DocumentationComponent */

  /***/
  function srcAppDocumentationDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
      return DocumentationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DocumentationComponent =
    /*#__PURE__*/
    function () {
      function DocumentationComponent() {
        _classCallCheck(this, DocumentationComponent);
      }

      _createClass(DocumentationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DocumentationComponent;
    }();

    DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) {
      return new (t || DocumentationComponent)();
    };

    DocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentationComponent,
      selectors: [["app-documentation"]],
      decls: 913,
      vars: 0,
      consts: [[1, "documentation-container"], [1, "doc-header"], [1, "header-content"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "doc-content"], [1, "doc-section", "intro"], [1, "version-badge"], [1, "doc-section"], [1, "section-header"], [1, "icon"], [1, "section-body"], [1, "feature-grid"], [1, "feature-item"], [1, "badge", "badge-success"], [1, "badge", "badge-warning", 2, "font-size", "0.6em"], [1, "note"], [1, "badge", "badge-primary"], [1, "tabs-info"], [1, "tab-card"], [1, "card-list"], [1, "info-card"], [1, "required"], [1, "optional"], [1, "workflow"], [1, "step"], [1, "badge"], [1, "use-cases"], [1, "case"], [1, "doc-section", "highlight"], [1, "badge", "badge-warning", 2, "font-size", "0.6em", "vertical-align", "middle"], [1, "intro-highlight"], [1, "comparison-table"], [1, "feature-list"], [1, "feature"], [1, "steps-list"], [1, "modal-types"], [1, "modal-type"], [1, "modal-flow"], [1, "highlight"], [1, "file-types"], [1, "type"], [1, "action-buttons-doc", 2, "display", "flex", "gap", "10px", "margin-top", "15px"], [1, "btn", "btn-primary", 2, "pointer-events", "none"], [1, "btn", "btn-secondary", 2, "pointer-events", "none"], [2, "margin-top", "10px"], ["href", "http://localhost:8080/swagger-ui/index.html", "target", "_blank"], ["href", "http://localhost:8080/v3/api-docs", "target", "_blank"], [1, "badge", "badge-success", 2, "font-size", "0.6em", "vertical-align", "middle"], [2, "margin-top", "2rem"], [1, "tips"], [1, "tip"], [1, "doc-footer"]],
      template: function DocumentationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDCDA Documentaci\xF3n del Sistema MedCenter Manager-WEB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gu\xEDa completa para el uso del Gestor de Pacientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u2190 Volver al Inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Introducci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " El Gestor de Pacientes MedCenter Manager es una herramienta integral dise\xF1ada para simplificar la administraci\xF3n de historiales m\xE9dicos. Permite gestionar pacientes, registrar historias cl\xEDnicas completas, almacenar antecedentes, gestionar notas y adjuntar documentaci\xF3n digital de forma segura y eficiente. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Versi\xF3n 1.3.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " - Actualizado el 23/04/2026 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\uD83D\uDC65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gesti\xF3n de Pacientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u2728 Crear Paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Utiliza el bot\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "+ Nuevo Paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " para registrar una nueva ficha. Es obligatorio ingresar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nombre y apellido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DNI (3-20 caracteres) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "NEW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Email (Opcional) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NEW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tel\xE9fono (3-20 caracteres) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "NEW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Fecha de nacimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\uD83D\uDD0D B\xFAsqueda Inteligente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "La barra de b\xFAsqueda en tiempo real permite encontrar pacientes instant\xE1neamente por:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Apellido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "DNI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Correo electr\xF3nico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Los resultados se filtran autom\xE1ticamente mientras escribes y ahora ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "ignoran acentos y may\xFAsculas/min\xFAsculas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\uD83C\uDF19 Modo Oscuro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Nuevo bot\xF3n de alternancia en la esquina superior derecha para cambiar entre tema claro y oscuro.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Ideal para reducir la fatiga visual en entornos con poca luz.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\uD83D\uDD04 Ordenamiento Din\xE1mico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Haz click en cualquier cabecera de columna para ordenar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Nombre, Apellido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Email, DNI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Fecha de nacimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Fecha de creaci\xF3n (con hora)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "El primer click ordena descendente \u2193, el segundo ascendente \u2191");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\uD83D\uDCC4 Paginaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "La lista muestra ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "10 pacientes por p\xE1gina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " con controles de navegaci\xF3n:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u2190 Anterior / Siguiente \u2192");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Indicador \"P\xE1gina X de Y\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Botones deshabilitados en l\xEDmites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\uD83C\uDD95 Apertura de Fichas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "NEW v1.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Los pacientes cuentan con un bot\xF3n en su listado para ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "abrir la ficha en una pesta\xF1a nueva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " (en segundo plano), permitiendo revisar historial sin perder la navegaci\xF3n de la lista.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u270F\uFE0F Edici\xF3n de Datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Accede al perfil del paciente y selecciona ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " para actualizar su informaci\xF3n de contacto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Nota:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " El DNI no puede modificarse una vez creado el paciente. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\uD83D\uDCC5 Formato de Fechas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Las fechas se muestran en formato espa\xF1ol:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Nacimiento:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " dd/mm/aaaa (ej: 04/12/1998)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Creado:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " dd/mm/aaaa hh:mm (ej: 08/02/2026 23:30)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\uD83D\uDCCA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Vista de Detalles del Paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Al hacer click en un paciente, se abre un panel lateral con ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "3 pesta\xF1as principales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\uD83D\uDCCB Historia Cl\xEDnica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Registros m\xE9dicos de consultas y tratamientos actuales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\uD83D\uDCC2 Antecedentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Historial m\xE9dico previo y documentaci\xF3n antigua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\uD83D\uDCDD Notas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Notas generales independientes del paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Nota:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Todas las listas tienen ordenamiento por columna (por defecto, lo m\xE1s antiguo primero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "NEW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, ") y truncamiento autom\xE1tico de texto largo (m\xE1ximo 100 caracteres + \"...\") expandible al hacer clic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "NEW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\uD83D\uDCCB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Historia Cl\xEDnica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\uD83C\uDFE5 Estructura de un Registro M\xE9dico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Cada registro m\xE9dico contiene:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "1\uFE0F\u20E3 Enfermedad Actual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Descripci\xF3n principal del motivo de consulta o condici\xF3n actual del paciente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Obligatorio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "2\uFE0F\u20E3 Antecedentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Descripci\xF3n de antecedentes m\xE9dicos o quir\xFArgicos relevantes para la consulta actual.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Opcional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "3\uFE0F\u20E3 Valoraciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Notas m\xE9dicas asociadas al registro para seguimiento evolutivo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Se agregan desde el modal de edici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Paginaci\xF3n: 3 valoraciones por p\xE1gina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Se pueden eliminar individualmente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Opcional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "4\uFE0F\u20E3 Diagn\xF3sticos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Diagn\xF3sticos m\xE9dicos con tratamiento opcional.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Descripci\xF3n del diagn\xF3stico (obligatorio)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Prescripci\xF3n/Tratamiento (opcional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Paginaci\xF3n: 3 diagn\xF3sticos por p\xE1gina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Opcional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "5\uFE0F\u20E3 Archivos Adjuntos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Documentos, im\xE1genes o videos relacionados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Solo disponible en modo edici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Tipos: \uD83D\uDCC4 Documentos, \uD83D\uDDBC\uFE0F Im\xE1genes, \uD83C\uDFA5 Videos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Visualizaci\xF3n de metadatos (nombre, tama\xF1o, fecha)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Opcional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\uD83D\uDD04 Flujo de Trabajo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "1.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Click en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "+ Agregar Registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Completar \"Enfermedad Actual\" y \"Antecedentes\" (si aplica) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " Agregar Valoraciones (opcional) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " Agregar Diagn\xF3sticos (opcional) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "5.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " Click en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Crear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "6.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Se abre autom\xE1ticamente la vista del registro ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "7.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " Click en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Actualizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " para editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "8.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " Subir archivos adjuntos en modo edici\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " Click en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "10.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " Vuelve a la vista con datos actualizados \u2705 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "\uD83D\uDCC2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Antecedentes M\xE9dicos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Registro de antecedentes personales y familiares del paciente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "\uD83D\uDCCC Casos de Uso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "\uD83E\uDE79 Alergias conocidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "\uD83C\uDFE5 Cirug\xEDas previas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "\uD83D\uDD2C Enfermedades cr\xF3nicas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67 Antecedentes familiares");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "\uD83D\uDC8A Medicaci\xF3n habitual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "\uD83D\uDE91 Hospitalizaciones anteriores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "\u2728 Caracter\xEDsticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Mismo dise\xF1o y flujo que Historia Cl\xEDnica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Modal de creaci\xF3n/edici\xF3n separado de vista");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Soporte para archivos adjuntos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Ordenamiento por descripci\xF3n o fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Paginaci\xF3n: 10 registros por p\xE1gina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Truncamiento de texto: 100 caracteres + \"...\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "\uD83D\uDCDD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Notas del Paciente ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "NEW v1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " Sistema independiente de notas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "directamente asociadas al paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, ", separado de las valoraciones de registros m\xE9dicos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "\uD83C\uDD9A Diferencia con Valoraciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "table", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Aspecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Notas de Paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Valoraciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Asociaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Directa al paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Asociada a registro m\xE9dico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Ubicaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Pesta\xF1a \"Notas\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Dentro de Historia Cl\xEDnica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Uso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Notas generales, recordatorios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Informaci\xF3n de consulta espec\xEDfica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Gesti\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Modal independiente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Dentro del modal de HC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "\u2728 Funcionalidades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "\u2705 Modal de creaci\xF3n/edici\xF3n propio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "\u2705 Modal de vista de solo lectura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "\u2705 Mismo dise\xF1o que HC y Antecedentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "\u2705 Ordenamiento por descripci\xF3n o fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "\u2705 Paginaci\xF3n: 10 notas por p\xE1gina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "\u2705 Truncamiento de texto largo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "\u2705 Actualizaci\xF3n autom\xE1tica de vistas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "\uD83D\uDD04 C\xF3mo Usarlo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "ol", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Selecciona un paciente de la lista");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Ve a la pesta\xF1a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "\uD83D\uDCDD Notas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Click en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "+ Agregar Registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Escribe la descripci\xF3n de la nota");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Click en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Crear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "La lista se actualiza autom\xE1ticamente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Click en una nota para ver detalles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Click en ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Actualizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " para editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "\uD83E\uDE9F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Sistema de Modales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Todos los registros (Historia Cl\xEDnica, Antecedentes, Notas) usan un sistema de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "doble modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "1\uFE0F\u20E3 Modal de Creaci\xF3n/Edici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Formulario reactivo con validaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "T\xEDtulo din\xE1mico: \"Crear\" o \"Editar\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Gesti\xF3n de sub-elementos (valoraciones, diagn\xF3sticos, archivos)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Bot\xF3n \"Eliminar\" solo en modo edici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Botones \"Cancelar\" y \"Crear\"/\"Guardar\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Indicadores de carga durante guardado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "2\uFE0F\u20E3 Modal de Vista (Solo Lectura)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Visualizaci\xF3n de todos los datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Listas paginadas de sub-elementos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Sin campos editables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Bot\xF3n \"Cerrar\" para salir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "Bot\xF3n \"Actualizar\" para ir a modo edici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "\uD83D\uDD04 Navegaci\xF3n Entre Modales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "Lista");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Click");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "Modal Vista");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Click \"Actualizar\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "Modal Edici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, " \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "Modal Vista (Actualizado)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, " \u2705 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "\uD83D\uDCCE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Gesti\xF3n de Archivos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "El sistema permite adjuntar archivos a Historia Cl\xEDnica y Antecedentes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "\uD83D\uDCCB Tipos de Archivos Soportados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "\uD83D\uDCC4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, " DOCUMENT (PDF, Word, Excel, etc.)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "\uD83D\uDDBC\uFE0F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, " IMAGE (JPG, PNG, GIF, etc.)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "\uD83C\uDFA5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, " VIDEO (MP4, AVI, MOV, etc.)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "\u2728 Funcionalidades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "Subida de archivos solo en modo edici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Visualizaci\xF3n de metadatos (nombre, tama\xF1o, fecha y hora de creaci\xF3n)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "Descarga/apertura en nueva pesta\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Eliminaci\xF3n con confirmaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "Iconos seg\xFAn categor\xEDa del archivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Paginaci\xF3n: 3 archivos por p\xE1gina en modales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "Nota:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, " Los archivos se almacenan en el servidor y se pueden previsualizar o descargar directamente desde el detalle del registro. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "\uD83D\uDCC4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "Generaci\xF3n de Reportes PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "Funcionalidad completa para generar, descargar y enviar historias cl\xEDnicas en formato PDF.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "\uD83D\uDE80 Caracter\xEDsticas Principales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "Selecci\xF3n Interactiva:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, " Modal dedicado para elegir qu\xE9 registros incluir.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "Control Total:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, " Casillas de verificaci\xF3n para \"Historia Cl\xEDnica\" y \"Antecedentes\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "Estilo Uniforme:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, " Listas de selecci\xF3n con dise\xF1o \"Valoraciones\" para mejor legibilidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "Paginaci\xF3n:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, " Listas de selecci\xF3n paginadas (3 registros por p\xE1gina).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "Nuevo v1.3.0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, " Selector de tipo de documento con dos flujos: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "Historial cl\xEDnico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, " o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "Consentimientos predefinidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "Nuevo v1.3.0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, " Plantillas de consentimiento con formulario din\xE1mico y validaciones por campo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "Nuevo v1.3.0:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, " Soporte de campos tipo selector (ej: tipo de representante legal).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "\uD83D\uDCDD Formato del Documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "Encabezado y Pie de P\xE1gina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "Logo oficial de la cl\xEDnica, informaci\xF3n de contacto web/email. Pie de p\xE1gina corporativo con firma m\xE9dica y t\xEDtulos profesionales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "Datos del Paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "Dise\xF1o centrado con t\xEDtulo en colSpan. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "\xA1Limpieza autom\xE1tica!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, " Los datos no informados (tanto de cabecera como de historial cl\xEDnico) se ocultan completamente del PDF. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "Detalle Completo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "Registros sin cuadros vac\xEDos, incluyendo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "VALORACIONES:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, " Notas de evoluci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "DIAGN\xD3STICOS:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, " Tratamiento y conducta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "\uD83D\uDDB1\uFE0F Acciones Disponibles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "Vista previa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "Enviar por Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "Vista previa:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, " Abre el PDF generado en una pesta\xF1a nueva para validarlo antes de enviarlo o descargarlo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "Descargar PDF:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, " En el flujo cl\xE1sico, se guarda con nombre estandarizado: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "nombre_apellido_dd_mm_aaaa.pdf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "Descargar consentimiento:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, " En plantillas, se descarga como: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "plantilla_[templateId].pdf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "Enviar por Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, " Abre tu cliente de correo (Outlook, Mail, etc.) con el asunto y cuerpo predefinidos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "Nota:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, " El PDF se descarga autom\xE1ticamente y debes adjuntarlo manualmente al correo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "\uD83E\uDDFE Consentimientos Disponibles (v1.3.0)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "Consentimiento Infusi\xF3n de Vitamina C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "Consentimiento b\xE1sico sin f\xE1rmacos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "Consentimiento Autohemotransfusi\xF3n con Ozono");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "\uD83D\uDE80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "Lanzamiento Portable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "NEW v1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, " Ahora MedCenter Manager cuenta con soporte para ser lanzado como un ejecutable portable, agrupando base de datos, backend y frontend. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "Sin necesidad de Docker.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, "Soporta doble clic para ejecutar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "Ejecuta ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "build_portable.ps1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, " o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "build_portable.sh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, " para compilar la aplicaci\xF3n completa en un \xFAnico archivo JAR.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "\uD83D\uDD0C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "Documentaci\xF3n de API (Swagger) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "NEW v1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, " El backend est\xE1 completamente documentado utilizando OpenAPI 3 (Swagger UI). Esto permite explorar y probar interactivamente todos los endpoints de la API. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, "Interfaz Visual (Swagger UI):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "http://localhost:8080/swagger-ui/index.html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "Definici\xF3n JSON (OpenAPI v3):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "http://localhost:8080/v3/api-docs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](723, " Aseg\xFArate de que el backend est\xE9 en ejecuci\xF3n (por ejemplo, mediante ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "./gradlew bootRun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, " o tu ejecutable portable) para acceder a estas URLs. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "\uD83D\uDCE6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "Changelog (Historial de Cambios)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "Versi\xF3n 1.3.0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "ACTUAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "Feature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, " Nuevo motor de PDFs por plantilla con ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "pdf-lib");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, " para rellenar consentimientos predefinidos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "Feature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, " Nuevo selector de tipo de documento en el modal PDF (historial cl\xE1sico vs. plantillas).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "Feature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, " Integraci\xF3n de 3 consentimientos en espa\xF1ol: Vitamina C, B\xE1sico sin f\xE1rmacos y Autohemotransfusi\xF3n con Ozono.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "Mejora:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, " Formulario din\xE1mico por plantilla con validaciones y autocompletado de nombre, DNI, edad y fecha.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "Mejora:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, " Nuevo tipo de campo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, " para \"Tipo de representante legal\" con opciones: representante legal, familiar o allegado.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "Bugfix:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, " Ajustes de posicionamiento de campos en consentimiento b\xE1sico sin f\xE1rmacos para alinear correctamente sobre l\xEDneas del PDF.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "Bugfix:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, " Correcci\xF3n de compatibilidad al generar Blob del PDF de plantillas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "h3", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "Versi\xF3n 1.2.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "Feature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, " Apertura de pacientes en nueva pesta\xF1a en segundo plano desde el listado.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, "Mejora:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, " Buscador de pacientes normalizado (insensible a may\xFAsculas y acentos). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "Mejora PDF:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, " Redise\xF1o total de la estructura de tablas PDF. Cabecera cl\xEDnica y pie de p\xE1gina de Dr. Consigliere.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "Mejora PDF:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, " Dise\xF1o din\xE1mico inteligente que oculta campos o filas de antecedentes y cl\xEDnica que est\xE9n vac\xEDos en el documento PDF para un informe limpio.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](794, "UI/UX:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, " Indicadores visuales en letra it\xE1lica para los campos que no hayan sido cubiertos en la ficha web del paciente (Mostrando \"No proporcionado\").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "Bugfix:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, " Correcci\xF3n de los espaciados, bordes y paginaci\xF3n en el generador de PDF (jspdf-autotable).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "h3", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "Versi\xF3n 1.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "Feature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, " Documentaci\xF3n interactiva de la API Backend integrada usando Swagger/OpenAPI 3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "Feature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, " Lanzamiento como ejecutable (.JAR) mediante scripts portables (Windows/Linux).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "Feature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, " Nuevo sistema de notas directamente vinculadas al paciente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "Mejora:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, " Refactorizaci\xF3n de todos los endpoints de la API Backend a formato kebab-case (ej. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "/api/medical-records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, ") mejorando la consistencia RESTful.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "Mejora:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, " Modo Oscuro optimizado para el exportador a PDF y validaciones.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "Mejora:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, " Reportes PDF refactorizados con mejor estructura, logo centrado, y botones mejorados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, "Mejora:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, " Listas ordenadas por defecto de m\xE1s antiguo a m\xE1s reciente; texto expandible en detalles.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, "Componentes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, " Extracci\xF3n de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "patient-detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, " para un enrutamiento lazy-loaded.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "Formularios:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, " Validaciones m\xE1s amigables (DNI, Tel\xE9fono) y campo Email opcional. Alertas visuales \"on-touch\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Arquitectura:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, " Simplificaci\xF3n del Backend quitando el subdirectorio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "app/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, " y eliminando Docker por defecto. Rutas REST estandarizadas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](855, "\uD83D\uDCA1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, "Consejos y Buenas Pr\xE1cticas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "\u2705 Usa Notas del Paciente para:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, "Recordatorios generales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "Observaciones importantes no ligadas a una consulta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "Informaci\xF3n administrativa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "Alertas sobre el paciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, "\u2705 Usa Valoraciones (HC) para:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "Evoluci\xF3n de un tratamiento espec\xEDfico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "Notas de seguimiento de consulta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "Observaciones m\xE9dicas de un registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](884, "\u2705 Organiza los Archivos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, "Usa nombres descriptivos al subir archivos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, "Adjunta estudios a su registro correspondiente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](891, "Documentaci\xF3n antigua va en Antecedentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](893, "Estudios recientes van en Historia Cl\xEDnica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, "\u2705 Aprovecha el Ordenamiento:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "Ordena por fecha para ver lo m\xE1s reciente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, "Ordena por descripci\xF3n para buscar alfab\xE9ticamente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, "Click en la misma columna alterna asc/desc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "footer", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, "Sistema MedCenter Manager-WEB v1.3.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, " - Desarrollado para la gesti\xF3n m\xE9dica integral");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](909, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, " \xDAltima actualizaci\xF3n: 23/04/2026 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](912, " \u2190 Volver al Inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".documentation-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: var(--space-xl) var(--space-md);\n  animation: fadeIn 0.5s ease-in-out;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-2xl);\n  padding-bottom: var(--space-lg);\n  border-bottom: 2px solid var(--color-border);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  color: var(--color-primary);\n  margin-bottom: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: var(--font-size-lg);\n  margin-bottom: var(--space-lg);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2xl);\n  background: var(--color-bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--space-xl);\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section.intro[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-white) 100%);\n  border-left: 5px solid var(--color-primary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section.intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  line-height: var(--line-height-relaxed);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section.intro[_ngcontent-%COMP%]   .version-badge[_ngcontent-%COMP%] {\n  margin-top: var(--space-md);\n  display: inline-block;\n  padding: var(--space-sm) var(--space-md);\n  background: var(--color-primary);\n  color: white;\n  border-radius: var(--radius-md);\n  font-weight: 600;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section.highlight[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-primary);\n  background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, var(--color-white) 100%);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-md);\n  margin-bottom: var(--space-lg);\n  border-bottom: 1px solid var(--color-border);\n  padding-bottom: var(--space-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-2xl);\n  color: var(--color-text-primary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .new-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--font-size-sm);\n  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);\n  color: white;\n  padding: 2px 8px;\n  border-radius: 12px;\n  margin-left: var(--space-sm);\n  font-weight: 600;\n  animation: pulse 2s infinite;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .intro-highlight[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  padding: var(--space-md);\n  background: rgba(79, 70, 229, 0.1);\n  border-left: 4px solid var(--color-primary);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--space-lg);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--space-lg);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .feature-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  padding: var(--space-md);\n  border-left: 3px solid var(--color-primary);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .feature-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--color-primary);\n  margin-bottom: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .feature-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .feature-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  line-height: var(--line-height-normal);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .feature-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: var(--space-sm);\n  padding-left: 20px;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .tabs-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-md);\n  margin: var(--space-lg) 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .tabs-info[_ngcontent-%COMP%]   .tab-card[_ngcontent-%COMP%] {\n  padding: var(--space-md);\n  background: linear-gradient(135deg, var(--color-bg-secondary), var(--color-white));\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  text-align: center;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .tabs-info[_ngcontent-%COMP%]   .tab-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--color-primary);\n  margin-bottom: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .tabs-info[_ngcontent-%COMP%]   .tab-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--space-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  padding: var(--space-md);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-md);\n  border-left: 4px solid var(--color-primary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin-bottom: var(--space-sm);\n  font-size: var(--font-size-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: var(--space-sm) 0;\n  padding-left: 20px;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%], .documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  margin-top: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-list[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .workflow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-sm);\n  margin-top: var(--space-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .workflow[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  padding: var(--space-sm) var(--space-md);\n  background: var(--color-bg-secondary);\n  border-left: 3px solid var(--color-primary);\n  border-radius: var(--radius-sm);\n  font-size: var(--font-size-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .workflow[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin-right: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .use-cases[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-sm);\n  margin: var(--space-md) 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .use-cases[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%] {\n  padding: var(--space-sm);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-md);\n  text-align: center;\n  font-weight: 500;\n  border: 1px solid var(--color-border);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: var(--space-md) 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: var(--space-sm);\n  text-align: left;\n  font-weight: 600;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--color-bg-secondary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--space-sm);\n  margin: var(--space-md) 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  padding: var(--space-sm);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-sm);\n  border-left: 3px solid #10b981;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .steps-list[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .steps-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-sm);\n  padding: var(--space-sm);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .modal-types[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--space-lg);\n  margin: var(--space-md) 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .modal-types[_ngcontent-%COMP%]   .modal-type[_ngcontent-%COMP%] {\n  padding: var(--space-md);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-md);\n  border: 2px solid var(--color-border);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .modal-types[_ngcontent-%COMP%]   .modal-type[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin-bottom: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .modal-types[_ngcontent-%COMP%]   .modal-type[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .modal-flow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  flex-wrap: wrap;\n  margin: var(--space-md) 0;\n  padding: var(--space-md);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-md);\n  justify-content: center;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .modal-flow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: var(--space-xs) var(--space-sm);\n  background: white;\n  border-radius: var(--radius-sm);\n  font-size: var(--font-size-sm);\n  border: 1px solid var(--color-border);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .modal-flow[_ngcontent-%COMP%]   span.highlight[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n  font-weight: 600;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-comparison[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-lg);\n  margin-top: var(--space-md);\n}\n@media (max-width: 768px) {\n  .documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-comparison[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-comparison[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: var(--color-bg-secondary);\n  padding: var(--space-lg);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-comparison[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  margin-bottom: var(--space-md);\n  padding-bottom: var(--space-sm);\n  border-bottom: 2px solid;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-comparison[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin: 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-comparison[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-sm);\n  color: var(--color-text-secondary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-comparison[_ngcontent-%COMP%]   .card.type-medical[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .card-comparison[_ngcontent-%COMP%]   .card.type-previous[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  border-color: var(--color-text-tertiary);\n  color: var(--color-text-secondary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .file-types[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-lg);\n  flex-wrap: wrap;\n  margin: var(--space-md) 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .file-types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  background: var(--color-bg-secondary);\n  padding: var(--space-sm) var(--space-md);\n  border-radius: var(--radius-md);\n  font-weight: 500;\n  border: 1px solid var(--color-border);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .improvements[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--space-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .improvements[_ngcontent-%COMP%]   .improvement[_ngcontent-%COMP%] {\n  padding: var(--space-md);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-md);\n  border-left: 4px solid var(--color-primary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .improvements[_ngcontent-%COMP%]   .improvement[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin-bottom: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .improvements[_ngcontent-%COMP%]   .improvement[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin: var(--space-sm) 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .tips[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--space-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .tips[_ngcontent-%COMP%]   .tip[_ngcontent-%COMP%] {\n  padding: var(--space-md);\n  background: linear-gradient(135deg, #fef3c7, #fef9e7);\n  border-radius: var(--radius-md);\n  border-left: 4px solid #f59e0b;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .tips[_ngcontent-%COMP%]   .tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #92400e;\n  margin-bottom: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .tips[_ngcontent-%COMP%]   .tip[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  color: #78350f;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .versions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--space-md);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .versions[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%] {\n  padding: var(--space-md);\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-md);\n  border-left: 4px solid var(--color-primary);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .versions[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin-bottom: var(--space-sm);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .versions[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin: var(--space-sm) 0;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--color-text-tertiary);\n  margin-top: var(--space-md);\n  font-style: italic;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-section[_ngcontent-%COMP%]   .note.success[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 600;\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-xl);\n  background: linear-gradient(135deg, var(--color-bg-secondary), var(--color-white));\n  border-radius: var(--radius-lg);\n  margin-top: var(--space-2xl);\n}\n.documentation-container[_ngcontent-%COMP%]   .doc-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-lg);\n  color: var(--color-text-secondary);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-primary[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRhdGlvbi9DOlxcVXNlcnNcXEp1YW5tYVxcRG9jdW1lbnRzXFxnaXRcXGNtZWRcXHdlYi9zcmNcXGFwcFxcZG9jdW1lbnRhdGlvblxcZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0Q0FBQTtBQ0NSO0FEQ1E7RUFDSSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNDWjtBREVRO0VBQ0ksa0NBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDQVo7QURJSTtFQUNJLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQ0FBQTtBQ0ZSO0FESVE7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0FDRlo7QURLUTtFQUNJLDBGQUFBO0VBQ0EsMkNBQUE7QUNIWjtBREtZO0VBQ0ksMkJBQUE7QUNIaEI7QURNWTtFQUNJLDhCQUFBO0VBQ0EsdUNBQUE7QUNKaEI7QURPWTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7QURTUTtFQUNJLHNDQUFBO0VBQ0Esd0ZBQUE7QUNQWjtBRFVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7QUNSWjtBRFVZO0VBQ0ksK0JBQUE7QUNSaEI7QURXWTtFQUNJLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDVGhCO0FEV2dCO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNUcEI7QURjUTtFQUNJLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQ1paO0FEZVE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxvQkFBQTtBQ2JaO0FEZVk7RUFDSSx3QkFBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtBQ2JoQjtBRGVnQjtFQUNJLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ2JwQjtBRGdCZ0I7RUFDSSxrQ0FBQTtFQUNBLHNDQUFBO0FDZHBCO0FEaUJnQjtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7QUNmcEI7QURvQlE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDbEJaO0FEb0JZO0VBQ0ksd0JBQUE7RUFDQSxrRkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQ2xCaEI7QURvQmdCO0VBQ0ksOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDbEJwQjtBRHFCZ0I7RUFDSSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtBQ25CcEI7QUR3QlE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUN0Qlo7QUR3Qlk7RUFDSSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQ0FBQTtBQ3RCaEI7QUR3QmdCO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDdEJwQjtBRHlCZ0I7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDdkJwQjtBRDBCZ0I7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUN4QnBCO0FEMkJnQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ3pCcEI7QUQ0QmdCO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDMUJwQjtBRCtCUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUM3Qlo7QUQrQlk7RUFDSSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FDN0JoQjtBRCtCZ0I7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0FDN0JwQjtBRGtDUTtFQUNJLGFBQUE7RUFDQSwyREFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNoQ1o7QURrQ1k7RUFDSSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNoQ2hCO0FEb0NRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNsQ1o7QURvQ1k7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7QUNsQ2hCO0FEb0NnQjtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2xDcEI7QUR1Q2dCO0VBQ0ksNENBQUE7QUNyQ3BCO0FEdUNvQjtFQUNJLHFDQUFBO0FDckN4QjtBRHdDb0I7RUFDSSx3QkFBQTtBQ3RDeEI7QUQ0Q1E7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDMUNaO0FENENZO0VBQ0ksd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUMxQ2hCO0FEOENRO0VBQ0ksa0JBQUE7QUM1Q1o7QUQ4Q1k7RUFDSSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtBQzVDaEI7QURnRFE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDOUNaO0FEZ0RZO0VBQ0ksd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7QUM5Q2hCO0FEZ0RnQjtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUM5Q3BCO0FEaURnQjtFQUNJLGtCQUFBO0FDL0NwQjtBRG9EUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUNsRFo7QURvRFk7RUFDSSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0FDbERoQjtBRG9EZ0I7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2xEcEI7QUR1RFE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDckRaO0FEdURZO0VBTko7SUFPUSwwQkFBQTtFQ3BEZDtBQUNGO0FEc0RZO0VBQ0kscUNBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7QUNwRGhCO0FEc0RnQjtFQUNJLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0FDcERwQjtBRHVEZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNyRHBCO0FEdURvQjtFQUNJLDhCQUFBO0VBQ0Esa0NBQUE7QUNyRHhCO0FEMERvQjtFQUNJLGtDQUFBO0VBQ0EsMkJBQUE7QUN4RHhCO0FENkRvQjtFQUNJLHdDQUFBO0VBQ0Esa0NBQUE7QUMzRHhCO0FEaUVRO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDL0RaO0FEaUVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDL0RoQjtBRG1FUTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ2pFWjtBRG1FWTtFQUNJLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJDQUFBO0FDakVoQjtBRG1FZ0I7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0FDakVwQjtBRG9FZ0I7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDbEVwQjtBRHVFUTtFQUNJLGFBQUE7RUFDQSwyREFBQTtFQUNBLG9CQUFBO0FDckVaO0FEdUVZO0VBQ0ksd0JBQUE7RUFDQSxxREFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUNyRWhCO0FEdUVnQjtFQUNJLGNBQUE7RUFDQSw4QkFBQTtBQ3JFcEI7QUR3RWdCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDdEVwQjtBRDJFUTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ3pFWjtBRDJFWTtFQUNJLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJDQUFBO0FDekVoQjtBRDJFZ0I7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0FDekVwQjtBRDRFZ0I7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDMUVwQjtBRCtFUTtFQUNJLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDN0VaO0FEK0VZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDN0VoQjtBRGtGSTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrRkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUNoRlI7QURrRlE7RUFDSSw4QkFBQTtFQUNBLGtDQUFBO0FDaEZaO0FEcUZBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ2xGSjtBRG9GSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ2xGUjtBRHFGSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ25GUjtBRHVGQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VDcEZOO0VEdUZFO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VDckZOO0FBQ0Y7QUR3RkE7RUFDSTtJQUNJLG1CQUFBO0VDdEZOO0VEd0ZFO0lBQ0ksc0JBQUE7RUN0Rk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50YXRpb24vZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpIHZhcigtLXNwYWNlLW1kKTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLmRvYy1oZWFkZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0yeGwpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtM3hsKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kb2Mtc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMnhsKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmludHJvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KSAwJSwgdmFyKC0tY29sb3Itd2hpdGUpIDEwMCUpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1yZWxheGVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZlcnNpb24tYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pIHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNzksIDcwLCAyMjksIDAuMDUpIDAlLCB2YXIoLS1jb2xvci13aGl0ZSkgMTAwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxuXHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAubmV3LWJhZGdlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjZiNmIsICNlZTVhNmYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnRyby1oaWdobGlnaHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3OSwgNzAsIDIyOSwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZlYXR1cmUtZ3JpZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxuXHJcbiAgICAgICAgICAgIC5mZWF0dXJlLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwLCB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbm9ybWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2Utc20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYnMtaW5mbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1sZykgMDtcclxuXHJcbiAgICAgICAgICAgIC50YWItY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpLCB2YXIoLS1jb2xvci13aGl0ZSkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtbGlzdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG5cclxuICAgICAgICAgICAgLmluZm8tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHZhcigtLXNwYWNlLXNtKSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQsIC5vcHRpb25hbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTFiMWI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm9wdGlvbmFsIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlN2ZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzczMGEzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud29ya2Zsb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG5cclxuICAgICAgICAgICAgLnN0ZXAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pIHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZS1jYXNlcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1tZCkgMDtcclxuXHJcbiAgICAgICAgICAgIC5jYXNlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb21wYXJpc29uLXRhYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tc3BhY2UtbWQpIDA7XHJcblxyXG4gICAgICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mZWF0dXJlLWxpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tc3BhY2UtbWQpIDA7XHJcblxyXG4gICAgICAgICAgICAuZmVhdHVyZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzEwYjk4MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0ZXBzLWxpc3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsLXR5cGVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xyXG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXNwYWNlLW1kKSAwO1xyXG5cclxuICAgICAgICAgICAgLm1vZGFsLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tb2RhbC1mbG93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1tZCkgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UteHMpIHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5oaWdobGlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1jb21wYXJpc29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi50eXBlLW1lZGljYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnR5cGUtcHJldmlvdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWxlLXR5cGVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1tZCkgMDtcclxuXHJcbiAgICAgICAgICAgIC50eXBlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pIHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltcHJvdmVtZW50cyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG5cclxuICAgICAgICAgICAgLmltcHJvdmVtZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tc3BhY2Utc20pIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXBzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG5cclxuICAgICAgICAgICAgLnRpcCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3LCAjZmVmOWU3KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmNTllMGI7XHJcblxyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTI0MDBlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzgzNTBmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmVyc2lvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxuXHJcbiAgICAgICAgICAgIC52ZXJzaW9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tc3BhY2Utc20pIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ub3RlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgICAgICAgICAgJi5zdWNjZXNzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTBiOTgxO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG9jLWZvb3RlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpLCB2YXIoLS1jb2xvci13aGl0ZSkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtMnhsKTtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWxnKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAmLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkMWZhZTU7XHJcbiAgICAgICAgY29sb3I6ICMwNjVmNDY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5iYWRnZS1wcmltYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xyXG4gICAgICAgIGNvbG9yOiAjMWU0MGFmO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMCUsIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbn0iLCIuZG9jdW1lbnRhdGlvbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKSB2YXIoLS1zcGFjZS1tZCk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTJ4bCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2MtaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtM3hsKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1oZWFkZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTJ4bCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBib3gtc2hhZG93IDAuMnM7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbi5pbnRybyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSkgMCUsIHZhcigtLWNvbG9yLXdoaXRlKSAxMDAlKTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24uaW50cm8gaDIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uLmludHJvIHAge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1yZWxheGVkKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24uaW50cm8gLnZlcnNpb24tYmFkZ2Uge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1tZCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pIHZhcigtLXNwYWNlLW1kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24uaGlnaGxpZ2h0IHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNzksIDcwLCAyMjksIDAuMDUpIDAlLCB2YXIoLS1jb2xvci13aGl0ZSkgMTAwJSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIgLmljb24ge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIgaDIgLm5ldy1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmY2YjZiLCAjZWU1YTZmKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2Utc20pO1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuaW50cm8taGlnaGxpZ2h0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzksIDcwLCAyMjksIDAuMSk7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWxnKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmZlYXR1cmUtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmZlYXR1cmUtZ3JpZCAuZmVhdHVyZS1pdGVtIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuZmVhdHVyZS1ncmlkIC5mZWF0dXJlLWl0ZW0gaDMge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuZmVhdHVyZS1ncmlkIC5mZWF0dXJlLWl0ZW0gcCwgLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuZmVhdHVyZS1ncmlkIC5mZWF0dXJlLWl0ZW0gdWwge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbm9ybWFsKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmZlYXR1cmUtZ3JpZCAuZmVhdHVyZS1pdGVtIHVsIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2Utc20pO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC50YWJzLWluZm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2UtbGcpIDA7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC50YWJzLWluZm8gLnRhYi1jYXJkIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpLCB2YXIoLS1jb2xvci13aGl0ZSkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC50YWJzLWluZm8gLnRhYi1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLnRhYnMtaW5mbyAudGFiLWNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuY2FyZC1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jYXJkLWxpc3QgLmluZm8tY2FyZCB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNhcmQtbGlzdCAuaW5mby1jYXJkIGg0IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNhcmQtbGlzdCAuaW5mby1jYXJkIHVsIHtcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zbSkgMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuY2FyZC1saXN0IC5pbmZvLWNhcmQgLnJlcXVpcmVkLCAuZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jYXJkLWxpc3QgLmluZm8tY2FyZCAub3B0aW9uYWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jYXJkLWxpc3QgLmluZm8tY2FyZCAucmVxdWlyZWQge1xuICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xuICBjb2xvcjogIzk5MWIxYjtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNhcmQtbGlzdCAuaW5mby1jYXJkIC5vcHRpb25hbCB7XG4gIGJhY2tncm91bmQ6ICNlMGU3ZmY7XG4gIGNvbG9yOiAjMzczMGEzO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAud29ya2Zsb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAud29ya2Zsb3cgLnN0ZXAge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSkgdmFyKC0tc3BhY2UtbWQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC53b3JrZmxvdyAuc3RlcCBzdHJvbmcge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2Utc20pO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAudXNlLWNhc2VzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICBtYXJnaW46IHZhcigtLXNwYWNlLW1kKSAwO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAudXNlLWNhc2VzIC5jYXNlIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jb21wYXJpc29uLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2UtbWQpIDA7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jb21wYXJpc29uLXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNvbXBhcmlzb24tdGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jb21wYXJpc29uLXRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jb21wYXJpc29uLXRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jb21wYXJpc29uLXRhYmxlIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuZmVhdHVyZS1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICBtYXJnaW46IHZhcigtLXNwYWNlLW1kKSAwO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuZmVhdHVyZS1saXN0IC5mZWF0dXJlIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxMGI5ODE7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5zdGVwcy1saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuc3RlcHMtbGlzdCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAubW9kYWwtdHlwZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2UtbWQpIDA7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5tb2RhbC10eXBlcyAubW9kYWwtdHlwZSB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLm1vZGFsLXR5cGVzIC5tb2RhbC10eXBlIGgzIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5tb2RhbC10eXBlcyAubW9kYWwtdHlwZSB1bCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLm1vZGFsLWZsb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IHZhcigtLXNwYWNlLW1kKSAwO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAubW9kYWwtZmxvdyBzcGFuIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UteHMpIHZhcigtLXNwYWNlLXNtKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLm1vZGFsLWZsb3cgc3Bhbi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuY2FyZC1jb21wYXJpc29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNhcmQtY29tcGFyaXNvbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNhcmQtY29tcGFyaXNvbiAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNhcmQtY29tcGFyaXNvbiAuY2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jYXJkLWNvbXBhcmlzb24gLmNhcmQgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNhcmQtY29tcGFyaXNvbiAuY2FyZCB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmNhcmQtY29tcGFyaXNvbiAuY2FyZC50eXBlLW1lZGljYWwgaDMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5jYXJkLWNvbXBhcmlzb24gLmNhcmQudHlwZS1wcmV2aW91cyBoMyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5maWxlLXR5cGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS1tZCkgMDtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmZpbGUtdHlwZXMgLnR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pIHZhcigtLXNwYWNlLW1kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmltcHJvdmVtZW50cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAuaW1wcm92ZW1lbnRzIC5pbXByb3ZlbWVudCB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmltcHJvdmVtZW50cyAuaW1wcm92ZW1lbnQgaDMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLmltcHJvdmVtZW50cyAuaW1wcm92ZW1lbnQgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utc20pIDA7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC50aXBzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAudGlwcyAudGlwIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3LCAjZmVmOWU3KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZjU5ZTBiO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAudGlwcyAudGlwIGg0IHtcbiAgY29sb3I6ICM5MjQwMGU7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLXNlY3Rpb24gLnRpcHMgLnRpcCB1bCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgY29sb3I6ICM3ODM1MGY7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC52ZXJzaW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAudmVyc2lvbnMgLnZlcnNpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC52ZXJzaW9ucyAudmVyc2lvbiBoMyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAudmVyc2lvbnMgLnZlcnNpb24gdWwge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utc20pIDA7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1zZWN0aW9uIC5ub3RlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW1kKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmRvY3VtZW50YXRpb24tY29udGFpbmVyIC5kb2Mtc2VjdGlvbiAubm90ZS5zdWNjZXNzIHtcbiAgY29sb3I6ICMxMGI5ODE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZG9jdW1lbnRhdGlvbi1jb250YWluZXIgLmRvYy1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY29sb3ItYmctc2Vjb25kYXJ5KSwgdmFyKC0tY29sb3Itd2hpdGUpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtMnhsKTtcbn1cbi5kb2N1bWVudGF0aW9uLWNvbnRhaW5lciAuZG9jLWZvb3RlciBwIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjZDFmYWU1O1xuICBjb2xvcjogIzA2NWY0Njtcbn1cbi5iYWRnZS5iYWRnZS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogI2RiZWFmZTtcbiAgY29sb3I6ICMxZTQwYWY7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-documentation',
          templateUrl: './documentation.component.html',
          styleUrls: ['./documentation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/documentation/documentation.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/documentation/documentation.module.ts ***!
    \*******************************************************/

  /*! exports provided: DocumentationModule */

  /***/
  function srcAppDocumentationDocumentationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationModule", function () {
      return DocumentationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./documentation.component */
    "./src/app/documentation/documentation.component.ts");
    /* harmony import */


    var _documentation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./documentation-routing.module */
    "./src/app/documentation/documentation-routing.module.ts"); // Important for ngFor/ngIf


    var DocumentationModule = function DocumentationModule() {
      _classCallCheck(this, DocumentationModule);
    };

    DocumentationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DocumentationModule
    });
    DocumentationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DocumentationModule_Factory(t) {
        return new (t || DocumentationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _documentation_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentationRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocumentationModule, {
        declarations: [_documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _documentation_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentationRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_documentation_component__WEBPACK_IMPORTED_MODULE_2__["DocumentationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _documentation_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentationRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=documentation-documentation-module-es5.js.map