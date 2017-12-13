webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<app-menu></app-menu>\n<app-body-container></app-body-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__body_container_servers_servers_component__ = __webpack_require__("../../../../../src/app/body-container/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__body_container_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/body-container/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__body_container_body_container_component__ = __webpack_require__("../../../../../src/app/body-container/body-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__body_container_servers_server_list_server_list_component__ = __webpack_require__("../../../../../src/app/body-container/servers/server-list/server-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__body_container_servers_server_list_server_item_server_item_component__ = __webpack_require__("../../../../../src/app/body-container/servers/server-list/server-item/server-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__body_container_servers_edit_server_edit_server_component__ = __webpack_require__("../../../../../src/app/body-container/servers/edit-server/edit-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__body_container_ledstrips_ledstrips_component__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__body_container_ledstrips_controller_form_controller_form_component__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller-form/controller-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__body_container_ledstrips_ledstrip_form_ledstrip_form_component__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-form/ledstrip-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__body_container_ledstrips_controller_list_controller_list_component__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller-list/controller-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__body_container_ledstrips_ledstrip_list_ledstrip_list_component__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__body_container_ledstrips_controller_list_controller_item_controller_item_component__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller-list/controller-item/controller-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__body_container_ledstrips_ledstrip_list_ledstrip_item_ledstrip_item_component__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-item/ledstrip-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__body_container_ledstrips_controller_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__body_container_dashboard_server_statistics_server_statistics_component__ = __webpack_require__("../../../../../src/app/body-container/dashboard/server-statistics/server-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__body_container_servers_server_service__ = __webpack_require__("../../../../../src/app/body-container/servers/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__body_container_dashboard_server_statistics_stats_item_stats_item_component__ = __webpack_require__("../../../../../src/app/body-container/dashboard/server-statistics/stats-item/stats-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: 'servers', component: __WEBPACK_IMPORTED_MODULE_5__body_container_servers_servers_component__["a" /* ServersComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__body_container_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'ledstrips', component: __WEBPACK_IMPORTED_MODULE_15__body_container_ledstrips_ledstrips_component__["a" /* LedstripsComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__body_container_dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__body_container_servers_servers_component__["a" /* ServersComponent */],
            __WEBPACK_IMPORTED_MODULE_6__body_container_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__body_container_body_container_component__["a" /* BodyContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_10__body_container_servers_server_list_server_list_component__["a" /* ServerListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__body_container_servers_server_list_server_item_server_item_component__["a" /* ServerItemComponent */],
            __WEBPACK_IMPORTED_MODULE_12__body_container_servers_edit_server_edit_server_component__["a" /* EditServerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__body_container_ledstrips_ledstrips_component__["a" /* LedstripsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__body_container_ledstrips_controller_form_controller_form_component__["a" /* ControllerFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__body_container_ledstrips_ledstrip_form_ledstrip_form_component__["a" /* LedstripFormComponent */],
            __WEBPACK_IMPORTED_MODULE_18__body_container_ledstrips_controller_list_controller_list_component__["a" /* ControllerListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__body_container_ledstrips_ledstrip_list_ledstrip_list_component__["a" /* LedstripListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__body_container_ledstrips_controller_list_controller_item_controller_item_component__["a" /* ControllerItemComponent */],
            __WEBPACK_IMPORTED_MODULE_21__body_container_ledstrips_ledstrip_list_ledstrip_item_ledstrip_item_component__["a" /* LedstripItemComponent */],
            __WEBPACK_IMPORTED_MODULE_23__body_container_dashboard_server_statistics_server_statistics_component__["a" /* ServerStatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__body_container_dashboard_server_statistics_stats_item_stats_item_component__["a" /* StatsItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common__["b" /* CommonModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_22__body_container_ledstrips_controller_service__["a" /* ControllerService */], __WEBPACK_IMPORTED_MODULE_24__body_container_servers_server_service__["a" /* ServerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/body-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/body-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content content container-fluid\">\n  <div class=\"content-wrapper\">\n      <div class=\"row\">\n        <router-outlet></router-outlet>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/body-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyContainerComponent = (function () {
    function BodyContainerComponent() {
    }
    BodyContainerComponent.prototype.ngOnInit = function () {
    };
    return BodyContainerComponent;
}());
BodyContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-body-container',
        template: __webpack_require__("../../../../../src/app/body-container/body-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/body-container.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BodyContainerComponent);

//# sourceMappingURL=body-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-server-statistics></app-server-statistics>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_statistics_stats_service__ = __webpack_require__("../../../../../src/app/body-container/dashboard/server-statistics/stats.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/body-container/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__server_statistics_stats_service__["a" /* StatsService */]]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/server-statistics/server-statistics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/server-statistics/server-statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-6 col-md-6 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-header\"><h4 class=\"card-title\">Server Statistics</h4></div>\n    <div class=\"card-body collapse in\">\n      <div class=\"card-block\">\n        <div class=\"table-responsive\">\n          <app-stats-item\n          *ngFor=\"let server of servers\"\n          [server]=\"server\"\n          ></app-stats-item>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/server-statistics/server-statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerStatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servers_server_service__ = __webpack_require__("../../../../../src/app/body-container/servers/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerStatisticsComponent = (function () {
    function ServerStatisticsComponent(serverService) {
        this.serverService = serverService;
        this.servers = [];
    }
    ServerStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getServers()
            .then(function (servers) {
            _this.servers = servers;
        });
    };
    return ServerStatisticsComponent;
}());
ServerStatisticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-server-statistics',
        template: __webpack_require__("../../../../../src/app/body-container/dashboard/server-statistics/server-statistics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/dashboard/server-statistics/server-statistics.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servers_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servers_server_service__["a" /* ServerService */]) === "function" && _a || Object])
], ServerStatisticsComponent);

var _a;
//# sourceMappingURL=server-statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/server-statistics/stats-item/stats-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/server-statistics/stats-item/stats-item.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>{{server.name}}</h5>\nCPU Load: {{stat.cpuLoad}}%\n<progress class=\"progress\" value=\"{{stat.cpuLoad}}\" max=\"100\" aria-describedby=\"CPU Load\" *ngIf=\"connection\"></progress>\n<progress class=\"progress progress-danger\" value=\"\" max=\"\" aria-describedby=\"CPU Load\" *ngIf=\"!connection\"></progress>\nRAM Usage: {{stat.ramUsage}}/{{server.ram}} MB\n<progress class=\"progress\" value=\"{{stat.ramUsage}}\" max=\"{{server.ram}}\" aria-describedby=\"RAM Usage\" *ngIf=\"connection\"></progress>\n<progress class=\"progress progress-danger\" value=\"\" max=\"\" aria-describedby=\"RAM Usage\" *ngIf=\"!connection\"></progress>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/server-statistics/stats-item/stats-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Stats_model__ = __webpack_require__("../../../../../src/app/models/Stats.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_server_model__ = __webpack_require__("../../../../../src/app/models/server.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stats_service__ = __webpack_require__("../../../../../src/app/body-container/dashboard/server-statistics/stats.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatsItemComponent = (function () {
    function StatsItemComponent(service) {
        this.service = service;
        this.stat = new __WEBPACK_IMPORTED_MODULE_1__models_Stats_model__["a" /* Stats */]();
        this.connection = false;
    }
    StatsItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getStats(this.server.address)
            .then(function (stats) {
            _this.stat = stats;
            _this.connection = true;
        }).catch(function (error) {
            _this.connection = false;
        });
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__('http://' + this.server.address + ':3001');
        this.socket.on('stats', function (data) {
            if (!_this.connection)
                _this.connection = true;
            _this.stat.cpuLoad = data.cpuLoad;
            _this.stat.ramUsage = data.ramUsage / 1024 / 1024;
        });
    };
    return StatsItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_Stats_model__["a" /* Stats */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_Stats_model__["a" /* Stats */]) === "function" && _a || Object)
], StatsItemComponent.prototype, "stat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_server_model__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_server_model__["a" /* Server */]) === "function" && _b || Object)
], StatsItemComponent.prototype, "server", void 0);
StatsItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stats-item',
        template: __webpack_require__("../../../../../src/app/body-container/dashboard/server-statistics/stats-item/stats-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/dashboard/server-statistics/stats-item/stats-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__stats_service__["a" /* StatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__stats_service__["a" /* StatsService */]) === "function" && _c || Object])
], StatsItemComponent);

var _a, _b, _c;
//# sourceMappingURL=stats-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/dashboard/server-statistics/stats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsService = (function () {
    function StatsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    StatsService.prototype.getStats = function (serverAddress) {
        var _this = this;
        var url = 'http://' + serverAddress + ':3001/stats';
        console.log(url);
        return this.http.get(url, { headers: this.headers }).toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    StatsService.prototype.getGraphStats = function (serverAddress) {
        var _this = this;
        var url = 'http://' + serverAddress + ':3001/stats/graph';
        return this.http.get(url, { headers: this.headers }).toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    StatsService.prototype.handleError = function (error) {
        console.log('handleError');
        return Promise.reject(error.message || error);
    };
    return StatsService;
}());
StatsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StatsService);

var _a;
//# sourceMappingURL=stats.service.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-form/controller-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-form/controller-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-md-12 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-header\"><h4 class=\"card-title\">Edit Controller</h4></div>\n    <div class=\"card-body collapse in\">\n      <div class=\"card-block\">\n        <form [formGroup]=\"controllerForm\" (ngSubmit)=\"save()\">\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <label for=\"address\">Address</label>\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\">\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button *ngIf=\"editMode\" class=\"btn btn-success\" [disabled]=\"!controllerForm.valid\">Update</button>\n              <button *ngIf=\"!editMode\" class=\"btn btn-success\" [disabled]=\"!controllerForm.valid\">Create</button>\n              <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-form/controller-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControllerFormComponent = (function () {
    function ControllerFormComponent(controllerService) {
        this.controllerService = controllerService;
        this.editMode = false;
    }
    ControllerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.controllerService.controllersSelected
            .subscribe(function (controller) {
            _this.controller = controller;
            _this.editMode = true;
            _this.initForm();
        });
    };
    ControllerFormComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.controllerService.updateController(this.controllerForm.value, this.controller._id)
                .then(function (response) {
                _this.editMode = false;
            }).catch(function (err) { return console.log(err); });
        }
        else {
            this.controllerService.addController(this.controllerForm.value)
                .then(function (result) { })
                .catch(function (err) { return console.log(err); });
        }
        this.controllerForm.patchValue({
            'name': null,
            'address': null
        });
    };
    ControllerFormComponent.prototype.cancel = function () {
        this.controllerForm.patchValue({
            'name': null,
            'address': null
        });
    };
    ControllerFormComponent.prototype.initForm = function () {
        var controllerName = '';
        var controllerAddress = '';
        if (this.editMode) {
            controllerName = this.controller.name;
            controllerAddress = this.controller.address;
        }
        this.controllerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](controllerName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](controllerAddress, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    };
    return ControllerFormComponent;
}());
ControllerFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-controller-form',
        template: __webpack_require__("../../../../../src/app/body-container/ledstrips/controller-form/controller-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/ledstrips/controller-form/controller-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__controller_service__["a" /* ControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__controller_service__["a" /* ControllerService */]) === "function" && _a || Object])
], ControllerFormComponent);

var _a;
//# sourceMappingURL=controller-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-list/controller-item/controller-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-list/controller-item/controller-item.component.html":
/***/ (function(module, exports) {

module.exports = "<td>{{controller.name}}</td>\n<td>{{controller.address}}</td>\n<td><button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n<button class=\"btn btn-info\" (click)=\"edit()\">Edit</button></td>\n\n"

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-list/controller-item/controller-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Controller_model__ = __webpack_require__("../../../../../src/app/models/Controller.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControllerItemComponent = (function () {
    function ControllerItemComponent(controllerService) {
        this.controllerService = controllerService;
    }
    ControllerItemComponent.prototype.ngOnInit = function () {
    };
    ControllerItemComponent.prototype.delete = function () {
        this.controllerService.deleteController(this.controller._id)
            .then(function (result) {
            console.log('item deleted');
        });
    };
    ControllerItemComponent.prototype.edit = function () {
        this.controllerService.selectController(this.controller);
    };
    return ControllerItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_Controller_model__["a" /* Controller */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_Controller_model__["a" /* Controller */]) === "function" && _a || Object)
], ControllerItemComponent.prototype, "controller", void 0);
ControllerItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[app-controller-item]',
        template: __webpack_require__("../../../../../src/app/body-container/ledstrips/controller-list/controller-item/controller-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/ledstrips/controller-list/controller-item/controller-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__controller_service__["a" /* ControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__controller_service__["a" /* ControllerService */]) === "function" && _b || Object])
], ControllerItemComponent);

var _a, _b;
//# sourceMappingURL=controller-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-list/controller-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-list/controller-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-md-12 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-header\"><h4 class=\"card-title\">Ledstrip Controllers</h4></div>\n    <div class=\"card-body collapse in\">\n      <div class=\"card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <td>Name</td>\n              <td>Address</td>\n              <td></td>\n              <td></td>\n            </tr>\n            </thead>\n            <tbody>\n            <tr\n              *ngFor=\"let c of controllers\"\n              app-controller-item\n              [controller]=\"c\"\n              (click)=\"select(c)\"\n            ></tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller-list/controller-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControllerListComponent = (function () {
    function ControllerListComponent(controllerService) {
        this.controllerService = controllerService;
        this.controllers = [];
    }
    ControllerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controllerService.getControllers()
            .then(function (controllers) {
            _this.controllers = controllers;
        });
        this.controllerService.controllersChanged.subscribe(function (controllers) {
            _this.controllers = controllers;
        });
    };
    ControllerListComponent.prototype.select = function (controller) {
        this.controllerService.selectController(controller);
    };
    return ControllerListComponent;
}());
ControllerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-controller-list',
        template: __webpack_require__("../../../../../src/app/body-container/ledstrips/controller-list/controller-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/ledstrips/controller-list/controller-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__controller_service__["a" /* ControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__controller_service__["a" /* ControllerService */]) === "function" && _a || Object])
], ControllerListComponent);

var _a;
//# sourceMappingURL=controller-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/controller.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_env__ = __webpack_require__("../../../../../src/app/environments/env.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControllerService = (function () {
    function ControllerService(http) {
        this.http = http;
        this.controllersChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.controllersSelected = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.serverUrlControllers = __WEBPACK_IMPORTED_MODULE_1__environments_env__["a" /* env */].serverUrl + '/controllers/';
        this.controllers = [];
    }
    ControllerService.prototype.selectController = function (controller) {
        this.controllersSelected.next(controller);
    };
    ControllerService.prototype.getControllers = function () {
        var _this = this;
        return this.http.get(this.serverUrlControllers, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ControllerService.prototype.addController = function (controller) {
        var _this = this;
        return this.http.post(this.serverUrlControllers, JSON.stringify(controller), { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.getControllers().then(function (controllers) {
                _this.controllers = controllers;
                _this.controllersChanged.next(_this.controllers.slice());
            });
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ControllerService.prototype.deleteController = function (id) {
        var _this = this;
        return this.http.delete(this.serverUrlControllers + id, { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.getControllers().then(function (controllers) {
                _this.controllers = controllers;
                _this.controllersChanged.next(_this.controllers.slice());
            });
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ControllerService.prototype.updateController = function (controller, id) {
        var _this = this;
        return this.http.put(this.serverUrlControllers + id, JSON.stringify(controller), { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.getControllers().then(function (controllers) {
                _this.controllers = controllers;
                _this.controllersChanged.next(_this.controllers.slice());
            });
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ControllerService.prototype.handleError = function (error) {
        console.log('handleError');
        return Promise.reject(error.message || error);
    };
    return ControllerService;
}());
ControllerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ControllerService);

var _a;
//# sourceMappingURL=controller.service.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-form/ledstrip-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-form/ledstrip-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-md-12 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-header\"><h4 class=\"card-title\">Edit Ledstrip</h4></div>\n    <div class=\"card-body collapse in\">\n      <div class=\"card-block\">\n        <form [formGroup]=\"ledstripForm\" (ngSubmit)=\"save()\">\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <label for=\"address\">Address</label>\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\">\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button *ngIf=\"editMode\" class=\"btn btn-success\" [disabled]=\"!ledstripForm.valid\">Update</button>\n              <button *ngIf=\"!editMode\" class=\"btn btn-success\" [disabled]=\"!ledstripForm.valid\">Create</button>\n              <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-form/ledstrip-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedstripFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ledstrip_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controller_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LedstripFormComponent = (function () {
    function LedstripFormComponent(stripService, controllerService) {
        this.stripService = stripService;
        this.controllerService = controllerService;
        this.editMode = false;
    }
    LedstripFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.stripService.ledstripsSelected
            .subscribe(function (strip) {
            _this.ledstrip = strip;
            _this.editMode = true;
            _this.initForm();
        });
        this.controllerService.controllersSelected
            .subscribe(function (controller) {
            _this.controller = controller;
            _this.cSelected = false;
        });
    };
    LedstripFormComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.stripService.updateLedstrip(this.ledstrip._id, this.ledstripForm.value)
                .then(function (response) {
                console.log('ledstrip updated');
                _this.editMode = false;
            });
        }
        else {
            this.stripService.addLedstrip(this.ledstripForm.value)
                .then(function (response) {
                console.log(';edstrip created');
            });
        }
        this.ledstripForm.patchValue({
            'name': null,
            'address': null
        });
    };
    LedstripFormComponent.prototype.cancel = function () {
        this.ledstripForm.patchValue({
            'name': null,
            'address': null
        });
    };
    LedstripFormComponent.prototype.initForm = function () {
        var ledStripName = '';
        var ledStripAddress;
        if (this.editMode) {
            ledStripName = this.ledstrip.name;
            ledStripAddress = this.ledstrip.address;
        }
        this.ledstripForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](ledStripName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](ledStripAddress, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    return LedstripFormComponent;
}());
LedstripFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ledstrip-form',
        template: __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-form/ledstrip-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-form/ledstrip-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ledstrip_service__["a" /* LedstripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ledstrip_service__["a" /* LedstripService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__controller_service__["a" /* ControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__controller_service__["a" /* ControllerService */]) === "function" && _b || Object])
], LedstripFormComponent);

var _a, _b;
//# sourceMappingURL=ledstrip-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-item/ledstrip-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-item/ledstrip-item.component.html":
/***/ (function(module, exports) {

module.exports = "<td>{{strip.name}}</td>\n<td>{{strip.address}}</td>\n<td><button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n<button class=\"btn btn-info\" (click)=\"edit()\">Edit</button></td>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-item/ledstrip-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedstripItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ledstrip_model__ = __webpack_require__("../../../../../src/app/models/ledstrip.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ledstrip_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LedstripItemComponent = (function () {
    function LedstripItemComponent(service) {
        this.service = service;
    }
    LedstripItemComponent.prototype.ngOnInit = function () {
    };
    LedstripItemComponent.prototype.edit = function () {
        this.service.selectLedstrip(this.strip);
    };
    LedstripItemComponent.prototype.delete = function () {
        this.service.deleteLedstrip(this.strip._id).then(function (response) {
            console.log('ledstrip deleted ' + response);
        });
    };
    return LedstripItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_ledstrip_model__["a" /* Ledstrip */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_ledstrip_model__["a" /* Ledstrip */]) === "function" && _a || Object)
], LedstripItemComponent.prototype, "strip", void 0);
LedstripItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[app-ledstrip-item]',
        template: __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-item/ledstrip-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-item/ledstrip-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ledstrip_service__["a" /* LedstripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ledstrip_service__["a" /* LedstripService */]) === "function" && _b || Object])
], LedstripItemComponent);

var _a, _b;
//# sourceMappingURL=ledstrip-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-md-12 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-header\"><h4 class=\"card-title\">Ledstrips</h4></div>\n    <div class=\"card-body collapse in\">\n      <div class=\"card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <td>Name</td>\n              <td>Address</td>\n              <td></td>\n              <td></td>\n            </tr>\n            </thead>\n            <tbody>\n            <tr\n              *ngFor=\"let s of ledstrips\"\n              app-ledstrip-item\n              [strip]=\"s\"\n            ></tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedstripListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ledstrip_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LedstripListComponent = (function () {
    function LedstripListComponent(stripService, controllersService) {
        this.stripService = stripService;
        this.controllersService = controllersService;
        this.ledstrips = [];
    }
    LedstripListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controllersService.controllersSelected
            .subscribe(function (controller) {
            console.log(controller);
            _this.stripService.getLedstrips(controller._id)
                .then(function (ledstrips) {
                _this.ledstrips = ledstrips;
            });
        });
        this.stripService.ledstripsChanged
            .subscribe(function (strips) {
            _this.ledstrips = strips;
        });
    };
    return LedstripListComponent;
}());
LedstripListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ledstrip-list',
        template: __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip-list/ledstrip-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ledstrip_service__["a" /* LedstripService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ledstrip_service__["a" /* LedstripService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__controller_service__["a" /* ControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__controller_service__["a" /* ControllerService */]) === "function" && _b || Object])
], LedstripListComponent);

var _a, _b;
//# sourceMappingURL=ledstrip-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedstripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_env__ = __webpack_require__("../../../../../src/app/environments/env.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controller_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/controller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LedstripService = (function () {
    function LedstripService(http, controllerService) {
        this.http = http;
        this.controllerService = controllerService;
        this.ledstripsChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.ledstripsSelected = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.serverUrlLedstrips = __WEBPACK_IMPORTED_MODULE_2__environments_env__["a" /* env */].serverUrl + '/ledstrips/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.ledstrips = [];
    }
    LedstripService.prototype.ngOnInit = function () {
    };
    LedstripService.prototype.selectLedstrip = function (ledstrip) {
        this.ledstripsSelected.next(ledstrip);
    };
    LedstripService.prototype.getLedstrips = function (id) {
        var _this = this;
        this.controllerId = id;
        return this.http.get(this.serverUrlLedstrips + id, { headers: this.headers }).toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    LedstripService.prototype.addLedstrip = function (ledstrip) {
        var _this = this;
        return this.http.post(this.serverUrlLedstrips + this.controllerId, JSON.stringify(ledstrip), { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.getLedstrips(_this.controllerId).then(function (ledstrips) {
                _this.ledstrips = ledstrips;
                _this.ledstripsChanged.next(_this.ledstrips.slice());
            });
            return response.json();
        });
    };
    LedstripService.prototype.deleteLedstrip = function (id) {
        var _this = this;
        return this.http.delete(this.serverUrlLedstrips + id + '/' + this.controllerId, { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.getLedstrips(_this.controllerId).then(function (ledstrips) {
                _this.ledstrips = ledstrips;
                _this.ledstripsChanged.next(_this.ledstrips.slice());
            });
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    LedstripService.prototype.updateLedstrip = function (id, ledstrip) {
        var _this = this;
        return this.http.put(this.serverUrlLedstrips + id, JSON.stringify(ledstrip), { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.getLedstrips(_this.controllerId).then(function (ledstrips) {
                _this.ledstrips = ledstrips;
                _this.ledstripsChanged.next(_this.ledstrips.slice());
            });
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    LedstripService.prototype.handleError = function (error) {
        console.log('handleError');
        return Promise.reject(error.message || error);
    };
    return LedstripService;
}());
LedstripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__controller_service__["a" /* ControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__controller_service__["a" /* ControllerService */]) === "function" && _b || Object])
], LedstripService);

var _a, _b;
//# sourceMappingURL=ledstrip.service.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrips.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrips.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-controller-list></app-controller-list>\n    <app-controller-form></app-controller-form>\n  </div>\n  <div class=\"col-md-6\">\n    <app-ledstrip-list></app-ledstrip-list>\n    <app-ledstrip-form></app-ledstrip-form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/ledstrips/ledstrips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedstripsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ledstrip_service__ = __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LedstripsComponent = (function () {
    function LedstripsComponent() {
    }
    LedstripsComponent.prototype.ngOnInit = function () {
    };
    return LedstripsComponent;
}());
LedstripsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ledstrips',
        template: __webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrips.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/ledstrips/ledstrips.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ledstrip_service__["a" /* LedstripService */]]
    }),
    __metadata("design:paramtypes", [])
], LedstripsComponent);

//# sourceMappingURL=ledstrips.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/servers/edit-server/edit-server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/servers/edit-server/edit-server.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-6 col-md-6 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-header\"><h4 class=\"card-title\">Edit Server</h4></div>\n    <div class=\"card-body collapse in\">\n      <div class=\"card-block\">\n        <form [formGroup]=\"serverForm\" (ngSubmit)=\"save()\">\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <label for=\"address\">Address</label>\n              <input type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <label for=\"name\">RAM</label>\n              <input type=\"text\" id=\"ram\" formControlName=\"ram\" class=\"form-control\">\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button *ngIf=\"editMode\" class=\"btn btn-success\" [disabled]=\"!serverForm.valid\">Update</button>\n              <button *ngIf=\"!editMode\" class=\"btn btn-success\" [disabled]=\"!serverForm.valid\">Create</button>\n              <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/servers/edit-server/edit-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditServerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/body-container/servers/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditServerComponent = (function () {
    function EditServerComponent(serverService) {
        this.serverService = serverService;
        this.editMode = false;
    }
    EditServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.serverService.serverSelected.subscribe(function (server) {
            _this.server = server;
            console.log('new server: ' + server.name);
            _this.editMode = true;
            _this.initForm();
        });
    };
    EditServerComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.serverService.updateServer(this.serverForm.value, this.server.id)
                .then(function (response) {
                console.log(response);
                _this.editMode = false;
            }).catch(function (err) { return console.log(err); });
        }
        else {
            this.serverService.addServer(this.serverForm.value)
                .then(function (response) {
                console.log('server created');
            }).catch(function (err) { return console.log(err); });
        }
        this.serverForm.patchValue({
            'name': null,
            'address': null,
            'ram': null,
        });
    };
    EditServerComponent.prototype.cancel = function () {
        this.serverForm.patchValue({
            'name': null,
            'address': null,
            'ram': null
        });
    };
    EditServerComponent.prototype.initForm = function () {
        var serverName = '';
        var serverAddress = '';
        var serverRam;
        if (this.editMode) {
            serverName = this.server.name;
            serverAddress = this.server.address;
            serverRam = this.server.ram;
        }
        this.serverForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](serverName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](serverAddress, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'ram': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](serverRam, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    };
    return EditServerComponent;
}());
EditServerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-server',
        template: __webpack_require__("../../../../../src/app/body-container/servers/edit-server/edit-server.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/servers/edit-server/edit-server.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _a || Object])
], EditServerComponent);

var _a;
//# sourceMappingURL=edit-server.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/servers/server-list/server-item/server-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/servers/server-list/server-item/server-item.component.html":
/***/ (function(module, exports) {

module.exports = "<td>{{server.name}}</td>\n<td>{{server.address}}</td>\n<td>{{server.ram}} MB</td>\n<td>\n  <button class=\"btn btn-info\" (click)=\"selectServer()\">Edit</button>\n  <button class=\"btn btn-danger\" (click)=\"deleteServer()\">Delete</button></td>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/servers/server-list/server-item/server-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_server_model__ = __webpack_require__("../../../../../src/app/models/server.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/body-container/servers/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerItemComponent = (function () {
    function ServerItemComponent(serverService) {
        this.serverService = serverService;
    }
    ServerItemComponent.prototype.ngOnInit = function () {
        console.log(JSON.stringify(this.server));
    };
    ServerItemComponent.prototype.deleteServer = function () {
        console.log('deleting server');
        this.serverService.deleteServer(this.server.id).then(function (result) {
            console.log('server deleted with id: ' + result);
        })
            .catch(function (err) { return console.log(err); });
    };
    ServerItemComponent.prototype.selectServer = function () {
        this.serverService.selectServer(this.server);
    };
    return ServerItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_server_model__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_server_model__["a" /* Server */]) === "function" && _a || Object)
], ServerItemComponent.prototype, "server", void 0);
ServerItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[app-server-item]',
        template: __webpack_require__("../../../../../src/app/body-container/servers/server-list/server-item/server-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/servers/server-list/server-item/server-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]) === "function" && _b || Object])
], ServerItemComponent);

var _a, _b;
//# sourceMappingURL=server-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/servers/server-list/server-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/servers/server-list/server-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-6 col-md-6 col-xs-12\">\n  <div class=\"card\">\n    <div class=\"card-header\"><h4 class=\"card-title\">Servers</h4></div>\n    <div class=\"card-body collapse in\">\n      <div class=\"card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <td>Server</td>\n                <td>Address</td>\n                <td>RAM</td>\n                <td></td>\n              </tr>\n            </thead>\n            <tbody>\n              <tr\n              *ngFor=\"let server of servers\"\n              app-server-item\n              [server]=\"server\"\n              ></tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/servers/server-list/server-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/body-container/servers/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerListComponent = (function () {
    function ServerListComponent(serverService) {
        this.serverService = serverService;
    }
    ServerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.getServers()
            .then(function (servers) { return _this.servers = servers; })
            .catch(function (error) { return console.log(error); });
        this.serverService.serversChanged.subscribe(function (servers) {
            _this.servers = servers;
        });
    };
    return ServerListComponent;
}());
ServerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-server-list',
        template: __webpack_require__("../../../../../src/app/body-container/servers/server-list/server-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/servers/server-list/server-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object])
], ServerListComponent);

var _a;
//# sourceMappingURL=server-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/servers/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_env__ = __webpack_require__("../../../../../src/app/environments/env.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
        this.serversChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.serverSelected = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_1__environments_env__["a" /* env */].serverUrl + '/servers/';
        this.servers = [];
    }
    ServerService.prototype.selectServer = function (server) {
        this.serverSelected.next(server);
    };
    ServerService.prototype.getServers = function () {
        var _this = this;
        return this.http.get(this.serverUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ServerService.prototype.addServer = function (server) {
        var _this = this;
        console.log('create server: ' + server);
        return this.http.post(this.serverUrl, JSON.stringify(server), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.getServers().then(function (servers) {
                _this.servers = servers;
                _this.serversChanged.next(_this.servers.slice());
            });
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ServerService.prototype.updateServer = function (server, id) {
        var _this = this;
        return this.http.put(this.serverUrl + id, JSON.stringify(server), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.getServers().then(function (servers) {
                _this.servers = servers;
                _this.serversChanged.next(_this.servers.slice());
            });
            return response.json();
        })
            .catch(function (error) {
            return _this.handleError(error);
        });
    };
    ServerService.prototype.deleteServer = function (id) {
        var _this = this;
        return this.http.delete(this.serverUrl + id, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.getServers().then(function (servers) {
                _this.servers = servers;
                _this.serversChanged.next(_this.servers.slice());
            });
            return response.json();
        }).catch(function (error) {
            return _this.handleError(error);
        });
    };
    ServerService.prototype.handleError = function (error) {
        console.log('handleError');
        return Promise.reject(error.message || error);
    };
    return ServerService;
}());
ServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/app/body-container/servers/servers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-container/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<app-server-list></app-server-list>\n<app-edit-server></app-edit-server>\n"

/***/ }),

/***/ "../../../../../src/app/body-container/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = (function () {
    function ServersComponent() {
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    return ServersComponent;
}());
ServersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-servers',
        template: __webpack_require__("../../../../../src/app/body-container/servers/servers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body-container/servers/servers.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], ServersComponent);

//# sourceMappingURL=servers.component.js.map

/***/ }),

/***/ "../../../../../src/app/environments/env.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return env; });
var env = {
    production: false,
    serverUrl: 'http://192.168.1.105:3000'
};
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-navbar navbar navbar-with-menu navbar-fixed-top navbar-semi-dark navbar-shadow\">\n  <div class=\"navbar-wrapper\">\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item mobile-menu hidden-md-up float-xs-left\"><a class=\"nav-link nav-menu-main menu-toggle hidden-xs\"><i class=\"icon-menu5 font-large-1\"></i></a></li>\n        <li class=\"nav-item hidden-md-up float-xs-right\"><a data-toggle=\"collapse\" data-target=\"#navbar-mobile\" class=\"nav-link open-navbar-container\"><i class=\"icon-ellipsis pe-2x icon-icon-rotate-right-right\"></i></a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-scroll-to-active=\"true\" class=\"main-menu menu-fixed menu-dark menu-accordion menu-shadow\">\n  <div class=\"main-menu-content\">\n    <ul id=\"main-menu-navigation\" data-menu=\"menu-navigation\" class=\"navigation navigation-main\">\n      <li class=\" nav-item\"><a [routerLink]=\"['/dashboard']\"><span data-i18n=\"nav.dash.main\" class=\"menu-title\">Dashboard</span></a></li>\n      <li class=\" nav-item\"><a [routerLink]=\"['/servers']\"><span data-i18n=\"nav.dash.main\" class=\"menu-title\">Servers</span></a></li>\n      <li class=\" nav-item\"><a [routerLink]=\"['/ledstrips']\"><span data-i18n=\"nav.dash.main\" class=\"menu-title\">led strips</span></a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Controller.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Controller; });
var Controller = (function () {
    function Controller(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Controller;
}());

//# sourceMappingURL=Controller.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/Stats.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stats; });
var Stats = (function () {
    function Stats(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Stats;
}());

//# sourceMappingURL=Stats.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/ledstrip.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ledstrip; });
var Ledstrip = (function () {
    function Ledstrip(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Ledstrip;
}());

//# sourceMappingURL=ledstrip.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/server.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Server; });
var Server = (function () {
    function Server(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Server;
}());

//# sourceMappingURL=server.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map