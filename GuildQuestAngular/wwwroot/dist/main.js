(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/dollar.ts":
/*!**********************************!*\
  !*** ./src/app/Models/dollar.ts ***!
  \**********************************/
/*! exports provided: Dollar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dollar", function() { return Dollar; });
var Dollar = /** @class */ (function () {
    function Dollar(id, amount) {
        this.id = id;
        this.amount = amount;
    }
    return Dollar;
}());



/***/ }),

/***/ "./src/app/Models/searchfields.ts":
/*!****************************************!*\
  !*** ./src/app/Models/searchfields.ts ***!
  \****************************************/
/*! exports provided: Searchfields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searchfields", function() { return Searchfields; });
var Searchfields = /** @class */ (function () {
    function Searchfields(searchMakeModel, searchBeginDollar, searchEndDollar, searchBeginYear, searchEndYear) {
        if (searchMakeModel === void 0) { searchMakeModel = ''; }
        if (searchBeginDollar === void 0) { searchBeginDollar = null; }
        if (searchEndDollar === void 0) { searchEndDollar = null; }
        if (searchBeginYear === void 0) { searchBeginYear = null; }
        if (searchEndYear === void 0) { searchEndYear = null; }
        this.searchMakeModel = searchMakeModel;
        this.searchBeginDollar = searchBeginDollar;
        this.searchEndDollar = searchEndDollar;
        this.searchBeginYear = searchBeginYear;
        this.searchEndYear = searchEndYear;
    }
    return Searchfields;
}());



/***/ }),

/***/ "./src/app/Models/year.ts":
/*!********************************!*\
  !*** ./src/app/Models/year.ts ***!
  \********************************/
/*! exports provided: Year */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Year", function() { return Year; });
var Year = /** @class */ (function () {
    function Year(id, year) {
        this.id = id;
        this.year = year;
    }
    return Year;
}());



/***/ }),

/***/ "./src/app/Pipes/datefilter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/Pipes/datefilter.pipe.ts ***!
  \******************************************/
/*! exports provided: DatefilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatefilterPipe", function() { return DatefilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatefilterPipe = /** @class */ (function () {
    function DatefilterPipe() {
    }
    DatefilterPipe.prototype.transform = function (items, startyear, endyear) {
        if (!items || (!startyear && !endyear)) {
            return items;
        }
        var startx = 1900;
        var end = 9999;
        if (!startyear || startyear == undefined || startyear == null || startyear.year == undefined) {
            startx = 1990;
        }
        else {
            startx = startyear.year;
        }
        if (!endyear || endyear == undefined || endyear == null || endyear.year == undefined) {
            end = 9999;
        }
        else {
            end = endyear.year;
        }
        return items.filter(function (item) { return item.year >= startx && item.year <= end; });
    };
    DatefilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'datefilter'
        })
    ], DatefilterPipe);
    return DatefilterPipe;
}());



/***/ }),

/***/ "./src/app/Pipes/model.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/Pipes/model.pipe.ts ***!
  \*************************************/
/*! exports provided: ModelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelPipe", function() { return ModelPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModelPipe = /** @class */ (function () {
    function ModelPipe() {
    }
    ModelPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return item.makeID === filter; });
    };
    ModelPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'modelfilter'
        })
    ], ModelPipe);
    return ModelPipe;
}());



/***/ }),

/***/ "./src/app/Pipes/pricefilter.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/Pipes/pricefilter.pipe.ts ***!
  \*******************************************/
/*! exports provided: PricefilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricefilterPipe", function() { return PricefilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricefilterPipe = /** @class */ (function () {
    function PricefilterPipe() {
    }
    PricefilterPipe.prototype.transform = function (items, startprice, endprice) {
        if (!items || (!startprice && !endprice)) {
            return items;
        }
        var startx = -1;
        var end = 10000000;
        if (!startprice || startprice == undefined || startprice == null || startprice.amount == undefined) {
            startx = -1;
        }
        else {
            startx = startprice.amount;
        }
        if (!endprice || endprice == undefined || endprice == null || endprice.amount == undefined) {
            end = 10000000;
        }
        else {
            end = endprice.amount;
        }
        return items.filter(function (item) { return (item.salesPrice >= startx) && (item.salesPrice <= end); });
    };
    PricefilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pricefilter'
        })
    ], PricefilterPipe);
    return PricefilterPipe;
}());



/***/ }),

/***/ "./src/app/Pipes/vehiclefilter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/Pipes/vehiclefilter.pipe.ts ***!
  \*********************************************/
/*! exports provided: VehiclefilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclefilterPipe", function() { return VehiclefilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VehiclefilterPipe = /** @class */ (function () {
    function VehiclefilterPipe() {
    }
    VehiclefilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return item.yearMakeModel.toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
    };
    VehiclefilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'vehiclefilter'
        })
    ], VehiclefilterPipe);
    return VehiclefilterPipe;
}());



/***/ }),

/***/ "./src/app/Services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = /** @class */ (function () {
    function ContactService(_http) {
        this._http = _http;
    }
    ContactService.prototype.getContacts = function () {
        return this._http.get('api/Contact/Index')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    ContactService.prototype.getContactById = function (id) {
        return this._http.get("api/Contact/Details/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    ContactService.prototype.saveContact = function (contact) {
        return this._http.post('api/Misc/Contact/Create', contact)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    ContactService.prototype.updateContact = function (contact) {
        return this._http.put('api/Contact/Edit', contact)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    ContactService.prototype.deleteContact = function (id) {
        return this._http.delete("api/Contact/Delete/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    ContactService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/Services/custom-lazy-apikey-loader.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Services/custom-lazy-apikey-loader.service.ts ***!
  \***************************************************************/
/*! exports provided: CustomLazyMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLazyMapsAPILoader", function() { return CustomLazyMapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_core_utils_browser_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core/utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//import { HttpClient, Response, Headers, RequestOptions } from '@angular/common/http';



var CustomLazyMapsAPILoader = /** @class */ (function (_super) {
    __extends(CustomLazyMapsAPILoader, _super);
    function CustomLazyMapsAPILoader(config, w, d, http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    CustomLazyMapsAPILoader.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
        this.http.get("api/Misc/GetGoogleKey")
            .subscribe(function (res) {
            _this._config.apiKey = res;
            console.log("apiKey " + res);
            script.src = _this._getScriptSrc(callbackName);
            _this._documentRef.getNativeDocument().body.appendChild(script);
        });
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[callbackName] = function () { console.log("loaded"); resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        return this._scriptLoadingPromise;
    };
    CustomLazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsScriptProtocol"].HTTPS;
        var protocol;
        switch (protocolType) {
            case _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsScriptProtocol"].AUTO:
                protocol = '';
                break;
            case _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsScriptProtocol"].HTTP:
                protocol = 'http:';
                break;
            case _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsScriptProtocol"].HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    CustomLazyMapsAPILoader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_agm_core__WEBPACK_IMPORTED_MODULE_2__["LAZY_MAPS_API_CONFIG"])),
        __metadata("design:paramtypes", [Object, _agm_core_utils_browser_globals__WEBPACK_IMPORTED_MODULE_3__["WindowRef"], _agm_core_utils_browser_globals__WEBPACK_IMPORTED_MODULE_3__["DocumentRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomLazyMapsAPILoader);
    return CustomLazyMapsAPILoader;
}(_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]));



/***/ }),

/***/ "./src/app/Services/misc.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/misc.service.ts ***!
  \******************************************/
/*! exports provided: MiscService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscService", function() { return MiscService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MiscService = /** @class */ (function () {
    function MiscService(http) {
        this.http = http;
        this.apiBase = 'api/Misc';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    MiscService.prototype.getData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.http.get(this.apiBase + '/BodyStyles'), this.http.get(this.apiBase + '/ExteriorColors'), this.http.get(this.apiBase + '/InteriorColors'), this.http.get(this.apiBase + '/Makes'), this.http.get(this.apiBase + '/MakeModels'), this.http.get(this.apiBase + '/Transmissions'));
    };
    MiscService.prototype.getKeys = function () {
        return this.http.get(this.apiBase);
    };
    MiscService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MiscService);
    return MiscService;
}());



/***/ }),

/***/ "./src/app/Services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_Models_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Models/year */ "./src/app/Models/year.ts");
/* harmony import */ var app_Models_dollar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Models/dollar */ "./src/app/Models/dollar.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchService = /** @class */ (function () {
    function SearchService() {
        this.currentYear = parseInt(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(Date.now(), 'yyyy', 'en-US'));
        this.numberofYears = 30;
        this.cutoffYear = this.currentYear + 1;
        this.firstYear = this.currentYear - this.numberofYears + 1;
        this.beginYears = new Array(this.numberofYears); // = new Array<number>( this.numberofYears );
        this.endYears = new Array(this.numberofYears); // new Array<number>( this.numberofYears );
        this.beginDollars = new Array(10);
        this.endDollars = new Array(10);
    }
    SearchService.prototype.ngOnInit = function () {
        this.setup();
    };
    SearchService.prototype.setup = function () {
        //console.log( "Year is " + this.currentYear );
        //console.log( "Cutoff year is " + this.cutoffYear );
        //console.log( "First year is " + this.firstYear );
        for (var i = 0; i < this.numberofYears; i++) {
            var tyear = i + this.firstYear;
            this.beginYears[i] = new app_Models_year__WEBPACK_IMPORTED_MODULE_2__["Year"](tyear, tyear);
            this.endYears[i] = new app_Models_year__WEBPACK_IMPORTED_MODULE_2__["Year"](tyear + 1, tyear + 1);
            //console.log(this.beginYears[i].year);
        }
        for (var i = 0; i < 10; i++) {
            var tdollar = i * 10000;
            this.beginDollars[i] = new app_Models_dollar__WEBPACK_IMPORTED_MODULE_3__["Dollar"](tdollar, tdollar);
            this.endDollars[i] = new app_Models_dollar__WEBPACK_IMPORTED_MODULE_3__["Dollar"](tdollar + 5000, tdollar + 5000);
            //console.log(this.beginDollars[i].amount);
        }
        //console.log( this.beginYears );
        //console.log( this.beginDollars );
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/Services/specials.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/specials.service.ts ***!
  \**********************************************/
/*! exports provided: SpecialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialsService", function() { return SpecialsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SpecialsService = /** @class */ (function () {
    function SpecialsService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    SpecialsService.prototype.getSpecials = function () {
        return this.http.get('api/Specials');
    };
    SpecialsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpecialsService);
    return SpecialsService;
}());



/***/ }),

/***/ "./src/app/Services/vehicles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/vehicles.service.ts ***!
  \**********************************************/
/*! exports provided: VehiclesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return VehiclesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var VehiclesService = /** @class */ (function () {
    function VehiclesService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    VehiclesService.prototype.getFeatured = function () {
        return this.http.get('api/Vehicles/Featured');
    };
    VehiclesService.prototype.getVehicles = function () {
        return this.http.get('api/Vehicles');
    };
    VehiclesService.prototype.getAllVehicles = function () {
        return this.http.get('api/Vehicles/All');
    };
    VehiclesService.prototype.getNewVehicles = function () {
        return this.http.get('api/Vehicles/New');
    };
    VehiclesService.prototype.getUsedVehicles = function () {
        return this.http.get('api/Vehicles/Used');
    };
    VehiclesService.prototype.getVehicle = function (vehicleId) {
        return this.http.get('api/Vehicles/Detail/' + vehicleId);
    };
    VehiclesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VehiclesService);
    return VehiclesService;
}());



/***/ }),

/***/ "./src/app/Shared/api-interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/Shared/api-interceptor.ts ***!
  \*******************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor() {
    }
    ApiInterceptor.prototype.intercept = function (req, next) {
        var baseUrl = document.getElementsByTagName('base')[0].href;
        var apiReq = req.clone({ url: "" + baseUrl + req.url });
        return next.handle(apiReq);
    };
    ApiInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "./src/app/Shared/globals.ts":
/*!***********************************!*\
  !*** ./src/app/Shared/globals.ts ***!
  \***********************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.googleMapKey = 'Invalid';
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/Shared/not-found.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Shared/not-found.component.ts ***!
  \***********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/Shared/validation-summary/validation-summary.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Shared/validation-summary/validation-summary.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errors?.length > 0\" class=\"validation-summary\">\r\n  <p>Please fix the following errors:</p>\r\n  <ul>\r\n    <li *ngFor=\"let error of errors\">{{ error }}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/validation-summary/validation-summary.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/Shared/validation-summary/validation-summary.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validation-summary {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #721c24;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: .25rem; }\n\n.validation-summary p {\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/Shared/validation-summary/validation-summary.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Shared/validation-summary/validation-summary.component.ts ***!
  \***************************************************************************/
/*! exports provided: ValidationSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationSummaryComponent", function() { return ValidationSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationSummaryComponent = /** @class */ (function () {
    function ValidationSummaryComponent() {
        this.errors = [];
    }
    ValidationSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] === false) {
            throw new Error('You must supply the validation summary with an NgForm.');
        }
        this.form.statusChanges.subscribe(function (status) {
            _this.resetErrorMessages();
            _this.generateErrorMessages(_this.form.control);
        });
    };
    ValidationSummaryComponent.prototype.resetErrorMessages = function () {
        this.errors.length = 0;
    };
    ValidationSummaryComponent.prototype.generateErrorMessages = function (formGroup) {
        var _this = this;
        //console.log(formGroup);
        console.log('Begin checking errors');
        Object.keys(formGroup.controls).forEach(function (controlName) {
            var control = formGroup.controls[controlName];
            console.log(control);
            if (control === undefined || control === null || !control.dirty) {
                return;
            }
            console.log('Passed first test');
            console.log(control);
            var errors = control.errors;
            if (errors === undefined || errors === null || errors.count === 0) {
                return;
            }
            console.log('Passed second test');
            console.log(errors);
            // Handle the 'required' case
            console.log('Checking if required');
            if (errors.required) {
                _this.errors.push(controlName + " is required");
                console.log('Required error');
            }
            // Handle 'email' case
            console.log('Checking if valid email');
            if (errors.email) {
                _this.errors.push(controlName + " is not a valid email.");
                console.log('Invalid email');
            }
            console.log('Checking minimum length');
            // Handle 'minlength' case
            if (errors.minlength) {
                _this.errors.push(controlName + " minimum length is " + errors.minlength.requiredLength + ". You need " + (errors.minlength.requiredLength - errors.minlength.actualLength) + " more characters.");
                console.log('Minimum length error');
            }
            console.log('Checking maximum length');
            // Handle 'maxlength' case
            if (errors.maxlength) {
                _this.errors.push(controlName + " maximum length is " + errors.maxlength.requiredLength + ". You are over by " + (errors.maxlength.actualLength - errors.maxlength.requiredLength - 7) + " characters.");
                console.log('Maximum length error');
            }
            // Handle custom messages.
            console.log('Checking for other errors');
            if (errors.message) {
                _this.errors.push(controlName + " " + errors.message);
                console.log('Unidentified error');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ValidationSummaryComponent.prototype, "form", void 0);
    ValidationSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'validation-summary',
            template: __webpack_require__(/*! ./validation-summary.component.html */ "./src/app/Shared/validation-summary/validation-summary.component.html"),
            styles: [__webpack_require__(/*! ./validation-summary.component.scss */ "./src/app/Shared/validation-summary/validation-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidationSummaryComponent);
    return ValidationSummaryComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h2 class=\"mx-auto\">Admin</h2>\r\n</div>\r\n\r\n<div class=\"container row mx-auto\">\r\n  <form class=\"form-inline w-100 border border-dark pb-2 mb-2 bg-light\" name=\"searchForm\" id=\"searchForm\" (ngSubmit)=\"onSubmit()\" novalidate\r\n        #myForm=\"ngForm\">\r\n\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\"mx-auto bg-light w-100 text-center\">Make/Model</label>\r\n      </div>\r\n\r\n      <div class=\"row px-2\">\r\n        <input type=\"text\" class=\"w-100 form-control\" [(ngModel)]=\"model.searchMakeModel\" name=\"searchMakeModel\" ngModel />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto  px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\"mx-auto bg-light w-100 text-center\">Price</label>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-sm-6\">\r\n\r\n          <select [(ngModel)]=\"model.searchBeginDollar\" name=\"searchBeginDollar\" id=\"tbeginDollar\" (change)=\"filterDollars($event)\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"-1\">From</option>\r\n            <option *ngFor=\"let firstdollar of beginDollars\" [ngValue]=\"firstdollar\">{{firstdollar.amount | currency:'USD':'symbol':'1.0-0'}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-6 col-sm-6\">\r\n\r\n          <select [(ngModel)]=\"model.searchEndDollar\" name=\"searchEndDollar\" id=\"tendDollar\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"10000000\">To</option>\r\n            <option *ngFor=\"let lastdollar of filteredDollars\" [ngValue]=\"lastdollar\">{{lastdollar.amount | currency:'USD':'symbol':'1.0-0'}}</option>\r\n          </select>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto  px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\" mx-auto bg-light w-100 text-center\">Year</label>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-sm-6\">\r\n          <select [(ngModel)]=\"model.searchBeginYear\" name=\"searchBeginYear\" id=\"tbeginYear\" (change)=\"filterYears($event)\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"1900\">From</option>\r\n            <option *ngFor=\"let firstyear of beginYears\" [ngValue]=\"firstyear\">{{firstyear.year}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-6 col-sm-6\">\r\n          <select [(ngModel)]=\"model.searchEndYear\" name=\"searchEndYear\" id=\"tendYear\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"9999\">To</option>\r\n            <option *ngFor=\"let lastyear of filteredYears\" [ngValue]=\"lastyear\">{{lastyear.year}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-4 col-sm-4 mt-2\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Reset</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <!--<pre>{{myForm.value | json}}</pre>-->\r\n</div>\r\n\r\n<div *ngIf=\"vehicles; then haveVehicles; else noVehicles\"> </div>\r\n<ng-template #haveVehicles>\r\n\r\n  <div class=\"container \">\r\n    <nav class=\"row\">\r\n      <pagination-controls id=\"foo\"\r\n                           (pageChange)=\"currentPage = $event\"\r\n                           maxSize=\"9\"\r\n                           directionLinks=\"true\"\r\n                           autoHide=\"true\"\r\n                           previousLabel=\"Previous\"\r\n                           nextLabel=\"Next\"\r\n                           screenReaderPaginationLabel=\"Pagination\"\r\n                           screenReaderPageLabel=\"page\"\r\n                           screenReaderCurrentLabel=\"You're on page\"\r\n                           class=\"bg-light my-auto\">\r\n      </pagination-controls>\r\n    </nav>\r\n\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let feature of vehicles | vehiclefilter: model.searchMakeModel  |\r\n         pricefilter: model.searchBeginDollar:model.searchEndDollar |\r\n         datefilter: model.searchBeginYear:model.searchEndYear |\r\n          paginate: { id: 'foo', itemsPerPage: pageSize, currentPage: currentPage}\"\r\n           class=\"mb-3\">\r\n\r\n        <div id=\"vehicleCard\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 d-sm-flex-inline\">\r\n              <div class=\"card-header\">\r\n                <div hidden>{{feature.vehicleId}}</div>\r\n                <div class=\"card-title pl-3 my-auto\">\r\n                  <div class=\"h3\">{{feature.yearMakeModel}}</div>\r\n                </div>\r\n                <app-progressive-image [width]=\"100\" [height]=\"300\" >\r\n                  <img appProgressiveImage appProgressiveImageFallback  [src]=\"src(feature.viNumber)\" />\r\n                  <div appProgressiveImagePlaceholder class=\"placeholder\">\r\n                    Loading...\r\n                  </div>\r\n                </app-progressive-image>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8 d-sm-flex-inline\">\r\n              <div class=\"card-body w-100 \">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex mt-2 order-1 order-sm-1 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">Body Style</label>\r\n                    <div class=\"col-7 col-sm-7\" id=\"bodyStyle\">{{feature.bodyStyle}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex mt-2 order-3 order-sm-2 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Interior</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"interior\">{{feature.interiorColor}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-2 order-sm-3 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6 \">Transmission</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"tranny\">{{feature.transmissionType}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-4 order-sm-4 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Color</label>\r\n                    <div class=\"col-7 col-sm-8\" id=\"exterior\">{{feature.exteriorColor}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-5 order-sm-5 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">MSRP</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"msrp\">{{feature.msrPrice | currency:'USD':'symbol':'1.0-0'}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-7 order-sm-6 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Mileage</label>\r\n                    <div class=\"col-7 col-sm-8\" id=\"mileage\">{{feature.mileage}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-6 order-sm-7 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">Sale Price</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"salePrice\">{{feature.salesPrice | currency:'USD':'symbol':'1.0-0' }}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-8 w-100 d-inline-flex order-last py-sm-2\">\r\n                    <label class=\"col-5 col-sm-2\">VIN</label>\r\n                    <div class=\"col-7 col-sm-10\" id=\"vin\">{{feature.viNumber}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"card-footer w-100\">\r\n              <div class=\"mx-auto\">\r\n                <div class=\"float-right\">\r\n                  <a [routerLink]=\"['edit',  feature.vehicleID ]\" class=\"btn btn-primary\">Edit</a>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <nav class=\"row\">\r\n      <pagination-controls id=\"foo\"\r\n                           (pageChange)=\"currentPage = $event\"\r\n                           maxSize=\"9\"\r\n                           directionLinks=\"true\"\r\n                           autoHide=\"true\"\r\n                           previousLabel=\"Previous\"\r\n                           nextLabel=\"Next\"\r\n                           screenReaderPaginationLabel=\"Pagination\"\r\n                           screenReaderPageLabel=\"page\"\r\n                           screenReaderCurrentLabel=\"You're on page\"\r\n                           class=\"bg-light \">\r\n      </pagination-controls>\r\n    </nav>\r\n  </div>\r\n</ng-template>\r\n<ng-template #noVehicles>\r\n  <div class=\"row\">\r\n    <h2 class=\"mx-auto\">No vehicles found!</h2>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#vehicleCard {\n  border: 2px solid black;\n  padding: 0;\n  margin: 0;\n  background-color: gainsboro; }\n\n.row {\n  margin: 0; }\n\n.card {\n  background-color: darksalmon;\n  width: 100%;\n  height: 25vh;\n  font-weight: 600;\n  font-size: larger;\n  padding: 0;\n  margin: 0; }\n\n.card .row {\n    margin-left: 0; }\n\n.card .card-body {\n    margin: 0;\n    padding: 0; }\n\n.card .card-body .card .row {\n      margin: 10px 0; }\n\n.card-footer {\n  width: 100%;\n  margin: 0;\n  font-size: larger; }\n\n.img-fluid {\n  width: 100%;\n  height: 30vh;\n  margin: 0;\n  padding: 0; }\n\n.cardImage {\n  height: 30vh;\n  width: 100%; }\n\n.card-header {\n  margin: 0;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/vehicles.service */ "./src/app/Services/vehicles.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/search.service */ "./src/app/Services/search.service.ts");
/* harmony import */ var app_Models_searchfields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/Models/searchfields */ "./src/app/Models/searchfields.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(featService, spinner, setup) {
        this.featService = featService;
        this.spinner = spinner;
        this.setup = setup;
        this.vehicles = [];
        this.model = new app_Models_searchfields__WEBPACK_IMPORTED_MODULE_4__["Searchfields"]();
        this.currentPage = 1;
        this.pageSize = 5; // this.config.pageSize;
    }
    AdminComponent.prototype.src = function (viNumber) {
        return "../../assets/Images/" + viNumber + ".jpg";
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.setup.setup();
        this.spinner.show();
        this.getAvailableVehicles();
        this.beginYears = this.setup.beginYears;
        this.endYears = this.setup.endYears;
        this.beginDollars = this.setup.beginDollars;
        this.endDollars = this.setup.endDollars;
    };
    AdminComponent.prototype.onSubmit = function () {
        this.form.reset();
    };
    AdminComponent.prototype.getAvailableVehicles = function () {
        var _this = this;
        this.featService.getAllVehicles().subscribe(function (data) {
            _this.vehicles = data;
            console.log(_this.vehicles);
            _this.spinner.hide();
        }, function (err) { return console.error(err); }, function () { return console.log('done loading available vehicles'); });
    };
    AdminComponent.prototype.filterDollars = function (event) {
        var _this = this;
        this.firstdollar = this.beginDollars[event.target.selectedIndex - 1];
        this.filteredDollars = this.endDollars.filter(function (d) { return d.amount > _this.firstdollar.amount; });
    };
    AdminComponent.prototype.filterYears = function (event) {
        var _this = this;
        this.firstyear = this.beginYears[event.target.selectedIndex - 1];
        this.filteredYears = this.endYears.filter(function (item) { return item.year > _this.firstyear.year; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myForm'),
        __metadata("design:type", Object)
    ], AdminComponent.prototype, "form", void 0);
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__["VehiclesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Shared_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared/not-found.component */ "./src/app/Shared/not-found.component.ts");
/* harmony import */ var _newvehicles_newvehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newvehicles/newvehicles.component */ "./src/app/newvehicles/newvehicles.component.ts");
/* harmony import */ var _usedvehicles_usedvehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usedvehicles/usedvehicles.component */ "./src/app/usedvehicles/usedvehicles.component.ts");
/* harmony import */ var _specials_specials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specials/specials.component */ "./src/app/specials/specials.component.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vehicle-detail/vehicle-detail.component */ "./src/app/vehicle-detail/vehicle-detail.component.ts");
/* harmony import */ var _vehicle_edit_vehicle_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vehicle-edit/vehicle-edit.component */ "./src/app/vehicle-edit/vehicle-edit.component.ts");
/* harmony import */ var _vehicle_purchase_vehicle_purchase_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vehicle-purchase/vehicle-purchase.component */ "./src/app/vehicle-purchase/vehicle-purchase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'used/detail/:id', component: _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_10__["VehicleDetailComponent"] },
    { path: 'new/detail/:id', component: _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_10__["VehicleDetailComponent"] },
    { path: 'new', component: _newvehicles_newvehicles_component__WEBPACK_IMPORTED_MODULE_3__["NewvehiclesComponent"] },
    { path: 'used', component: _usedvehicles_usedvehicles_component__WEBPACK_IMPORTED_MODULE_4__["UsedvehiclesComponent"] },
    { path: 'specials', component: _specials_specials_component__WEBPACK_IMPORTED_MODULE_5__["SpecialsComponent"] },
    { path: 'contact', component: _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_6__["ContactFormComponent"] },
    { path: 'sales/purchase/:id', component: _vehicle_purchase_vehicle_purchase_component__WEBPACK_IMPORTED_MODULE_12__["VehiclePurchaseComponent"] },
    { path: 'sales', component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_7__["SalesComponent"] },
    { path: 'admin/edit/:id', component: _vehicle_edit_vehicle_edit_component__WEBPACK_IMPORTED_MODULE_11__["VehicleEditComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    // { path: ':id', component: vehicle-detailComponent },
    //{
    //  path: 'heroes',
    //  component: HeroListComponent,
    //  data: { title: 'Heroes List' }
    //},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: _Shared_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! froala-editor/js/froala_editor.pkgd.min.js */ "./node_modules/froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Shared_globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Shared/globals */ "./src/app/Shared/globals.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _Services_specials_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Services/specials.service */ "./src/app/Services/specials.service.ts");
/* harmony import */ var _Services_vehicles_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/vehicles.service */ "./src/app/Services/vehicles.service.ts");
/* harmony import */ var _Services_misc_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Services/misc.service */ "./src/app/Services/misc.service.ts");
/* harmony import */ var _Services_custom_lazy_apikey_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/custom-lazy-apikey-loader.service */ "./src/app/Services/custom-lazy-apikey-loader.service.ts");
/* harmony import */ var app_Services_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/Services/search.service */ "./src/app/Services/search.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _directives_loadingindicator_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/loadingindicator.directive */ "./src/app/directives/loadingindicator.directive.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _featuredvehicles_featuredvehicles_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./featuredvehicles/featuredvehicles.component */ "./src/app/featuredvehicles/featuredvehicles.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _newvehicles_newvehicles_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./newvehicles/newvehicles.component */ "./src/app/newvehicles/newvehicles.component.ts");
/* harmony import */ var _Shared_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Shared/not-found.component */ "./src/app/Shared/not-found.component.ts");
/* harmony import */ var app_sales_sales_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _searchvehicles_searchvehicles_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./searchvehicles/searchvehicles.component */ "./src/app/searchvehicles/searchvehicles.component.ts");
/* harmony import */ var _specials_specials_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./specials/specials.component */ "./src/app/specials/specials.component.ts");
/* harmony import */ var _specials_carousel_specials_carousel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./specials-carousel/specials-carousel.component */ "./src/app/specials-carousel/specials-carousel.component.ts");
/* harmony import */ var _usedvehicles_usedvehicles_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./usedvehicles/usedvehicles.component */ "./src/app/usedvehicles/usedvehicles.component.ts");
/* harmony import */ var _Shared_api_interceptor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Shared/api-interceptor */ "./src/app/Shared/api-interceptor.ts");
/* harmony import */ var _Shared_validation_summary_validation_summary_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Shared/validation-summary/validation-summary.component */ "./src/app/Shared/validation-summary/validation-summary.component.ts");
/* harmony import */ var _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./vehicle-detail/vehicle-detail.component */ "./src/app/vehicle-detail/vehicle-detail.component.ts");
/* harmony import */ var _vehicle_edit_vehicle_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./vehicle-edit/vehicle-edit.component */ "./src/app/vehicle-edit/vehicle-edit.component.ts");
/* harmony import */ var _vehicle_purchase_vehicle_purchase_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./vehicle-purchase/vehicle-purchase.component */ "./src/app/vehicle-purchase/vehicle-purchase.component.ts");
/* harmony import */ var _Pipes_vehiclefilter_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Pipes/vehiclefilter.pipe */ "./src/app/Pipes/vehiclefilter.pipe.ts");
/* harmony import */ var _Pipes_datefilter_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Pipes/datefilter.pipe */ "./src/app/Pipes/datefilter.pipe.ts");
/* harmony import */ var _Pipes_pricefilter_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Pipes/pricefilter.pipe */ "./src/app/Pipes/pricefilter.pipe.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _progressive_image_progressive_image_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./progressive-image/progressive-image.module */ "./src/app/progressive-image/progressive-image.module.ts");
/* harmony import */ var _Pipes_model_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Pipes/model.pipe */ "./src/app/Pipes/model.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import the Froala Editor plugin.



window["$"] = jquery__WEBPACK_IMPORTED_MODULE_7__;
window["jQuery"] = jquery__WEBPACK_IMPORTED_MODULE_7__;



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _main_main_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _specials_carousel_specials_carousel_component__WEBPACK_IMPORTED_MODULE_30__["SpecialsCarouselComponent"],
                _featuredvehicles_featuredvehicles_component__WEBPACK_IMPORTED_MODULE_23__["FeaturedvehiclesComponent"],
                _usedvehicles_usedvehicles_component__WEBPACK_IMPORTED_MODULE_31__["UsedvehiclesComponent"],
                _newvehicles_newvehicles_component__WEBPACK_IMPORTED_MODULE_25__["NewvehiclesComponent"],
                _searchvehicles_searchvehicles_component__WEBPACK_IMPORTED_MODULE_28__["SearchvehiclesComponent"],
                _Shared_not_found_component__WEBPACK_IMPORTED_MODULE_26__["PageNotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _specials_specials_component__WEBPACK_IMPORTED_MODULE_29__["SpecialsComponent"],
                _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_22__["ContactFormComponent"],
                app_sales_sales_component__WEBPACK_IMPORTED_MODULE_27__["SalesComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
                _Shared_validation_summary_validation_summary_component__WEBPACK_IMPORTED_MODULE_33__["ValidationSummaryComponent"],
                _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_34__["VehicleDetailComponent"],
                _directives_loadingindicator_directive__WEBPACK_IMPORTED_MODULE_20__["LoadingindicatorDirective"],
                _vehicle_edit_vehicle_edit_component__WEBPACK_IMPORTED_MODULE_35__["VehicleEditComponent"],
                _vehicle_purchase_vehicle_purchase_component__WEBPACK_IMPORTED_MODULE_36__["VehiclePurchaseComponent"],
                _Pipes_vehiclefilter_pipe__WEBPACK_IMPORTED_MODULE_37__["VehiclefilterPipe"],
                _Pipes_datefilter_pipe__WEBPACK_IMPORTED_MODULE_38__["DatefilterPipe"],
                _Pipes_pricefilter_pipe__WEBPACK_IMPORTED_MODULE_39__["PricefilterPipe"],
                _Pipes_model_pipe__WEBPACK_IMPORTED_MODULE_42__["ModelPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_5__["FroalaViewModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_40__["NgxPaginationModule"],
                _progressive_image_progressive_image_module__WEBPACK_IMPORTED_MODULE_41__["ProgressiveImageModule"]
            ],
            providers: [
                _Services_specials_service__WEBPACK_IMPORTED_MODULE_13__["SpecialsService"],
                _Services_vehicles_service__WEBPACK_IMPORTED_MODULE_14__["VehiclesService"],
                _Services_misc_service__WEBPACK_IMPORTED_MODULE_15__["MiscService"],
                app_Services_search_service__WEBPACK_IMPORTED_MODULE_17__["SearchService"],
                _Shared_globals__WEBPACK_IMPORTED_MODULE_8__["Globals"],
                { provide: _agm_core__WEBPACK_IMPORTED_MODULE_18__["MapsAPILoader"], useClass: _Services_custom_lazy_apikey_loader_service__WEBPACK_IMPORTED_MODULE_16__["CustomLazyMapsAPILoader"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _Shared_api_interceptor__WEBPACK_IMPORTED_MODULE_32__["ApiInterceptor"], multi: true }
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
            ],
            exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactform/contactform.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactform/contactform.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-md-1 col-md-3 h2 my-3\"> Contact Us</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"offset-md-1 col-md-4\">\r\n      <div class=\"row\">\r\n        <agm-map [latitude]=\"lat\"\r\n                 [longitude]=\"lng\"\r\n                 [zoom]=\"zoom\"\r\n                 [disableDefaultUI]=\"false\"\r\n                 [zoomControl]=\"false\"\r\n                 (mapClick)=\"mapClicked($event)\">\r\n          <agm-marker *ngFor=\"let m of markers; let i = index\"\r\n                      (markerClick)=\"clickedMarker(m.label, i)\"\r\n                      [latitude]=\"m.lat\"\r\n                      [longitude]=\"m.lng\"\r\n                      [label]=\"m.label\"\r\n                      [markerDraggable]=\"m.draggable\"\r\n                      (dragEnd)=\"markerDragEnd(m, $event)\">\r\n            <agm-info-window>\r\n              <strong>InfoWindow content</strong>\r\n            </agm-info-window>\r\n\r\n          </agm-marker>\r\n\r\n          <agm-circle [latitude]=\"lat\" [longitude]=\"lng\"\r\n                      [radius]=\"500\"\r\n                      [fillColor]=\"'lightred'\"\r\n                      [circleDraggable]=\"true\"\r\n                      [editable]=\"true\">\r\n          </agm-circle>\r\n        </agm-map>\r\n      </div>\r\n      <div class=\"row\">\r\n        <address>\r\n          252 E. Market Street<br />\r\n          Louisville, KY 40202<br />\r\n          <abbr title=\"Phone\">P:</abbr>\r\n          502.555.1234\r\n        </address>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n\r\n      <form id=\"contactForm\" (ngSubmit)=\"onSubmit()\" #contactForm=\"ngForm\"  class=\"form\">\r\n        \r\n        <div class=\"form-container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label for=\"name\" class=\"required\">Name</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" id=\"name\" name=\"Name\" class=\"form-control\"\r\n                     placeholder=\"Enter your name\"\r\n                     [(ngModel)]=\"model.contactName\" required >\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label for=\"email\" class=\"required\">Email</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" id=\"email\" name=\"Email\" class=\"form-control\"\r\n                     placeholder=\"Enter your email address\"\r\n                     [(ngModel)]=\"model.contactEmail\" required email>\r\n             </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label for=\"phone\" >Phone</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"tel\" id=\"phone\" name=\"Phone\" class=\"w-75 form-control\"\r\n                     placeholder=\"Enter your phone number\"\r\n                     [(ngModel)]=\"model.contactPhone\" required tel >\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label for=\"subject\" class=\"required\">Subject</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"text\" id=\"subject\" name=\"Subject\" class=\"form-control\"\r\n                     placeholder=\"Enter the subject of your message\"\r\n                     [(ngModel)]=\"model.contactSubject\" required minlength=\"10\" maxlength=\"128\">\r\n             </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label for=\"message\" class=\"required\">Message</label>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <textarea id=\"message\" name=\"Message\" [froalaEditor] class=\"form-control\"\r\n                         [(ngModel)]=\"model.contactMessage\" required minlength=\"17\" maxlength=\"1024\"\r\n                        >\r\n              </textarea>\r\n             </div>\r\n          </div>\r\n\r\n          <validation-summary [form]=\"contactForm\"></validation-summary>\r\n         \r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit Form\" [disabled]=\"!contactForm.valid\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n         \r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/contactform/contactform.component.scss":
/*!********************************************************!*\
  !*** ./src/app/contactform/contactform.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  margin: auto;\n  padding: 0 10px;\n  height: 60vh;\n  width: 100%; }\n\n.form-container {\n  display: block;\n  height: 100%;\n  width: 90%;\n  padding: 2em;\n  margin: 0 auto;\n  background: #fff;\n  font-size: large;\n  font-weight: 600; }\n\n.alert {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 2s alertAnim forwards;\n          animation: 2s alertAnim forwards; }\n\n.btn {\n  margin-top: 3rem;\n  margin-bottom: 5rem; }\n\naddress {\n  font-size: x-large;\n  font-weight: 600;\n  margin-left: 20px;\n  margin-top: 10px; }\n\nh1 {\n  margin-bottom: 2rem;\n  font-weight: bold;\n  font-family: 'Muli';\n  font-size: 2em; }\n\nh2 {\n  margin-left: 4vw; }\n\ninput[type='text'] {\n  width: 100%;\n  padding-right: 2px;\n  padding-left: 2px; }\n\ntextarea {\n  width: 100%;\n  height: 20vh; }\n\nbutton {\n  margin-bottom: 5rem; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n"

/***/ }),

/***/ "./src/app/contactform/contactform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactform/contactform.component.ts ***!
  \******************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_Services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/contact.service */ "./src/app/Services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




window["$"] = jquery__WEBPACK_IMPORTED_MODULE_2__;
window["jQuery"] = jquery__WEBPACK_IMPORTED_MODULE_2__;
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(fb, _contactService) {
        this.fb = fb;
        this._contactService = _contactService;
        this.model = {
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            contactSubject: '',
            contactMessage: '',
            contactGenerated: false
        };
        this.submitted = false;
        this.hasError = false;
        // initial center position for the map
        this.lat = 38.2539326;
        this.lng = -85.7485225;
        this.zoom = 15; // google maps zoom level
        this.markers = [
            {
                lat: this.lat,
                lng: this.lng,
                label: 'A',
                draggable: true
            }
        ];
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        //if (!this.contactForm.valid)
        //{
        //  return;
        //}
        this._contactService.saveContact(this.model)
            .subscribe(function (data) {
            console.log("Message posted");
        }, function (error) { return _this.errorMessage = error; });
        this.submitted = true;
    };
    ContactFormComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    ContactFormComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.x,
            lng: $event.y,
            draggable: true
        });
    };
    ContactFormComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    ContactFormComponent.prototype.cancel = function () {
        //this._router.navigate(['/fetch-employee']);
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contactform.component.html */ "./src/app/contactform/contactform.component.html"),
            styles: [__webpack_require__(/*! ./contactform.component.scss */ "./src/app/contactform/contactform.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], app_Services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/directives/loadingindicator.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/loadingindicator.directive.ts ***!
  \**********************************************************/
/*! exports provided: LoadingindicatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingindicatorDirective", function() { return LoadingindicatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingindicatorDirective = /** @class */ (function () {
    function LoadingindicatorDirective() {
        //public isRouteLoading: boolean = false;
        this.routeLoadingIndicator = function ($rootScope) {
            return {
                restrict: 'E',
                template: "<h1 ng-if='isRouteLoading'>Loading...</h1>",
                link: function (scope, elem, attrs) {
                    scope.isRouteLoading = false;
                    $rootScope.$on('$routeChangeStart', function () {
                        scope.isRouteLoading = true;
                        scope.spinner.show();
                    });
                    $rootScope.$on('$routeChangeSuccess', function () {
                        scope.isRouteLoading = false;
                        scope.spinner.hide();
                    });
                }
            };
        };
    }
    LoadingindicatorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[Loadingindicator]'
        }),
        __metadata("design:paramtypes", [])
    ], LoadingindicatorDirective);
    return LoadingindicatorDirective;
}());



/***/ }),

/***/ "./src/app/featuredvehicles/featuredvehicles.component.html":
/*!******************************************************************!*\
  !*** ./src/app/featuredvehicles/featuredvehicles.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"mx-auto h2\">Featured</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"container card-group\" *ngIf=\"featured\">\r\n\r\n    <div *ngFor=\"let feature of featured\" class=\"col-md-4\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header mx-auto\">\r\n          <div class=\"card-title\">{{feature.year}} {{feature.makeName}} {{feature.modelName}}</div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          \r\n          <app-progressive-image [width]=\"100\" [height]=\"300\" >\r\n            <img appProgressiveImage appProgressiveImageFallback  [src]=\"src(feature.viNumber)\" />\r\n            <div appProgressiveImagePlaceholder class=\"placeholder\">\r\n              Loading...\r\n            </div>\r\n          </app-progressive-image>\r\n          \r\n        </div>\r\n        <div class=\"card-footer row\">\r\n          <div class=\"mx-auto\">\r\n            <p>{{feature.salesPrice | currency}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p *ngIf=\"!featured\">\r\n  No featured vehicles found!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/featuredvehicles/featuredvehicles.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/featuredvehicles/featuredvehicles.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: darksalmon;\n  width: 100%;\n  border: 2px solid black;\n  font-weight: 600; }\n  .card .card-body {\n    margin: 0;\n    padding: 10%; }\n  .card .card-body img {\n      width: 100%;\n      height: 20vh;\n      margin: 0;\n      padding: 0; }\n  .card .card-body .img-responsive {\n      width: 100%;\n      height: 30vh;\n      padding: 0; }\n  .card .card-footer {\n    background-color: whitesmoke;\n    width: 100%;\n    margin: 0;\n    font-size: larger; }\n"

/***/ }),

/***/ "./src/app/featuredvehicles/featuredvehicles.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/featuredvehicles/featuredvehicles.component.ts ***!
  \****************************************************************/
/*! exports provided: FeaturedvehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedvehiclesComponent", function() { return FeaturedvehiclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/vehicles.service */ "./src/app/Services/vehicles.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/search.service */ "./src/app/Services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeaturedvehiclesComponent = /** @class */ (function () {
    function FeaturedvehiclesComponent(featService, spinner, setup) {
        this.featService = featService;
        this.spinner = spinner;
        this.setup = setup;
        this.featured = [];
    }
    FeaturedvehiclesComponent.prototype.src = function (viNumber) {
        return "../../assets/Images/" + viNumber + ".jpg";
    };
    FeaturedvehiclesComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.getFeaturedVehicles();
    };
    FeaturedvehiclesComponent.prototype.getFeaturedVehicles = function () {
        var _this = this;
        this.featService.getFeatured().subscribe(function (data) {
            _this.featured = data;
            console.log(_this.featured);
            _this.spinner.hide();
        }, function (err) { return console.error(err); }, function () { return console.log('done loading used vehicles'); });
    };
    FeaturedvehiclesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-featuredvehicles',
            template: __webpack_require__(/*! ./featuredvehicles.component.html */ "./src/app/featuredvehicles/featuredvehicles.component.html"),
            styles: [__webpack_require__(/*! ./featuredvehicles.component.scss */ "./src/app/featuredvehicles/featuredvehicles.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__["VehiclesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], FeaturedvehiclesComponent);
    return FeaturedvehiclesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: "\n<app-specials-carousel></app-specials-carousel>\n<app-featuredvehicles></app-featuredvehicles>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\"\r\n             size=\"large\"\r\n             color=\"#fff\"\r\n             loadingText=\"Loading...\"\r\n             type=\"cog\">\r\n\r\n</ngx-spinner>\r\n\r\n<nav class=\"navbar navbar-light navbar-expand-lg navbar-fixed-top \">\r\n  <div class=\"container\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" (click)=\"navbarCollapsed = true\">\r\n      <span><img width=\"50\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"></span>\r\n      Angular Guild Quest\r\n    </a>\r\n    <div class=\"navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\"\r\n         [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\r\n      <ul class=\"navbar-nav mr-auto nav-pills nav-justified nav-fill\" routerLinkActive=\"active\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" (click)=\"navbarCollapsed = true\">Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/new\" (click)=\"navbarCollapsed = true\">New</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/used\" (click)=\"navbarCollapsed = true\">Used</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/specials\" (click)=\"navbarCollapsed = true\">Specials</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/contact\" (click)=\"navbarCollapsed = true\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/sales\" (click)=\"navbarCollapsed = true\">Sales</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"navbarCollapsed = true\">Admin</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n  <router-outlet [spinner]=\"spinner\"></router-outlet>\r\n  <router-outlet name=\"popup\"></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: lightsteelblue; }\n  nav .nav-link {\n    border: 1px solid black;\n    border-radius: 6px;\n    background-color: lightblue;\n    margin-right: 5px;\n    width: 5rem; }\n  .nav-pills {\n  border-radius: 6px; }\n  li {\n  width: auto;\n  padding: 2px; }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Shared_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Shared/globals */ "./src/app/Shared/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(globals) {
        this.globals = globals;
        this.navbarCollapsed = true;
    }
    //title = 'app';
    //faCoffee = faCoffee;
    //faTwitter = faTwitter;
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")],
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html")
        }),
        __metadata("design:paramtypes", [app_Shared_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/newvehicles/newvehicles.component.html":
/*!********************************************************!*\
  !*** ./src/app/newvehicles/newvehicles.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h2 class=\"mx-auto\">New Vehicles</h2>\r\n</div>\r\n\r\n<div class=\"container row mx-auto\">\r\n  <form class=\"form-inline w-100 border border-dark pb-2 mb-2 bg-light\" name=\"searchForm\" id=\"searchForm\" (ngSubmit)=\"onSubmit()\" novalidate\r\n        #myForm=\"ngForm\">\r\n\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\"mx-auto bg-light w-100 text-center\">Make/Model</label>\r\n      </div>\r\n\r\n      <div class=\"row px-2\">\r\n        <input type=\"text\" class=\"w-100 form-control\" [(ngModel)]=\"model.searchMakeModel\" name=\"searchMakeModel\" ngModel />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto  px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\"mx-auto bg-light w-100 text-center\">Price</label>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-sm-6\">\r\n\r\n          <select [(ngModel)]=\"model.searchBeginDollar\" name=\"searchBeginDollar\" id=\"tbeginDollar\" (change)=\"filterDollars($event)\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"-1\">From</option>\r\n            <option *ngFor=\"let firstdollar of beginDollars\" [ngValue]=\"firstdollar\">{{firstdollar.amount | currency:'USD':'symbol':'1.0-0'}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-6 col-sm-6\">\r\n\r\n          <select [(ngModel)]=\"model.searchEndDollar\" name=\"searchEndDollar\" id=\"tendDollar\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"10000000\">To</option>\r\n            <option *ngFor=\"let lastdollar of filteredDollars\" [ngValue]=\"lastdollar\">{{lastdollar.amount | currency:'USD':'symbol':'1.0-0'}}</option>\r\n          </select>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto  px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\" mx-auto bg-light w-100 text-center\">Year</label>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-sm-6\">\r\n          <select [(ngModel)]=\"model.searchBeginYear\" name=\"searchBeginYear\" id=\"tbeginYear\" (change)=\"filterYears($event)\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"1900\">From</option>\r\n            <option *ngFor=\"let firstyear of beginYears\" [ngValue]=\"firstyear\">{{firstyear.year}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-6 col-sm-6\">\r\n          <select [(ngModel)]=\"model.searchEndYear\" name=\"searchEndYear\" id=\"tendYear\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"9999\">To</option>\r\n            <option *ngFor=\"let lastyear of filteredYears\" [ngValue]=\"lastyear\">{{lastyear.year}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-4 col-sm-4 mt-2\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Reset</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <!--<pre>{{myForm.value | json}}</pre>-->\r\n</div>\r\n\r\n<div *ngIf=\"vehicles; then haveVehicles; else noVehicles\"> </div>\r\n<ng-template #haveVehicles>\r\n\r\n  <div class=\"container \">\r\n    <nav class=\"row\">\r\n      <pagination-controls id=\"foo\"\r\n                           (pageChange)=\"currentPage = $event\"\r\n                           maxSize=\"9\"\r\n                           directionLinks=\"true\"\r\n                           autoHide=\"true\"\r\n                           previousLabel=\"Previous\"\r\n                           nextLabel=\"Next\"\r\n                           screenReaderPaginationLabel=\"Pagination\"\r\n                           screenReaderPageLabel=\"page\"\r\n                           screenReaderCurrentLabel=\"You're on page\"\r\n                           class=\"bg-light my-auto\">\r\n      </pagination-controls>\r\n    </nav>\r\n\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let feature of vehicles | vehiclefilter: model.searchMakeModel  |\r\n         pricefilter: model.searchBeginDollar:model.searchEndDollar |\r\n         datefilter: model.searchBeginYear:model.searchEndYear |\r\n          paginate: { id: 'foo', itemsPerPage: pageSize, currentPage: currentPage}\"\r\n           class=\"mb-3\">\r\n\r\n        <div id=\"vehicleCard\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 d-sm-flex-inline\">\r\n              <div class=\"card-header\">\r\n                <div hidden>{{feature.vehicleId}}</div>\r\n                <div class=\"card-title pl-3 my-auto\">\r\n                  <div class=\"h3\">{{feature.yearMakeModel}}</div>\r\n                </div>\r\n                <app-progressive-image [width]=\"300\" [height]=\"300\">\r\n                  <img appProgressiveImage appProgressiveImageFallback [src]=\"src(feature.viNumber)\" />\r\n                  <div appProgressiveImagePlaceholder class=\"placeholder\">\r\n                    Loading...\r\n                  </div>\r\n                </app-progressive-image>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8 d-sm-flex-inline\">\r\n              <div class=\"card-body w-100 \">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex mt-2 order-1 order-sm-1 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">Body Style</label>\r\n                    <div class=\"col-7 col-sm-7\" id=\"bodyStyle\">{{feature.bodyStyle}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex mt-2 order-3 order-sm-2 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Interior</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"interior\">{{feature.interiorColor}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-2 order-sm-3 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6 \">Transmission</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"tranny\">{{feature.transmissionType}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-4 order-sm-4 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Color</label>\r\n                    <div class=\"col-7 col-sm-8\" id=\"exterior\">{{feature.exteriorColor}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-5 order-sm-5 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">MSRP</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"msrp\">{{feature.msrPrice | currency:'USD':'symbol':'1.0-0'}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-7 order-sm-6 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Mileage</label>\r\n                    <div class=\"col-7 col-sm-8\" id=\"mileage\">{{feature.mileage}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-6 order-sm-7 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">Sale Price</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"salePrice\">{{feature.salesPrice | currency:'USD':'symbol':'1.0-0' }}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-8 w-100 d-inline-flex order-last py-sm-2\">\r\n                    <label class=\"col-5 col-sm-2\">VIN</label>\r\n                    <div class=\"col-7 col-sm-10\" id=\"vin\">{{feature.viNumber}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"card-footer w-100\">\r\n              <div class=\"mx-auto\">\r\n                <div class=\"float-right\">\r\n                  <a [routerLink]=\"['detail',  feature.vehicleID ]\" class=\"btn btn-primary\">Detail</a>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <nav class=\"row\">\r\n      <pagination-controls id=\"foo\"\r\n                           (pageChange)=\"currentPage = $event\"\r\n                           maxSize=\"9\"\r\n                           directionLinks=\"true\"\r\n                           autoHide=\"true\"\r\n                           previousLabel=\"Previous\"\r\n                           nextLabel=\"Next\"\r\n                           screenReaderPaginationLabel=\"Pagination\"\r\n                           screenReaderPageLabel=\"page\"\r\n                           screenReaderCurrentLabel=\"You're on page\"\r\n                           class=\"bg-light \">\r\n      </pagination-controls>\r\n    </nav>\r\n  </div>\r\n</ng-template>\r\n<ng-template #noVehicles>\r\n  <div class=\"row\">\r\n    <h2 class=\"mx-auto\">No new vehicles found!</h2>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/newvehicles/newvehicles.component.scss":
/*!********************************************************!*\
  !*** ./src/app/newvehicles/newvehicles.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#vehicleCard {\n  border: 2px solid black;\n  padding: 0;\n  margin: 0;\n  background-color: gainsboro; }\n\n.row {\n  margin: 0; }\n\n.card {\n  background-color: darksalmon;\n  width: 100%;\n  height: 25vh;\n  font-weight: 600;\n  font-size: larger;\n  padding: 0;\n  margin: 0; }\n\n.card .row {\n    margin-left: 0; }\n\n.card .card-body {\n    margin: 0;\n    padding: 0; }\n\n.card .card-body .card .row {\n      margin: 10px 0; }\n\n.card-footer {\n  width: 100%;\n  margin: 0;\n  font-size: larger; }\n\n.img-fluid {\n  width: 100%;\n  height: 30vh;\n  margin: 0;\n  padding: 0; }\n\n.cardImage {\n  height: 30vh;\n  width: 100%; }\n\n.card-header {\n  margin: 0;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/newvehicles/newvehicles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/newvehicles/newvehicles.component.ts ***!
  \******************************************************/
/*! exports provided: NewvehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewvehiclesComponent", function() { return NewvehiclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/vehicles.service */ "./src/app/Services/vehicles.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/search.service */ "./src/app/Services/search.service.ts");
/* harmony import */ var app_Models_searchfields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/Models/searchfields */ "./src/app/Models/searchfields.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewvehiclesComponent = /** @class */ (function () {
    function NewvehiclesComponent(featService, spinner, setup) {
        this.featService = featService;
        this.spinner = spinner;
        this.setup = setup;
        this.vehicles = [];
        this.model = new app_Models_searchfields__WEBPACK_IMPORTED_MODULE_4__["Searchfields"]();
        this.currentPage = 1;
        this.pageSize = 5; // this.config.pageSize;
    }
    NewvehiclesComponent.prototype.src = function (viNumber) {
        return "../../assets/Images/" + viNumber + ".jpg";
    };
    NewvehiclesComponent.prototype.ngOnInit = function () {
        this.setup.setup();
        this.spinner.show();
        this.getUsedVehicles();
        this.beginYears = this.setup.beginYears;
        this.endYears = this.setup.endYears;
        this.beginDollars = this.setup.beginDollars;
        this.endDollars = this.setup.endDollars;
    };
    NewvehiclesComponent.prototype.onSubmit = function () {
        this.form.reset();
    };
    NewvehiclesComponent.prototype.getUsedVehicles = function () {
        var _this = this;
        this.featService.getNewVehicles().subscribe(function (data) {
            _this.vehicles = data;
            console.log(_this.vehicles);
            _this.spinner.hide();
        }, function (err) { return console.error(err); }, function () { return console.log('done loading new vehicles'); });
    };
    NewvehiclesComponent.prototype.filterDollars = function (event) {
        var _this = this;
        this.firstdollar = this.beginDollars[event.target.selectedIndex - 1];
        this.filteredDollars = this.endDollars.filter(function (d) { return d.amount > _this.firstdollar.amount; });
    };
    NewvehiclesComponent.prototype.filterYears = function (event) {
        var _this = this;
        this.firstyear = this.beginYears[event.target.selectedIndex - 1];
        this.filteredYears = this.endYears.filter(function (item) { return item.year > _this.firstyear.year; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myForm'),
        __metadata("design:type", Object)
    ], NewvehiclesComponent.prototype, "form", void 0);
    NewvehiclesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newvehicles',
            template: __webpack_require__(/*! ./newvehicles.component.html */ "./src/app/newvehicles/newvehicles.component.html"),
            styles: [__webpack_require__(/*! ./newvehicles.component.scss */ "./src/app/newvehicles/newvehicles.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__["VehiclesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], NewvehiclesComponent);
    return NewvehiclesComponent;
}());



/***/ }),

/***/ "./src/app/progressive-image/directives/progressive-image-placeholder.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/progressive-image/directives/progressive-image-placeholder.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProgressiveImagePlaceholderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveImagePlaceholderDirective", function() { return ProgressiveImagePlaceholderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-state.service */ "./src/app/progressive-image/image-state.service.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/app/progressive-image/directives/token.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressiveImagePlaceholderDirective = /** @class */ (function () {
    function ProgressiveImagePlaceholderDirective(imageState) {
        this.imageState = imageState;
        this.display = _token__WEBPACK_IMPORTED_MODULE_2__["Display"].flex;
    }
    ProgressiveImagePlaceholderDirective_1 = ProgressiveImagePlaceholderDirective;
    ProgressiveImagePlaceholderDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.imageState.isLoading$.subscribe(function (isLoading) {
            _this.display = isLoading ? _token__WEBPACK_IMPORTED_MODULE_2__["Display"].flex : _token__WEBPACK_IMPORTED_MODULE_2__["Display"].none;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.display'),
        __metadata("design:type", Object)
    ], ProgressiveImagePlaceholderDirective.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.width.%'),
        __metadata("design:type", Number)
    ], ProgressiveImagePlaceholderDirective.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.height.px'),
        __metadata("design:type", Number)
    ], ProgressiveImagePlaceholderDirective.prototype, "height", void 0);
    ProgressiveImagePlaceholderDirective = ProgressiveImagePlaceholderDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appProgressiveImagePlaceholder]',
            providers: [
                {
                    provide: _token__WEBPACK_IMPORTED_MODULE_2__["Dimensions"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ProgressiveImagePlaceholderDirective_1; })
                }
            ]
        }),
        __metadata("design:paramtypes", [_image_state_service__WEBPACK_IMPORTED_MODULE_1__["ImageStateService"]])
    ], ProgressiveImagePlaceholderDirective);
    return ProgressiveImagePlaceholderDirective;
    var ProgressiveImagePlaceholderDirective_1;
}());



/***/ }),

/***/ "./src/app/progressive-image/directives/progressive-image.directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/progressive-image/directives/progressive-image.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: ProgressiveImageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveImageDirective", function() { return ProgressiveImageDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-state.service */ "./src/app/progressive-image/image-state.service.ts");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "./src/app/progressive-image/directives/token.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressiveImageDirective = /** @class */ (function () {
    function ProgressiveImageDirective(imageState) {
        this.imageState = imageState;
        this.display = _token__WEBPACK_IMPORTED_MODULE_2__["Display"].flex;
    }
    ProgressiveImageDirective_1 = ProgressiveImageDirective;
    Object.defineProperty(ProgressiveImageDirective.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (src) {
            this.imageState.emitLoading();
            this._src = src;
        },
        enumerable: true,
        configurable: true
    });
    ProgressiveImageDirective.prototype.onLoad = function () {
        this.imageState.emitLoaded();
    };
    ProgressiveImageDirective.prototype.onError = function () {
        this.imageState.emitError();
    };
    ProgressiveImageDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.imageState.isLoaded$.subscribe(function (loaded) {
            _this.display = loaded ? _token__WEBPACK_IMPORTED_MODULE_2__["Display"].flex : _token__WEBPACK_IMPORTED_MODULE_2__["Display"].none;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.display'),
        __metadata("design:type", Object)
    ], ProgressiveImageDirective.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.width.%'),
        __metadata("design:type", Number)
    ], ProgressiveImageDirective.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.height.px'),
        __metadata("design:type", Number)
    ], ProgressiveImageDirective.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.src'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ProgressiveImageDirective.prototype, "src", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('load'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProgressiveImageDirective.prototype, "onLoad", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProgressiveImageDirective.prototype, "onError", null);
    ProgressiveImageDirective = ProgressiveImageDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'img[appProgressiveImage]',
            providers: [
                {
                    provide: _token__WEBPACK_IMPORTED_MODULE_2__["Dimensions"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ProgressiveImageDirective_1; })
                }
            ]
        }),
        __metadata("design:paramtypes", [_image_state_service__WEBPACK_IMPORTED_MODULE_1__["ImageStateService"]])
    ], ProgressiveImageDirective);
    return ProgressiveImageDirective;
    var ProgressiveImageDirective_1;
}());



/***/ }),

/***/ "./src/app/progressive-image/directives/token.ts":
/*!*******************************************************!*\
  !*** ./src/app/progressive-image/directives/token.ts ***!
  \*******************************************************/
/*! exports provided: Display, Dimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return Display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return Dimensions; });
var Display;
(function (Display) {
    Display["flex"] = "flex";
    Display["none"] = "none";
})(Display || (Display = {}));
var Dimensions = /** @class */ (function () {
    function Dimensions() {
    }
    return Dimensions;
}());



/***/ }),

/***/ "./src/app/progressive-image/image-state.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/progressive-image/image-state.service.ts ***!
  \**********************************************************/
/*! exports provided: ImageStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStateService", function() { return ImageStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageState;
(function (ImageState) {
    ImageState["loading"] = "loading";
    ImageState["error"] = "error";
    ImageState["loaded"] = "loaded";
})(ImageState || (ImageState = {}));
var ImageStateService = /** @class */ (function () {
    function ImageStateService() {
        this.stateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.state$ = this.stateSource;
        this.isLoading$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (s) { return s === ImageState.loading; }));
        this.isError$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (s) { return s === ImageState.error; }));
        this.isLoaded$ = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (s) { return s === ImageState.loaded; }));
    }
    ImageStateService.prototype.emitLoaded = function () {
        this.stateSource.next(ImageState.loaded);
    };
    ImageStateService.prototype.emitError = function () {
        this.stateSource.next(ImageState.error);
    };
    ImageStateService.prototype.emitLoading = function () {
        this.stateSource.next(ImageState.loading);
    };
    ImageStateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ImageStateService);
    return ImageStateService;
}());



/***/ }),

/***/ "./src/app/progressive-image/progressive-image.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/progressive-image/progressive-image.component.ts ***!
  \******************************************************************/
/*! exports provided: ProgressiveImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveImageComponent", function() { return ProgressiveImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/token */ "./src/app/progressive-image/directives/token.ts");
/* harmony import */ var _image_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-state.service */ "./src/app/progressive-image/image-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressiveImageComponent = /** @class */ (function () {
    function ProgressiveImageComponent() {
    }
    ProgressiveImageComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.dirs.forEach(function (dir) {
            dir.height = _this.height;
            dir.width = _this.width;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_directives_token__WEBPACK_IMPORTED_MODULE_1__["Dimensions"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ProgressiveImageComponent.prototype, "dirs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.height.px'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProgressiveImageComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.width.%'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProgressiveImageComponent.prototype, "width", void 0);
    ProgressiveImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progressive-image',
            template: "\n  <ng-content></ng-content>\n  ",
            styles: [':host { display: block }'],
            providers: [_image_state_service__WEBPACK_IMPORTED_MODULE_2__["ImageStateService"]]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressiveImageComponent);
    return ProgressiveImageComponent;
}());



/***/ }),

/***/ "./src/app/progressive-image/progressive-image.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/progressive-image/progressive-image.module.ts ***!
  \***************************************************************/
/*! exports provided: ProgressiveImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveImageModule", function() { return ProgressiveImageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_progressive_image_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/progressive-image-placeholder.directive */ "./src/app/progressive-image/directives/progressive-image-placeholder.directive.ts");
/* harmony import */ var _directives_progressive_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/progressive-image.directive */ "./src/app/progressive-image/directives/progressive-image.directive.ts");
/* harmony import */ var _progressive_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressive-image.component */ "./src/app/progressive-image/progressive-image.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProgressiveImageModule = /** @class */ (function () {
    function ProgressiveImageModule() {
    }
    ProgressiveImageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            declarations: [
                _progressive_image_component__WEBPACK_IMPORTED_MODULE_4__["ProgressiveImageComponent"],
                _directives_progressive_image_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__["ProgressiveImagePlaceholderDirective"],
                _directives_progressive_image_directive__WEBPACK_IMPORTED_MODULE_3__["ProgressiveImageDirective"]
            ],
            exports: [
                _progressive_image_component__WEBPACK_IMPORTED_MODULE_4__["ProgressiveImageComponent"],
                _directives_progressive_image_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__["ProgressiveImagePlaceholderDirective"],
                _directives_progressive_image_directive__WEBPACK_IMPORTED_MODULE_3__["ProgressiveImageDirective"]
            ]
        })
    ], ProgressiveImageModule);
    return ProgressiveImageModule;
}());



/***/ }),

/***/ "./src/app/sales/sales.component.html":
/*!********************************************!*\
  !*** ./src/app/sales/sales.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h2 class=\"mx-auto\">Sales</h2>\r\n</div>\r\n\r\n<div class=\"container row mx-auto\">\r\n  <form class=\"form-inline w-100 border border-dark pb-2 mb-2 bg-light\" name=\"searchForm\" id=\"searchForm\" (ngSubmit)=\"onSubmit()\" novalidate\r\n        #myForm=\"ngForm\">\r\n\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\"mx-auto bg-light w-100 text-center\">Make/Model</label>\r\n      </div>\r\n\r\n      <div class=\"row px-2\">\r\n        <input type=\"text\" class=\"w-100 form-control\" [(ngModel)]=\"model.searchMakeModel\" name=\"searchMakeModel\" ngModel />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto  px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\"mx-auto bg-light w-100 text-center\">Price</label>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-sm-6\">\r\n\r\n          <select [(ngModel)]=\"model.searchBeginDollar\" name=\"searchBeginDollar\" id=\"tbeginDollar\" (change)=\"filterDollars($event)\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"-1\">From</option>\r\n            <option *ngFor=\"let firstdollar of beginDollars\" [ngValue]=\"firstdollar\">{{firstdollar.amount | currency:'USD':'symbol':'1.0-0'}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-6 col-sm-6\">\r\n\r\n          <select [(ngModel)]=\"model.searchEndDollar\" name=\"searchEndDollar\" id=\"tendDollar\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"10000000\">To</option>\r\n            <option *ngFor=\"let lastdollar of filteredDollars\" [ngValue]=\"lastdollar\">{{lastdollar.amount | currency:'USD':'symbol':'1.0-0'}}</option>\r\n          </select>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto  px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\" mx-auto bg-light w-100 text-center\">Year</label>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-sm-6\">\r\n          <select [(ngModel)]=\"model.searchBeginYear\" name=\"searchBeginYear\" id=\"tbeginYear\" (change)=\"filterYears($event)\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"1900\">From</option>\r\n            <option *ngFor=\"let firstyear of beginYears\" [ngValue]=\"firstyear\">{{firstyear.year}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-6 col-sm-6\">\r\n          <select [(ngModel)]=\"model.searchEndYear\" name=\"searchEndYear\" id=\"tendYear\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"9999\">To</option>\r\n            <option *ngFor=\"let lastyear of filteredYears\" [ngValue]=\"lastyear\">{{lastyear.year}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-4 col-sm-4 mt-2\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Reset</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <!--<pre>{{myForm.value | json}}</pre>-->\r\n</div>\r\n\r\n<div *ngIf=\"vehicles; then haveVehicles; else noVehicles\"> </div>\r\n<ng-template #haveVehicles>\r\n\r\n  <div class=\"container \">\r\n    <nav class=\"row\">\r\n      <pagination-controls id=\"foo\"\r\n                           (pageChange)=\"currentPage = $event\"\r\n                           maxSize=\"9\"\r\n                           directionLinks=\"true\"\r\n                           autoHide=\"true\"\r\n                           previousLabel=\"Previous\"\r\n                           nextLabel=\"Next\"\r\n                           screenReaderPaginationLabel=\"Pagination\"\r\n                           screenReaderPageLabel=\"page\"\r\n                           screenReaderCurrentLabel=\"You're on page\"\r\n                           class=\"bg-light my-auto\">\r\n      </pagination-controls>\r\n    </nav>\r\n\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let feature of vehicles | vehiclefilter: model.searchMakeModel  |\r\n         pricefilter: model.searchBeginDollar:model.searchEndDollar |\r\n         datefilter: model.searchBeginYear:model.searchEndYear |\r\n          paginate: { id: 'foo', itemsPerPage: pageSize, currentPage: currentPage}\"\r\n           class=\"mb-3\">\r\n\r\n        <div id=\"vehicleCard\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 d-sm-flex-inline\">\r\n              <div class=\"card-header\">\r\n                <div hidden>{{feature.vehicleId}}</div>\r\n                <div class=\"card-title pl-3 my-auto\">\r\n                  <div class=\"h3\">{{feature.yearMakeModel}}</div>\r\n                </div>\r\n                <app-progressive-image [width]=\"100\" [height]=\"300\" >\r\n                  <img appProgressiveImage appProgressiveImageFallback  [src]=\"src(feature.viNumber)\" />\r\n                  <div appProgressiveImagePlaceholder class=\"placeholder\">\r\n                    Loading...\r\n                  </div>\r\n                </app-progressive-image>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8 d-sm-flex-inline\">\r\n              <div class=\"card-body w-100 \">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex mt-2 order-1 order-sm-1 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">Body Style</label>\r\n                    <div class=\"col-7 col-sm-7\" id=\"bodyStyle\">{{feature.bodyStyle}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex mt-2 order-3 order-sm-2 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Interior</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"interior\">{{feature.interiorColor}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-2 order-sm-3 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6 \">Transmission</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"tranny\">{{feature.transmissionType}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-4 order-sm-4 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Color</label>\r\n                    <div class=\"col-7 col-sm-8\" id=\"exterior\">{{feature.exteriorColor}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-5 order-sm-5 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">MSRP</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"msrp\">{{feature.msrPrice | currency:'USD':'symbol':'1.0-0'}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-7 order-sm-6 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Mileage</label>\r\n                    <div class=\"col-7 col-sm-8\" id=\"mileage\">{{feature.mileage}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-6 order-sm-7 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">Sale Price</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"salePrice\">{{feature.salesPrice | currency:'USD':'symbol':'1.0-0' }}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-8 w-100 d-inline-flex order-last py-sm-2\">\r\n                    <label class=\"col-5 col-sm-2\">VIN</label>\r\n                    <div class=\"col-7 col-sm-10\" id=\"vin\">{{feature.viNumber}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"card-footer w-100\">\r\n              <div class=\"mx-auto\">\r\n                <div class=\" float-right\">\r\n                  <a [routerLink]=\"['purchase',  feature.vehicleID ]\" class=\"btn btn-primary\">Purchase</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <nav class=\"row\">\r\n      <pagination-controls id=\"foo\"\r\n                           (pageChange)=\"currentPage = $event\"\r\n                           maxSize=\"9\"\r\n                           directionLinks=\"true\"\r\n                           autoHide=\"true\"\r\n                           previousLabel=\"Previous\"\r\n                           nextLabel=\"Next\"\r\n                           screenReaderPaginationLabel=\"Pagination\"\r\n                           screenReaderPageLabel=\"page\"\r\n                           screenReaderCurrentLabel=\"You're on page\"\r\n                           class=\"bg-light \">\r\n      </pagination-controls>\r\n    </nav>\r\n  </div>\r\n</ng-template>\r\n<ng-template #noVehicles>\r\n  <div class=\"row\">\r\n    <h2 class=\"mx-auto\">No vehicles found!</h2>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/sales/sales.component.scss":
/*!********************************************!*\
  !*** ./src/app/sales/sales.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#vehicleCard {\n  border: 2px solid black;\n  padding: 0;\n  margin: 0;\n  background-color: gainsboro; }\n\n.row {\n  margin: 0; }\n\n.card {\n  background-color: darksalmon;\n  width: 100%;\n  height: 25vh;\n  font-weight: 600;\n  font-size: larger;\n  padding: 0;\n  margin: 0; }\n\n.card .row {\n    margin-left: 0; }\n\n.card .card-body {\n    margin: 0;\n    padding: 0; }\n\n.card .card-body .card .row {\n      margin: 10px 0; }\n\n.card-footer {\n  width: 100%;\n  margin: 0;\n  font-size: larger; }\n\n.img-fluid {\n  width: 100%;\n  height: 30vh;\n  margin: 0;\n  padding: 0; }\n\n.cardImage {\n  height: 30vh;\n  width: 100%; }\n\n.card-header {\n  margin: 0;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/sales/sales.component.ts":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/vehicles.service */ "./src/app/Services/vehicles.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/search.service */ "./src/app/Services/search.service.ts");
/* harmony import */ var app_Models_searchfields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/Models/searchfields */ "./src/app/Models/searchfields.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalesComponent = /** @class */ (function () {
    function SalesComponent(featService, spinner, setup) {
        this.featService = featService;
        this.spinner = spinner;
        this.setup = setup;
        this.vehicles = [];
        this.model = new app_Models_searchfields__WEBPACK_IMPORTED_MODULE_4__["Searchfields"]();
        this.currentPage = 1;
        this.pageSize = 5; // this.config.pageSize;
    }
    SalesComponent.prototype.src = function (viNumber) {
        return "../../assets/Images/" + viNumber + ".jpg";
    };
    SalesComponent.prototype.ngOnInit = function () {
        this.setup.setup();
        this.spinner.show();
        this.getAvailableVehicles();
        this.beginYears = this.setup.beginYears;
        this.endYears = this.setup.endYears;
        this.beginDollars = this.setup.beginDollars;
        this.endDollars = this.setup.endDollars;
    };
    SalesComponent.prototype.onSubmit = function () {
        this.form.reset();
    };
    SalesComponent.prototype.getAvailableVehicles = function () {
        var _this = this;
        this.featService.getAllVehicles().subscribe(function (data) {
            _this.vehicles = data;
            console.log(_this.vehicles);
            _this.spinner.hide();
        }, function (err) { return console.error(err); }, function () { return console.log('done loading available vehicles'); });
    };
    SalesComponent.prototype.filterDollars = function (event) {
        var _this = this;
        this.firstdollar = this.beginDollars[event.target.selectedIndex - 1];
        this.filteredDollars = this.endDollars.filter(function (d) { return d.amount > _this.firstdollar.amount; });
    };
    SalesComponent.prototype.filterYears = function (event) {
        var _this = this;
        this.firstyear = this.beginYears[event.target.selectedIndex - 1];
        this.filteredYears = this.endYears.filter(function (item) { return item.year > _this.firstyear.year; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myForm'),
        __metadata("design:type", Object)
    ], SalesComponent.prototype, "form", void 0);
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.scss */ "./src/app/sales/sales.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__["VehiclesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/searchvehicles/searchvehicles.component.html":
/*!**************************************************************!*\
  !*** ./src/app/searchvehicles/searchvehicles.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  searchvehicles works!\n</p>\n"

/***/ }),

/***/ "./src/app/searchvehicles/searchvehicles.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/searchvehicles/searchvehicles.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/searchvehicles/searchvehicles.component.ts":
/*!************************************************************!*\
  !*** ./src/app/searchvehicles/searchvehicles.component.ts ***!
  \************************************************************/
/*! exports provided: SearchvehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchvehiclesComponent", function() { return SearchvehiclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchvehiclesComponent = /** @class */ (function () {
    function SearchvehiclesComponent() {
    }
    SearchvehiclesComponent.prototype.ngOnInit = function () {
    };
    SearchvehiclesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchvehicles',
            template: __webpack_require__(/*! ./searchvehicles.component.html */ "./src/app/searchvehicles/searchvehicles.component.html"),
            styles: [__webpack_require__(/*! ./searchvehicles.component.scss */ "./src/app/searchvehicles/searchvehicles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchvehiclesComponent);
    return SearchvehiclesComponent;
}());



/***/ }),

/***/ "./src/app/specials-carousel/specials-carousel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/specials-carousel/specials-carousel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\"\r\n                 size=\"large\"\r\n                 color=\"#fff\"\r\n                 loadingText=\"Loading Specials...\"\r\n                 type=\"cog\">\r\n\r\n</ngx-spinner>-->\r\n\r\n<div class=\"container\">\r\n  <ngb-carousel *ngIf=\"specials\">\r\n    <ng-container *ngFor=\"let special of specials\">\r\n      <ng-template ngbSlide [id]=\"special.special_ID\">\r\n        <div class=\"card card-outline-black\">\r\n          <div class=\"row\">\r\n            <div class=\"card-title h3 offset-2 col-8\">\r\n              <h3>{{special.special_Title}}</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body h5 mt-2\">\r\n            <p>{{special.special_Description}}</p>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ngb-carousel>\r\n\r\n  <div *ngIf=\"!specials\">\r\n    <div class=\"row\">\r\n      <p class=\"mx-auto h1\">No specials available</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/specials-carousel/specials-carousel.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/specials-carousel/specials-carousel.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item.card.active {\n  border: solid 0.3em;\n  border-color: red;\n  background-color: whitesmoke; }\n\n.carousel-indicators .ol .li::before {\n  color: blue;\n  background-color: green; }\n\n.card {\n  border: solid 2px black;\n  background-color: lightcoral; }\n\n.card .card-body {\n  background-color: whitesmoke; }\n\n.carousel-indicators li {\n  background-color: #999;\n  background-color: rgba(70, 70, 70, 0.25); }\n\n.carousel-indicators .active {\n  background-color: #444; }\n"

/***/ }),

/***/ "./src/app/specials-carousel/specials-carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/specials-carousel/specials-carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: SpecialsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialsCarouselComponent", function() { return SpecialsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var app_Services_specials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/Services/specials.service */ "./src/app/Services/specials.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecialsCarouselComponent = /** @class */ (function () {
    function SpecialsCarouselComponent(config, specService) {
        // customize default values of carousels used by this component tree
        this.specService = specService;
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    SpecialsCarouselComponent.prototype.ngOnInit = function () {
        this.getSpecials();
    };
    SpecialsCarouselComponent.prototype.getSpecials = function () {
        var _this = this;
        this.specService.getSpecials().subscribe(function (data) { _this.specials = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading specials'); });
    };
    SpecialsCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specials-carousel',
            template: __webpack_require__(/*! ./specials-carousel.component.html */ "./src/app/specials-carousel/specials-carousel.component.html"),
            styles: [__webpack_require__(/*! ./specials-carousel.component.scss */ "./src/app/specials-carousel/specials-carousel.component.scss")],
            styles: ["\n    /deep/ .carousel-item.active {\n      border: solid .8em;\n      border-color: purple;\n      background-color: lightblue;\n    },\n    /deep/ .carousel-indicators li {\n      color: blue;\n      background-color: green;\n}\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"], app_Services_specials_service__WEBPACK_IMPORTED_MODULE_2__["SpecialsService"]])
    ], SpecialsCarouselComponent);
    return SpecialsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/specials/specials.component.html":
/*!**************************************************!*\
  !*** ./src/app/specials/specials.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"mx-auto h2\">Specials</div>\r\n</div>\r\n<div *ngIf=\"specials; then haveSpecials; else noSpecials\"> </div>\r\n<ng-template #haveSpecials>\r\n    <div class=\"container card-group\" *ngIf=\"specials\">\r\n      <nav class=\"row mb-2\">\r\n        <pagination-controls id=\"foo\"\r\n                             (pageChange)=\"currentPage = $event\"\r\n                             maxSize=\"9\"\r\n                             directionLinks=\"true\"\r\n                             autoHide=\"true\"\r\n                             previousLabel=\"Previous\"\r\n                             nextLabel=\"Next\"\r\n                             screenReaderPaginationLabel=\"Pagination\"\r\n                             screenReaderPageLabel=\"page\"\r\n                             screenReaderCurrentLabel=\"You're on page\"\r\n                             class=\"bg-light  my-2\">\r\n        </pagination-controls>\r\n      </nav>\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let special of specials | paginate: { id: 'foo', itemsPerPage: 4, currentPage: currentPage}\">\r\n          <div class=\"card mb-3 w-100 border-dark\">\r\n            <div class=\"card-header mx-auto\">\r\n              <div class=\"card-title h3\">{{special.special_Title}}</div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              {{special.special_Description}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <nav class=\"row\">\r\n        <pagination-controls id=\"foo\"\r\n                             (pageChange)=\"currentPage = $event\"\r\n                             maxSize=\"9\"\r\n                             directionLinks=\"true\"\r\n                             autoHide=\"true\"\r\n                             previousLabel=\"Previous\"\r\n                             nextLabel=\"Next\"\r\n                             screenReaderPaginationLabel=\"Pagination\"\r\n                             screenReaderPageLabel=\"page\"\r\n                             screenReaderCurrentLabel=\"You're on page\"\r\n                             class=\"bg-light \">\r\n        </pagination-controls>\r\n      </nav>\r\n    </div>\r\n</ng-template>\r\n<ng-template #noSpecials>\r\n  <div class=\"row\">\r\n    <h2 class=\"mx-auto\">No specials found!</h2>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/specials/specials.component.scss":
/*!**************************************************!*\
  !*** ./src/app/specials/specials.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pagination-controls /deep/ .ngx-pagination {\n  margin-top: 15px; }\n  pagination-controls /deep/ .ngx-pagination li {\n    background: aqua !important;\n    font-size: large !important; }\n  pagination-controls /deep/ .ngx-pagination li .current {\n      background: red !important;\n      font-size: x-large !important; }\n"

/***/ }),

/***/ "./src/app/specials/specials.component.ts":
/*!************************************************!*\
  !*** ./src/app/specials/specials.component.ts ***!
  \************************************************/
/*! exports provided: SpecialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialsComponent", function() { return SpecialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_specials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/specials.service */ "./src/app/Services/specials.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecialsComponent = /** @class */ (function () {
    function SpecialsComponent(specService, spinner) {
        this.specService = specService;
        this.spinner = spinner;
        this.currentPage = 1;
        this.pageSize = 5;
    }
    SpecialsComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.getSpecials();
    };
    SpecialsComponent.prototype.getSpecials = function () {
        var _this = this;
        this.specService.getSpecials().subscribe(function (data) {
            _this.specials = data;
            _this.spinner.hide();
        }, function (err) { return console.error(err); }, function () { return console.log('done loading specials'); });
    };
    SpecialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specials',
            template: __webpack_require__(/*! ./specials.component.html */ "./src/app/specials/specials.component.html"),
            styles: [__webpack_require__(/*! ./specials.component.scss */ "./src/app/specials/specials.component.scss")]
        }),
        __metadata("design:paramtypes", [app_Services_specials_service__WEBPACK_IMPORTED_MODULE_1__["SpecialsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], SpecialsComponent);
    return SpecialsComponent;
}());



/***/ }),

/***/ "./src/app/usedvehicles/usedvehicles.component.html":
/*!**********************************************************!*\
  !*** ./src/app/usedvehicles/usedvehicles.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h2 class=\"mx-auto\">Used Vehicles</h2>\r\n</div>\r\n\r\n<div class=\"container row mx-auto\">\r\n  <form class=\"form-inline w-100 border border-dark pb-2 mb-2 bg-light\" name=\"searchForm\" id=\"searchForm\" (ngSubmit)=\"onSubmit()\" novalidate\r\n        #myForm=\"ngForm\">\r\n\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\"mx-auto bg-light w-100 text-center\">Make/Model</label>\r\n      </div>\r\n\r\n      <div class=\"row px-2\">\r\n        <input type=\"text\" class=\"w-100 form-control\" [(ngModel)]=\"model.searchMakeModel\" name=\"searchMakeModel\" ngModel />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto  px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\"mx-auto bg-light w-100 text-center\">Price</label>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-sm-6\">\r\n\r\n          <select [(ngModel)]=\"model.searchBeginDollar\" name=\"searchBeginDollar\" id=\"tbeginDollar\" (change)=\"filterDollars($event)\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"-1\">From</option>\r\n            <option *ngFor=\"let firstdollar of beginDollars\" [ngValue]=\"firstdollar\">{{firstdollar.amount | currency:'USD':'symbol':'1.0-0'}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-6 col-sm-6\">\r\n\r\n          <select [(ngModel)]=\"model.searchEndDollar\" name=\"searchEndDollar\" id=\"tendDollar\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"10000000\">To</option>\r\n            <option *ngFor=\"let lastdollar of filteredDollars\" [ngValue]=\"lastdollar\">{{lastdollar.amount | currency:'USD':'symbol':'1.0-0'}}</option>\r\n          </select>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-11 col-sm-4 mb-2 border border-dark mx-auto  px-0 pb-2 bg-transparent\">\r\n      <div class=\"row\">\r\n        <label class=\" mx-auto bg-light w-100 text-center\">Year</label>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-sm-6\">\r\n          <select [(ngModel)]=\"model.searchBeginYear\" name=\"searchBeginYear\" id=\"tbeginYear\" (change)=\"filterYears($event)\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"1900\">From</option>\r\n            <option *ngFor=\"let firstyear of beginYears\" [ngValue]=\"firstyear\">{{firstyear.year}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-6 col-sm-6\">\r\n          <select [(ngModel)]=\"model.searchEndYear\" name=\"searchEndYear\" id=\"tendYear\" class=\"form-control mx-auto w-100\" ngModel>\r\n            <option [ngValue]=\"9999\">To</option>\r\n            <option *ngFor=\"let lastyear of filteredYears\" [ngValue]=\"lastyear\">{{lastyear.year}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-4 col-sm-4 mt-2\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Reset</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <!--<pre>{{myForm.value | json}}</pre>-->\r\n</div>\r\n\r\n<div *ngIf=\"vehicles; then haveVehicles; else noVehicles\"> </div>\r\n<ng-template #haveVehicles>\r\n\r\n  <div class=\"container \">\r\n    <nav class=\"row\">\r\n      <pagination-controls id=\"foo\"\r\n                           (pageChange)=\"currentPage = $event\"\r\n                           maxSize=\"9\"\r\n                           directionLinks=\"true\"\r\n                           autoHide=\"true\"\r\n                           previousLabel=\"Previous\"\r\n                           nextLabel=\"Next\"\r\n                           screenReaderPaginationLabel=\"Pagination\"\r\n                           screenReaderPageLabel=\"page\"\r\n                           screenReaderCurrentLabel=\"You're on page\"\r\n                           class=\"bg-light my-auto\">\r\n      </pagination-controls>\r\n    </nav>\r\n     \r\n    <div class=\"row\">\r\n      <div *ngFor=\"let feature of vehicles | vehiclefilter: model.searchMakeModel  |\r\n         pricefilter: model.searchBeginDollar:model.searchEndDollar |\r\n         datefilter: model.searchBeginYear:model.searchEndYear |\r\n          paginate: { id: 'foo', itemsPerPage: pageSize, currentPage: currentPage}\"\r\n           class=\"mb-3\">\r\n\r\n        <div id=\"vehicleCard\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4 d-sm-flex-inline\">\r\n              <div class=\"card-header\">\r\n                <div hidden>{{feature.vehicleId}}</div>\r\n                <div class=\"card-title pl-3 my-auto\">\r\n                  <div class=\"h3\">{{feature.yearMakeModel}}</div>\r\n                </div>\r\n                \r\n                <app-progressive-image [width]=\"100\" [height]=\"300\" >\r\n                  <img appProgressiveImage appProgressiveImageFallback  [src]=\"src(feature.viNumber)\" class=\"img-fluid\" />\r\n                  <div appProgressiveImagePlaceholder class=\"placeholder\">\r\n                    Loading...\r\n                  </div>\r\n                </app-progressive-image>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8 d-sm-flex-inline\">\r\n              <div class=\"card-body w-100 \">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex mt-2 order-1 order-sm-1 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">Body Style</label>\r\n                    <div class=\"col-7 col-sm-7\" id=\"bodyStyle\">{{feature.bodyStyle}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex mt-2 order-3 order-sm-2 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Interior</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"interior\">{{feature.interiorColor}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-2 order-sm-3 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6 \">Transmission</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"tranny\">{{feature.transmissionType}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-4 order-sm-4 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Color</label>\r\n                    <div class=\"col-7 col-sm-8\" id=\"exterior\">{{feature.exteriorColor}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-5 order-sm-5 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">MSRP</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"msrp\">{{feature.msrPrice | currency:'USD':'symbol':'1.0-0'}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-7 order-sm-6 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-4\">Mileage</label>\r\n                    <div class=\"col-7 col-sm-8\" id=\"mileage\">{{feature.mileage}}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 w-100 d-inline-flex order-6 order-sm-7 py-sm-2\">\r\n                    <label class=\"col-5 col-sm-6\">Sale Price</label>\r\n                    <div class=\"col-7 col-sm-6\" id=\"salePrice\">{{feature.salesPrice | currency:'USD':'symbol':'1.0-0' }}</div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-8 w-100 d-inline-flex order-last py-sm-2\">\r\n                    <label class=\"col-5 col-sm-2\">VIN</label>\r\n                    <div class=\"col-7 col-sm-10\" id=\"vin\">{{feature.viNumber}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"card-footer w-100\">\r\n              <div class=\"mx-auto\">\r\n                <div class=\"float-right\">\r\n                  <a [routerLink]=\"['detail',  feature.vehicleID ]\" class=\"btn btn-primary\">Detail</a>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <nav class=\"row\">\r\n      <pagination-controls id=\"foo\"\r\n                           (pageChange)=\"currentPage = $event\"\r\n                           maxSize=\"9\"\r\n                           directionLinks=\"true\"\r\n                           autoHide=\"true\"\r\n                           previousLabel=\"Previous\"\r\n                           nextLabel=\"Next\"\r\n                           screenReaderPaginationLabel=\"Pagination\"\r\n                           screenReaderPageLabel=\"page\"\r\n                           screenReaderCurrentLabel=\"You're on page\"\r\n                           class=\"bg-light \">\r\n      </pagination-controls>\r\n    </nav>\r\n  </div>\r\n</ng-template>\r\n<ng-template #noVehicles>\r\n  <div class=\"row\">\r\n    <h2 class=\"mx-auto\">No used vehicles found!</h2>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/usedvehicles/usedvehicles.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/usedvehicles/usedvehicles.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#vehicleCard {\n  border: 2px solid black;\n  padding: 0;\n  margin: 0;\n  background-color: gainsboro;\n  height: auto; }\n  #vehicleCard .card-header {\n    margin: 0;\n    padding: 0; }\n  #vehicleCard .img-fluid {\n    width: 100%;\n    height: 30vh;\n    margin: 0;\n    padding: 0; }\n  #vehicleCard .card-body {\n    margin: 0;\n    padding: 0; }\n  @media (min-width: 768px) {\n    #vehicleCard {\n      /*1rem = 16px*/ }\n      #vehicleCard .card-body {\n        font-size: .95rem; } }\n  @media (min-width: 1000px) {\n    #vehicleCard {\n      /*1rem = 16px*/ }\n      #vehicleCard .card-body {\n        font-size: 1.25rem; } }\n  .row {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/usedvehicles/usedvehicles.component.ts":
/*!********************************************************!*\
  !*** ./src/app/usedvehicles/usedvehicles.component.ts ***!
  \********************************************************/
/*! exports provided: UsedvehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsedvehiclesComponent", function() { return UsedvehiclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/vehicles.service */ "./src/app/Services/vehicles.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Services/search.service */ "./src/app/Services/search.service.ts");
/* harmony import */ var app_Models_searchfields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/Models/searchfields */ "./src/app/Models/searchfields.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsedvehiclesComponent = /** @class */ (function () {
    function UsedvehiclesComponent(featService, spinner, setup) {
        this.featService = featService;
        this.spinner = spinner;
        this.setup = setup;
        this.vehicles = [];
        this.model = new app_Models_searchfields__WEBPACK_IMPORTED_MODULE_4__["Searchfields"]();
        this.currentPage = 1;
        this.pageSize = 5; // this.config.pageSize;
    }
    UsedvehiclesComponent.prototype.ngOnInit = function () {
        this.setup.setup();
        this.spinner.show();
        this.getUsedVehicles();
        this.beginYears = this.setup.beginYears;
        this.endYears = this.setup.endYears;
        this.beginDollars = this.setup.beginDollars;
        this.endDollars = this.setup.endDollars;
    };
    UsedvehiclesComponent.prototype.onSubmit = function () {
        this.form.reset();
    };
    UsedvehiclesComponent.prototype.src = function (viNumber) {
        return "../../assets/Images/" + viNumber + ".jpg";
    };
    UsedvehiclesComponent.prototype.getUsedVehicles = function () {
        var _this = this;
        this.featService.getUsedVehicles().subscribe(function (data) {
            _this.vehicles = data;
            console.log(_this.vehicles);
            _this.spinner.hide();
        }, function (err) { return console.error(err); }, function () { return console.log('done loading used vehicles'); });
    };
    UsedvehiclesComponent.prototype.filterDollars = function (event) {
        var _this = this;
        this.firstdollar = this.beginDollars[event.target.selectedIndex - 1];
        this.filteredDollars = this.endDollars.filter(function (d) { return d.amount > _this.firstdollar.amount; });
    };
    UsedvehiclesComponent.prototype.filterYears = function (event) {
        var _this = this;
        this.firstyear = this.beginYears[event.target.selectedIndex - 1];
        this.filteredYears = this.endYears.filter(function (item) { return item.year > _this.firstyear.year; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myForm'),
        __metadata("design:type", Object)
    ], UsedvehiclesComponent.prototype, "form", void 0);
    UsedvehiclesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usedvehicles',
            template: __webpack_require__(/*! ./usedvehicles.component.html */ "./src/app/usedvehicles/usedvehicles.component.html"),
            styles: [__webpack_require__(/*! ./usedvehicles.component.scss */ "./src/app/usedvehicles/usedvehicles.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__["VehiclesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            app_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], UsedvehiclesComponent);
    return UsedvehiclesComponent;
}());



/***/ }),

/***/ "./src/app/vehicle-detail/vehicle-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/vehicle-detail/vehicle-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div id=\"vehicleCard\" class=\"card\" *ngIf=\"feature\">\r\n\r\n\r\n    <div class=\"card-header mx-0 w-100\">\r\n      <div class=\"row w-100\">\r\n        <div hidden>{{feature.vehicleID}}</div>\r\n        <div class=\"card-title\">\r\n          <div class=\"h4\">{{feature.year}} {{feature.makeName}} {{feature.modelName}}</div>\r\n        </div>\r\n\r\n        <div class=\"row mx-0 px-0 w-100\">\r\n          <div class=\"col-md-4 mx-0 px-0\">\r\n            <app-progressive-image [width]=\"100\" [height]=\"300\">\r\n              <img appProgressiveImage appProgressiveImageFallback [src]=\"src(feature.viNumber)\" class=\"img-fluid\" />\r\n              <div appProgressiveImagePlaceholder class=\"placeholder\">\r\n                Loading...\r\n              </div>\r\n            </app-progressive-image>\r\n          </div>\r\n          <div class=\"col-md-8 h-100\">\r\n            <div class=\"card-subtitle bg-warning mx-0\">{{feature.description}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body mx-0 w-100\">\r\n      <div class=\"row w-100\">\r\n        <div class=\"col-12 col-md-6 order-1\">\r\n          <div class=\"row\">\r\n            <label class=\"col-4\" for=\"bodyStyle\">Body Style</label>\r\n            <div class=\"col-8\" id=\"bodyStyle\">{{feature.bodyStyle}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 order-4\">\r\n          <div class=\"row\">\r\n            <label class=\"col-4\" for=\"interior\">Interior</label>\r\n            <div class=\"col-8\" id=\"interior\">{{feature.interiorColor}}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-6 order-2\">\r\n          <div class=\"row\">\r\n            <label class=\"col-4\" for=\"tranny\">Transmission</label>\r\n            <div class=\"col-8\" id=\"tranny\">{{feature.transmissionType}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 order-3\">\r\n          <div class=\"row\">\r\n            <label class=\"col-4\" for=\"exterior\">Color</label>\r\n            <div class=\"col-8\" id=\"exterior\">{{feature.exteriorColor}}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-6  order-5\">\r\n          <div class=\"row\">\r\n            <label class=\"col-4\" for=\"msrp\">MSRP</label>\r\n            <div class=\"col-8\" id=\"msrp\">{{feature.msrPrice | currency}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6  order-7\">\r\n          <div class=\"row\">\r\n            <label class=\"col-4\" for=\"mileage\">Mileage</label>\r\n            <div class=\"col-8\" id=\"mileage\">{{feature.mileage}}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-6  order-6\">\r\n          <div class=\"row\">\r\n            <label class=\"col-4\" for=\"salePrice\">Sale Price</label>\r\n            <div class=\"col-8\" id=\"salePrice\">{{feature.salesPrice | currency }}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-6  order-last\">\r\n          <div class=\"row\">\r\n            <label class=\"col-4\" for=\"vin\">VIN</label>\r\n            <div class=\"col-8\" id=\"vin\">{{feature.viNumber}}</div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row w-100\">\r\n      <div class=\"card-footer mx-0 w-100\">\r\n        <div class=\"row\">\r\n          <div class=\"col float-right\">\r\n            <button type=\"button\" (click)=\"this.goBack()\" class=\"btn btn-primary float-right\">Return</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/vehicle-detail/vehicle-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/vehicle-detail/vehicle-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-responsive {\n  width: 100%;\n  height: 30vh;\n  margin: 0;\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/vehicle-detail/vehicle-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/vehicle-detail/vehicle-detail.component.ts ***!
  \************************************************************/
/*! exports provided: VehicleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailComponent", function() { return VehicleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Services/vehicles.service */ "./src/app/Services/vehicles.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleDetailComponent = /** @class */ (function () {
    function VehicleDetailComponent(route, location, featService, spinner) {
        this.route = route;
        this.location = location;
        this.featService = featService;
        this.spinner = spinner;
        this.spinner.show();
        this.getVehicle();
    }
    VehicleDetailComponent.prototype.src = function (viNumber) {
        return "../../assets/Images/" + viNumber + ".jpg";
    };
    VehicleDetailComponent.prototype.ngOnInit = function () {
    };
    VehicleDetailComponent.prototype.ngOnDestroy = function () {
    };
    VehicleDetailComponent.prototype.onClick = function () {
        this.goBack();
    };
    VehicleDetailComponent.prototype.getVehicle = function () {
        var _this = this;
        console.log(this.route);
        this.route.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
            _this.id = params.get('id');
        });
        // const id = this.route.snapshot.paramMap.get('id');
        console.log("looking for vehicle " + this.id);
        this.featService.getVehicle(this.id).subscribe(function (data) {
            console.log('Returned data');
            console.log(data);
            _this.feature = data[0];
            _this.spinner.hide();
        }, function (err) { return console.error(err); }, function () { return console.log('done getting vehicle info'); });
    };
    VehicleDetailComponent.prototype.goBack = function () {
        console.log(this.location);
        this.location.back();
    };
    VehicleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicledetail',
            template: __webpack_require__(/*! ./vehicle-detail.component.html */ "./src/app/vehicle-detail/vehicle-detail.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-detail.component.scss */ "./src/app/vehicle-detail/vehicle-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_1__["VehiclesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], VehicleDetailComponent);
    return VehicleDetailComponent;
}());



/***/ }),

/***/ "./src/app/vehicle-edit/vehicle-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vehicle-edit/vehicle-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body-content\" style=\"margin-top: 45px;\">\r\n\r\n\r\n\r\n  <h2>Edit Vehicle</h2>\r\n\r\n  <form class=\"form-horizontal\" id=\"myForm\" name=\"myForm\" *ngIf=\"vehicle\">\r\n    <div class=\"form-inline align-content-md-end\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label text-right ml-auto\" for=\"MakeId\">Make</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <select [(ngModel)]=\"vehicle.makeID\" name=\"makeId\" id=\"tmake\" class=\"form-control mx-auto w-100\" ngModel>\r\n              <option *ngFor=\"let make of makes\" [ngValue]=\"make.makeID\">{{make.make_Name}}</option>\r\n            </select>\r\n\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"MakeId\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"ModelId\">Model</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <select [(ngModel)]=\"vehicle.makeModelID\" name=\"modelId\" id=\"tmodel\" class=\"form-control mx-auto w-100\" ngModel>\r\n              <option *ngFor=\"let model of makemodels | modelfilter: vehicle.makeID\" [ngValue]=\"model.makeModelID\">{{model.modelName}}</option>\r\n            </select>\r\n\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"ModelId\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-inline\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"Year\">Year</label>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <select [(ngModel)]=\"vehicle.year\" name=\"year\" id=\"tyear\" class=\"form-control mx-auto w-100\" ngModel>\r\n              <option *ngFor=\"let yr of years\" [ngValue]=\"yr.id\">{{yr.year}}</option>\r\n            </select>\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"Year\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4 text-right\">\r\n            <label class=\"form-control-label\" for=\"viNumber\">VIN</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <input [(ngModel)]=\"vehicle.viNumber\" class=\"form-control text-box single-line\" id=\"viNumber\" name=\"viNumber\" type=\"text\" ngModel />\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"viNumber\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-inline\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"tbodystyle\">Body Style</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <select [(ngModel)]=\"vehicle.bodyStyleID\" name=\"bodyStyleId\" id=\"tbodystyle\" class=\"form-control mx-auto w-100\" ngModel>\r\n              <option *ngFor=\"let body of bodystyles\" [ngValue]=\"body.bodyStyleID\">{{body.bodyStyle1}}</option>\r\n            </select>\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"BodyStyleID\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"ttran\">Transmission Type</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <select [(ngModel)]=\"vehicle.transmissionTypeID\" name=\"transmissionTypeId\" id=\"ttran\" class=\"form-control mx-auto w-100\" ngModel>\r\n              <option *ngFor=\"let tran of transmissions\" [ngValue]=\"tran.transmissionTypeID\">{{tran.transmissionType1}}</option>\r\n            </select>\r\n\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"TransmissionTypeID\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-inline\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"ecolor\">Exterior Color</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <select [(ngModel)]=\"vehicle.exteriorColorID\" name=\"exteriorColorId\" id=\"ecolor\" class=\"form-control mx-auto w-100\" ngModel>\r\n              <option *ngFor=\"let ecol of exteriorcolors\" [ngValue]=\"ecol.exteriorColorID\">{{ecol.exteriorColor1}}</option>\r\n            </select>\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"ExteriorColorID\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"SalesPrice\">Sale Price</label>\r\n\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <input [(ngModel)]=\"vehicle.salesPrice\" class=\"form-control text-right pr-1 text-box single-line\" id=\"SalesPrice\" name=\"SalesPrice\" type=\"text\" value=\"$14,324\" ngModel />\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"SalesPrice\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-inline\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"icolor\">Interior Color</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <select [(ngModel)]=\"vehicle.interiorColorID\" name=\"interiorColorId\" id=\"icolor\" class=\"form-control mx-auto w-100\" ngModel>\r\n              <option *ngFor=\"let icol of interiorcolors\" [ngValue]=\"icol.interiorColorID\">{{icol.interiorColor1}}</option>\r\n            </select>\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"InteriorColorID\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"MSRPrice\">MSRP</label>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <input [(ngModel)]=\"vehicle.msrPrice\" class=\"form-control text-right pr-1 text-box single-line\" id=\"MSRPrice\" name=\"MSRPrice\" type=\"text\" value=\"$18,550\" ngModel />\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"MSRPrice\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-inline\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"Sold\">Sold?</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <input [(ngModel)]=\"vehicle.sold\" class=\"squaredTwo\" data-val=\"true\" data-val-required=\"The Sold field is required.\" id=\"Sold\" name=\"Sold\" type=\"checkbox\" value=\"true\" /><input name=\"Sold\" type=\"hidden\" value=\"false\" ngModel />\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"Sold\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"Mileage\">Mileage</label>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <input [(ngModel)]=\"vehicle.mileage\" class=\"form-control text-right pr-1 text-box single-line\" id=\"Mileage\" name=\"Mileage\" type=\"text\" value=\"125000\" ngModel />\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"Mileage\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-inline\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <label class=\"form-control-label\" for=\"feat\">Feature this vehicle?</label>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <input [(ngModel)]=\"vehicle.featured\" class=\"squaredTwo\" data-val=\"true\" id=\"Feat\" name=\"Featured\" type=\"checkbox\" ngModel />\r\n          </div>\r\n          <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"Sold\" data-valmsg-replace=\"true\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"form-inline w-100\">\r\n      <div class=\"row w-100\">\r\n        <div class=\"col-5\" id=\"origImage\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <app-progressive-image [width]=\"100\" [height]=\"300\">\r\n                <img appProgressiveImage appProgressiveImageFallback [src]=\"src(vehicle.viNumber)\" />\r\n                <div appProgressiveImagePlaceholder class=\"placeholder\">\r\n                  Loading...\r\n                </div>\r\n              </app-progressive-image>\r\n            </div>\r\n          </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <button class=\"btn btn-lg btn-secondary   w-100\" (click)=\"open(content)\">\r\n                    Replace image\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"offset-1 col-5\">\r\n              <div class=\"row\">\r\n\r\n                <label class=\"form-control-label float-left\" for=\"Description\" id=\"labelDescription\">Description</label>\r\n              </div>\r\n              <div class=\"row\">\r\n\r\n                <textarea [(ngModel)]=\"vehicle.description\" cols=\"80\" htmlAttributes=\"{ class = form-control mx-auto }\" id=\"Description\" name=\"Description\" rows=\"10\" ngModel>\r\n</textarea>\r\n                <span class=\"field-validation-valid text-danger\" data-valmsg-for=\"Description\" data-valmsg-replace=\"true\"></span>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n    <hr />\r\n    \r\n     \r\n    \r\n   \r\n\r\n    <div class=\"row justify-content-start\">\r\n      <a class=\"btn btn-danger hm-blue-light red \" href=\"/Admin/DeleteVehicle/1\">Delete</a>\r\n      <a class=\"btn btn-primary hm-green-light  \" href=\"/Admin/EditVehicle/1\">Save</a>\r\n    </div>\r\n  </form>\r\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Replace image</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"form-group col\">\r\n        <div class=\"col-md-12\">\r\n          \r\n          <app-progressive-image [width]=\"100\" [height]=\"300\">\r\n            <img appProgressiveImage appProgressiveImageFallback [src]=\"url\" />\r\n            <div appProgressiveImagePlaceholder class=\"placeholder\">\r\n              Loading...\r\n            </div>\r\n          </app-progressive-image>\r\n          <input type='file' id=\"fileupload\" class=\"btn btn-lg w-100\" accept=\"image/*\" (change)=\"onSelectFile($event)\">\r\n       </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" id=\"saveButton\">Save changes</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!--<pre>{{myForm.value | json}}</pre>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/vehicle-edit/vehicle-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/vehicle-edit/vehicle-edit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n  width: 2.5rem;\n  min-width: 2.0rem; }\n\noption {\n  width: 2.5rem;\n  min-width: 2.0rem; }\n\n.squaredTwo {\n  -webkit-transform: scale(2);\n          transform: scale(2); }\n\n.form-control-label {\n  justify-content: flex-end;\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/vehicle-edit/vehicle-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-edit/vehicle-edit.component.ts ***!
  \********************************************************/
/*! exports provided: VehicleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleEditComponent", function() { return VehicleEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Services/vehicles.service */ "./src/app/Services/vehicles.service.ts");
/* harmony import */ var app_Services_misc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Services/misc.service */ "./src/app/Services/misc.service.ts");
/* harmony import */ var app_Services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Services/search.service */ "./src/app/Services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VehicleEditComponent = /** @class */ (function () {
    function VehicleEditComponent(fb, route, location, featService, searchService, miscService, spinner, modalService) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.featService = featService;
        this.searchService = searchService;
        this.miscService = miscService;
        this.spinner = spinner;
        this.modalService = modalService;
        this.spinner.show();
        this.searchService.setup();
        this.years = this.searchService.endYears;
        console.log('Years');
        console.log(this.years);
        this.miscService.getData().subscribe(function (data) {
            _this.bodystyles = data[0];
            _this.exteriorcolors = data[1];
            _this.interiorcolors = data[2];
            _this.makes = data[3];
            _this.makemodels = data[4];
            _this.transmissions = data[5];
            //debugger;
        }, function (err) {
            console.error(err);
            _this.spinner.hide();
        }, function () { return _this.getVehicle(); });
        this.myForm = fb.group({
            'make': '',
            'model': '',
            'year': '',
            'viNumber': '',
            'bodystyle': '',
            'transmisison': '',
            'color': '',
            'interior': '',
            'msrp': '',
            'salesprice': '',
            'mileage': '',
            'sold': '',
            'featured': '',
            'description': ''
        });
    }
    VehicleEditComponent.prototype.ngOnInit = function () {
    };
    VehicleEditComponent.prototype.src = function (viNumber) {
        return "../../assets/Images/" + viNumber + ".jpg";
    };
    VehicleEditComponent.prototype.onClick = function () {
        this.goBack();
    };
    VehicleEditComponent.prototype.getVehicle = function () {
        var _this = this;
        console.log(this.route);
        this.route.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
            _this.id = params.get('id');
        });
        // const id = this.route.snapshot.paramMap.get('id');
        console.log("looking for vehicle " + this.id);
        this.featService.getVehicle(this.id).subscribe(function (data) {
            _this.vehicle = data[0];
            _this.url = _this.src(_this.vehicle.viNumber);
            _this.spinner.hide();
        }, function (err) { return console.error(err); }, function () { return console.log('done getting vehicle info'); });
    };
    VehicleEditComponent.prototype.goBack = function () {
        console.log(this.location);
        this.location.back();
    };
    VehicleEditComponent.prototype.onSubmit = function (value) {
        console.log('you submitted form: ', this.myForm.value);
    };
    VehicleEditComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    VehicleEditComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url = reader.result;
            };
        }
    };
    VehicleEditComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    VehicleEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-edit',
            template: __webpack_require__(/*! ./vehicle-edit.component.html */ "./src/app/vehicle-edit/vehicle-edit.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-edit.component.scss */ "./src/app/vehicle-edit/vehicle-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            app_Services_vehicles_service__WEBPACK_IMPORTED_MODULE_6__["VehiclesService"],
            app_Services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
            app_Services_misc_service__WEBPACK_IMPORTED_MODULE_7__["MiscService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], VehicleEditComponent);
    return VehicleEditComponent;
}());



/***/ }),

/***/ "./src/app/vehicle-purchase/vehicle-purchase.component.html":
/*!******************************************************************!*\
  !*** ./src/app/vehicle-purchase/vehicle-purchase.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  vehicle-purchase works!\n</p>\n"

/***/ }),

/***/ "./src/app/vehicle-purchase/vehicle-purchase.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/vehicle-purchase/vehicle-purchase.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vehicle-purchase/vehicle-purchase.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/vehicle-purchase/vehicle-purchase.component.ts ***!
  \****************************************************************/
/*! exports provided: VehiclePurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePurchaseComponent", function() { return VehiclePurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehiclePurchaseComponent = /** @class */ (function () {
    function VehiclePurchaseComponent() {
    }
    VehiclePurchaseComponent.prototype.ngOnInit = function () {
    };
    VehiclePurchaseComponent.prototype.src = function (viNumber) {
        return "../../assets/Images/" + viNumber + ".jpg";
    };
    VehiclePurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-purchase',
            template: __webpack_require__(/*! ./vehicle-purchase.component.html */ "./src/app/vehicle-purchase/vehicle-purchase.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-purchase.component.scss */ "./src/app/vehicle-purchase/vehicle-purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VehiclePurchaseComponent);
    return VehiclePurchaseComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Repos\GuildQuestAngular\GuildQuestAngular\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map