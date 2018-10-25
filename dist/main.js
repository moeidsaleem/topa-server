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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-header></app-header>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_ad_detail_ad_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/ad-detail/ad-detail.component */ "./src/app/pages/ad-detail/ad-detail.component.ts");
/* harmony import */ var _pages_category_ad_category_ad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/category-ad/category-ad.component */ "./src/app/pages/category-ad/category-ad.component.ts");
/* harmony import */ var _pages_post_ad_post_ad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/post-ad/post-ad.component */ "./src/app/pages/post-ad/post-ad.component.ts");
/* harmony import */ var _pages_my_ads_my_ads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/my-ads/my-ads.component */ "./src/app/pages/my-ads/my-ads.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_favourite_ads_favourite_ads_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/favourite-ads/favourite-ads.component */ "./src/app/pages/favourite-ads/favourite-ads.component.ts");
/* harmony import */ var _pages_archive_ads_archive_ads_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/archive-ads/archive-ads.component */ "./src/app/pages/archive-ads/archive-ads.component.ts");
/* harmony import */ var _pages_pending_ads_pending_ads_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/pending-ads/pending-ads.component */ "./src/app/pages/pending-ads/pending-ads.component.ts");
/* harmony import */ var _pages_close_account_close_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/close-account/close-account.component */ "./src/app/pages/close-account/close-account.component.ts");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/signin/signin.component */ "./src/app/pages/signin/signin.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _errors_four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./errors/four-zero-four/four-zero-four.component */ "./src/app/errors/four-zero-four/four-zero-four.component.ts");
/* harmony import */ var _errors_five_zero_zero_five_zero_zero_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./errors/five-zero-zero/five-zero-zero.component */ "./src/app/errors/five-zero-zero/five-zero-zero.component.ts");
/* harmony import */ var _errors_ad_published_ad_published_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./errors/ad-published/ad-published.component */ "./src/app/errors/ad-published/ad-published.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//firebase




//componetns


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _pages_ad_detail_ad_detail_component__WEBPACK_IMPORTED_MODULE_11__["AdDetailComponent"],
                _pages_category_ad_category_ad_component__WEBPACK_IMPORTED_MODULE_12__["CategoryAdComponent"],
                _pages_post_ad_post_ad_component__WEBPACK_IMPORTED_MODULE_13__["PostAdComponent"],
                _pages_my_ads_my_ads_component__WEBPACK_IMPORTED_MODULE_14__["MyAdsComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _pages_favourite_ads_favourite_ads_component__WEBPACK_IMPORTED_MODULE_16__["FavouriteAdsComponent"],
                _pages_archive_ads_archive_ads_component__WEBPACK_IMPORTED_MODULE_17__["ArchiveAdsComponent"],
                _pages_pending_ads_pending_ads_component__WEBPACK_IMPORTED_MODULE_18__["PendingAdsComponent"],
                _pages_close_account_close_account_component__WEBPACK_IMPORTED_MODULE_19__["CloseAccountComponent"],
                _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_20__["SigninComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_22__["FaqComponent"],
                _errors_four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_23__["FourZeroFourComponent"],
                _errors_five_zero_zero_five_zero_zero_component__WEBPACK_IMPORTED_MODULE_24__["FiveZeroZeroComponent"],
                _errors_ad_published_ad_published_component__WEBPACK_IMPORTED_MODULE_25__["AdPublishedComponent"],
                _pages_post_ad_post_ad_component__WEBPACK_IMPORTED_MODULE_13__["PostAdComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyAAaTlWX2fB7N-j5N_6wehOjHIxFVYZlOs",
                    authDomain: "olx-classified.firebaseapp.com",
                    databaseURL: "https://olx-classified.firebaseio.com",
                    projectId: "olx-classified",
                    storageBucket: "olx-classified.appspot.com",
                    messagingSenderId: "491967766578"
                }),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([{
                        path: '',
                        redirectTo: 'index',
                        pathMatch: 'full'
                    },
                    { path: 'index', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"] },
                    { path: 'signin', component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_20__["SigninComponent"] },
                    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"] },
                    { path: 'ads/:id', component: _pages_ad_detail_ad_detail_component__WEBPACK_IMPORTED_MODULE_11__["AdDetailComponent"] },
                    { path: 'category/:categoryName', component: _pages_category_ad_category_ad_component__WEBPACK_IMPORTED_MODULE_12__["CategoryAdComponent"] },
                    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"], children: [
                            { path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"] },
                            { path: 'myads', component: _pages_my_ads_my_ads_component__WEBPACK_IMPORTED_MODULE_14__["MyAdsComponent"] },
                            { path: 'favoriteAds', component: _pages_favourite_ads_favourite_ads_component__WEBPACK_IMPORTED_MODULE_16__["FavouriteAdsComponent"] },
                            { path: 'closeAccount', component: _pages_close_account_close_account_component__WEBPACK_IMPORTED_MODULE_19__["CloseAccountComponent"] },
                            { path: 'post-ad', component: _pages_post_ad_post_ad_component__WEBPACK_IMPORTED_MODULE_13__["PostAdComponent"] }
                        ]
                    }
                    // { path:'index', component:IndexComponent},
                ])
            ],
            providers: [_services_api_api_service__WEBPACK_IMPORTED_MODULE_27__["ApiService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/errors/ad-published/ad-published.component.css":
/*!****************************************************************!*\
  !*** ./src/app/errors/ad-published/ad-published.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errors/ad-published/ad-published.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/errors/ad-published/ad-published.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ad-published works!\n</p>\n"

/***/ }),

/***/ "./src/app/errors/ad-published/ad-published.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/errors/ad-published/ad-published.component.ts ***!
  \***************************************************************/
/*! exports provided: AdPublishedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPublishedComponent", function() { return AdPublishedComponent; });
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

var AdPublishedComponent = /** @class */ (function () {
    function AdPublishedComponent() {
    }
    AdPublishedComponent.prototype.ngOnInit = function () {
    };
    AdPublishedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ad-published',
            template: __webpack_require__(/*! ./ad-published.component.html */ "./src/app/errors/ad-published/ad-published.component.html"),
            styles: [__webpack_require__(/*! ./ad-published.component.css */ "./src/app/errors/ad-published/ad-published.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdPublishedComponent);
    return AdPublishedComponent;
}());



/***/ }),

/***/ "./src/app/errors/five-zero-zero/five-zero-zero.component.css":
/*!********************************************************************!*\
  !*** ./src/app/errors/five-zero-zero/five-zero-zero.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errors/five-zero-zero/five-zero-zero.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/errors/five-zero-zero/five-zero-zero.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  five-zero-zero works!\n</p>\n"

/***/ }),

/***/ "./src/app/errors/five-zero-zero/five-zero-zero.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/errors/five-zero-zero/five-zero-zero.component.ts ***!
  \*******************************************************************/
/*! exports provided: FiveZeroZeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiveZeroZeroComponent", function() { return FiveZeroZeroComponent; });
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

var FiveZeroZeroComponent = /** @class */ (function () {
    function FiveZeroZeroComponent() {
    }
    FiveZeroZeroComponent.prototype.ngOnInit = function () {
    };
    FiveZeroZeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-five-zero-zero',
            template: __webpack_require__(/*! ./five-zero-zero.component.html */ "./src/app/errors/five-zero-zero/five-zero-zero.component.html"),
            styles: [__webpack_require__(/*! ./five-zero-zero.component.css */ "./src/app/errors/five-zero-zero/five-zero-zero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FiveZeroZeroComponent);
    return FiveZeroZeroComponent;
}());



/***/ }),

/***/ "./src/app/errors/four-zero-four/four-zero-four.component.css":
/*!********************************************************************!*\
  !*** ./src/app/errors/four-zero-four/four-zero-four.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errors/four-zero-four/four-zero-four.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/errors/four-zero-four/four-zero-four.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  four-zero-four works!\n</p>\n"

/***/ }),

/***/ "./src/app/errors/four-zero-four/four-zero-four.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/errors/four-zero-four/four-zero-four.component.ts ***!
  \*******************************************************************/
/*! exports provided: FourZeroFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourZeroFourComponent", function() { return FourZeroFourComponent; });
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

var FourZeroFourComponent = /** @class */ (function () {
    function FourZeroFourComponent() {
    }
    FourZeroFourComponent.prototype.ngOnInit = function () {
    };
    FourZeroFourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-four-zero-four',
            template: __webpack_require__(/*! ./four-zero-four.component.html */ "./src/app/errors/four-zero-four/four-zero-four.component.html"),
            styles: [__webpack_require__(/*! ./four-zero-four.component.css */ "./src/app/errors/four-zero-four/four-zero-four.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FourZeroFourComponent);
    return FourZeroFourComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/ad-detail/ad-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/ad-detail/ad-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/ad-detail/ad-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/ad-detail/ad-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- main -->\n    <section id=\"main\" class=\"clearfix details-page\" *ngIf=\"ad\">\n      <div class=\"container\">\n          <div class=\"breadcrumb-section\">\n              <!-- breadcrumb -->\n              <ol class=\"breadcrumb\">\n                  <li><a href=\"index.html\">Home</a></li>\n                  <li><a href=\"#\">{{ad?.sectionName}}</a></li>\n                  <li>{{ad?.categoryName}}</li>\n              </ol>\n              <!-- breadcrumb -->\n              <h2 class=\"title\">{{ad?.categoryName}}</h2>\n          </div>\n\n          <div class=\"section banner\">\n              <!-- banner-form -->\n              <div class=\"banner-form banner-form-full\">\n                  <form action=\"#\">\n                      <!-- category-change -->\n                      <div class=\"dropdown category-dropdown\">\n                          <a data-toggle=\"dropdown\" href=\"#\"><span class=\"change-text\">Select Category</span> <i class=\"fa fa-angle-down\"></i></a>\n                          <ul class=\"dropdown-menu category-change\">\n                              <li><a href=\"#\">Fashion & Beauty</a></li>\n                              <li><a href=\"#\">Cars & Vehicles</a></li>\n                              <li><a href=\"#\">Electronics & Gedgets</a></li>\n                              <li><a href=\"#\">Real Estate</a></li>\n                              <li><a href=\"#\">Sports & Games</a></li>\n                          </ul>\n                      </div>\n                      <!-- category-change -->\n\n                      <!-- language-dropdown -->\n                      <div class=\"dropdown category-dropdown language-dropdown \">\n                          <a data-toggle=\"dropdown\" href=\"#\"><span class=\"change-text\">United Kingdom</span> <i class=\"fa fa-angle-down\"></i></a>\n                          <ul class=\"dropdown-menu  language-change\">\n                              <li><a href=\"#\">United Kingdom</a></li>\n                              <li><a href=\"#\">United States</a></li>\n                              <li><a href=\"#\">China</a></li>\n                              <li><a href=\"#\">Russia</a></li>\n                          </ul>\n                      </div>\n                      <!-- language-dropdown -->\n\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Type Your key word\">\n                      <button type=\"submit\" class=\"form-control\" value=\"Search\">Search</button>\n                  </form>\n              </div>\n              <!-- banner-form -->\n          </div>\n          <!-- banner -->\n\n\n          <div class=\"section slider\">\n              <div class=\"row\">\n                  <!-- carousel -->\n                  <div class=\"col-md-7\">\n                      <div id=\"product-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n                          <!-- Indicators -->\n                          <!-- <ol class=\"carousel-indicators\">\n                              <li data-target=\"#product-carousel\" data-slide-to=\"0\" class=\"active\" >\n                                  <img [src]=\"ad.image\" alt=\"Carousel Thumb\" class=\"img-responsive\">\n                              </li>\n                              <li data-target=\"#product-carousel\" data-slide-to=\"1\">\n                                  <img [src]=\"ad.photos[0]\" alt=\"Carousel Thumb\" class=\"img-responsive\">\n                              </li>\n                              <li data-target=\"#product-carousel\" data-slide-to=\"2\">\n                                  <img src=\"./assets/images/slider/list-3.jpg\" alt=\"Carousel Thumb\" class=\"img-responsive\">\n                              </li>\n                              <li data-target=\"#product-carousel\" data-slide-to=\"3\">\n                                  <img src=\"./assets/images/slider/list-4.jpg\" alt=\"Carousel Thumb\" class=\"img-responsive\">\n                              </li>\n                              <li data-target=\"#product-carousel\" data-slide-to=\"4\">\n                                  <img src=\"./assets/images/slider/list-5.jpg\" alt=\"Carousel Thumb\" class=\"img-responsive\">\n                              </li>\n                          </ol> -->\n\n                          <!-- Wrapper for slides -->\n                          <div class=\"carousel-inner\" role=\"listbox\">\n                              <!-- item -->\n                              <div class=\"item active\">\n                                  <div class=\"carousel-image\">\n                                      <!-- image-wrapper -->\n                                      <img [src]=\"ad.image || 'https://res.cloudinary.com/hkf2ycaep/image/fetch/d_project-placeholder.png,f_auto/https:/assets/project-placeholder-b90804f0a659d3f283c62d185d49635da22a5b8bbfb7e985f0d0390201f9d2b1.png'\" alt=\"Featured Image\" class=\"img-responsive\">\n                                  </div>\n                              </div>\n                              <!-- item -->\n\n                              <!-- item -->\n                              <div class=\"item\" *ngFor=\"let x of ad.photos\">\n                                  <div class=\"carousel-image\">\n                                      <!-- image-wrapper -->\n                                      <img [src]=\"x\" alt=\"Featured Image\" class=\"img-responsive\">\n                                  </div>\n                              </div>\n                              <!-- item -->\n\n\n                          </div>\n                          <!-- carousel-inner -->\n\n                          <!-- Controls -->\n                          <a class=\"left carousel-control\" href=\"#product-carousel\" role=\"button\" data-slide=\"prev\">\n              <i class=\"fa fa-chevron-left\"></i>\n            </a>\n                          <a class=\"right carousel-control\" href=\"#product-carousel\" role=\"button\" data-slide=\"next\">\n              <i class=\"fa fa-chevron-right\"></i>\n            </a>\n                          <!-- Controls -->\n                      </div>\n                  </div>\n                  <!-- Controls -->\n\n                  <!-- slider-text -->\n                  <div class=\"col-md-5\">\n                      <div class=\"slider-text\">\n                          <h2>{{ad.price | currency }}</h2>\n                          <h3 class=\"title\">{{ad.title | uppercase }}</h3>\n                          <p><span>Offered by: <a href=\"#\">{{ad.customerName}}</a></span>\n                              <span> Ad ID:<a href=\"#\" class=\"time\"> {{id}}</a></span></p>\n                          <span class=\"icon\"><i class=\"fa fa-clock-o\"></i><a href=\"#\">7 Jan, 16  10:10 pm</a></span>\n                          <span class=\"icon\"><i class=\"fa fa-map-marker\"></i><a href=\"#\">{{ad.city}}, {{ad.country}}</a></span>\n                          <span class=\"icon\"><i class=\"fa fa-suitcase online\"></i><a href=\"#\">Dealer <strong>(online)</strong></a></span>\n\n                          <!-- short-info -->\n                          <div class=\"short-info\">\n                              <h4>Short Info</h4>\n                              <p><strong>Condition: </strong><a href=\"#\">{{ad.condition}}</a> </p>\n                              <!-- <p><strong>Brand: </strong><a href=\"#\">Apple</a> </p> -->\n                              <!-- <p><strong>Features: </strong><a href=\"#\">Camera,</a> <a href=\"#\">Dual SIM,</a> <a href=\"#\">GSM,</a> <a href=\"#\">Touch screen</a> </p> -->\n                              <!-- <p><strong>Model: </strong><a href=\"#\">iPhone 6</a></p> -->\n                          </div>\n                          <!-- short-info -->\n\n                          <!-- contact-with -->\n                          <div class=\"contact-with\">\n                              <h4>Contact with </h4>\n                              <span class=\"btn btn-red show-number\">\n                <i class=\"fa fa-phone-square\"></i>\n                <span class=\"hide-text\">Click to show phone number </span>\n                              <span class=\"hide-number\">012-1234567890</span>\n                              </span>\n                              <a href=\"#\" class=\"btn\"><i class=\"fa fa-envelope-square\"></i>Reply by email</a>\n                          </div>\n                          <!-- contact-with -->\n\n                          <!-- social-links -->\n                          <div class=\"social-links\">\n                              <h4>Share this ad</h4>\n                              <ul class=\"list-inline\">\n                                  <li><a href=\"#\"><i class=\"fa fa-facebook-square\"></i></a></li>\n                                  <li><a href=\"#\"><i class=\"fa fa-twitter-square\"></i></a></li>\n                                  <li><a href=\"#\"><i class=\"fa fa-google-plus-square\"></i></a></li>\n                                  <li><a href=\"#\"><i class=\"fa fa-linkedin-square\"></i></a></li>\n                                  <li><a href=\"#\"><i class=\"fa fa-pinterest-square\"></i></a></li>\n                                  <li><a href=\"#\"><i class=\"fa fa-tumblr-square\"></i></a></li>\n                              </ul>\n                          </div>\n                          <!-- social-links -->\n                      </div>\n                  </div>\n                  <!-- slider-text -->\n              </div>\n          </div>\n          <!-- slider -->\n\n          <div class=\"description-info\">\n              <div class=\"row\">\n                  <!-- description -->\n                  <div class=\"col-md-8\">\n                      <div class=\"description\">\n                          <h4>Description</h4>\n                          <p>\n                            {{ad.description}}\n                          </p><br>\n\n                      </div>\n                  </div>\n                  <!-- description -->\n\n                  <!-- description-short-info -->\n                  <div class=\"col-md-4\">\n                      <div class=\"short-info\">\n                          <h4>Short Info</h4>\n                          <!-- social-icon -->\n                          <ul>\n                              <li><i class=\"fa fa-shopping-cart\"></i><a href=\"#\">Delivery: Meet in person</a></li>\n                              <li><i class=\"fa fa-user-plus\"></i><a href=\"#\">More ads by <span>Yury Corporation</span></a></li>\n                              <li><i class=\"fa fa-print\"></i><a href=\"#\">Print this ad</a></li>\n                              <li><i class=\"fa fa-reply\"></i><a href=\"#\">Send to a friend</a></li>\n                              <li><i class=\"fa fa-heart-o\"></i><a href=\"#\">Save ad as Favorite</a></li>\n                              <li><i class=\"fa fa-exclamation-triangle\"></i><a href=\"#\">Report this ad</a></li>\n                          </ul>\n                          <!-- social-icon -->\n                      </div>\n                  </div>\n              </div>\n              <!-- row -->\n          </div>\n          <!-- description-info -->\n\n          <div class=\"recommended-info\">\n              <div class=\"row\">\n                  <div class=\"col-sm-8\">\n                      <div class=\"section recommended-ads\">\n                          <div class=\"featured-top\">\n                              <h4>Recommended Ads for You</h4>\n                          </div>\n                          <!-- ad-item -->\n                          <div class=\"ad-item row\">\n                              <!-- item-image -->\n                              <div class=\"item-image-box col-sm-4\">\n                                  <div class=\"item-image\">\n                                      <a href=\"details.html\"><img src=\"./assets/images/trending/1.jpg\" alt=\"Image\" class=\"img-responsive\"></a>\n                                  </div>\n                                  <!-- item-image -->\n                              </div>\n\n                              <div class=\"item-info col-sm-8\">\n                                  <!-- ad-info -->\n                                  <div class=\"ad-info\">\n                                      <h3 class=\"item-price\">$800.00</h3>\n                                      <h4 class=\"item-title\"><a href=\"#\">Apple TV - Everything you need to know!</a></h4>\n                                      <div class=\"item-cat\">\n                                          <span><a href=\"#\">Electronics & Gedgets</a></span> /\n                                          <span><a href=\"#\">Tv & Video</a></span>\n                                      </div>\n                                  </div>\n                                  <!-- ad-info -->\n\n                                  <!-- ad-meta -->\n                                  <div class=\"ad-meta\">\n                                      <div class=\"meta-content\">\n                                          <span class=\"dated\"><a href=\"#\">7 Jan, 16  10:10 pm </a></span>\n                                          <a href=\"#\" class=\"tag\"><i class=\"fa fa-tags\"></i> New</a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                      <div class=\"user-option pull-right\">\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                                          <a class=\"online\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Individual\"><i class=\"fa fa-user\"></i> </a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                  </div>\n                                  <!-- ad-meta -->\n                              </div>\n                              <!-- item-info -->\n                          </div>\n                          <!-- ad-item -->\n\n                          <!-- ad-item -->\n                          <div class=\"ad-item row\">\n                              <div class=\"item-image-box col-sm-4\">\n                                  <!-- item-image -->\n                                  <div class=\"item-image\">\n                                      <a href=\"details.html\"><img src=\"./assets/images/trending/2.jpg\" alt=\"Image\" class=\"img-responsive\"></a>\n                                  </div>\n                                  <!-- item-image -->\n                              </div>\n                              <!-- item-image-box -->\n\n\n                              <div class=\"item-info col-sm-8\">\n                                  <!-- ad-info -->\n                                  <div class=\"ad-info\">\n                                      <h3 class=\"item-price\">$250.00 <span>(Negotiable)</span></h3>\n                                      <h4 class=\"item-title\"><a href=\"#\">Bark Furniture, Handmade Bespoke Furniture</a></h4>\n                                      <div class=\"item-cat\">\n                                          <span><a href=\"#\">Home Appliances</a></span> /\n                                          <span><a href=\"#\">Sofa</a></span>\n                                      </div>\n                                  </div>\n                                  <!-- ad-info -->\n\n                                  <!-- ad-meta -->\n                                  <div class=\"ad-meta\">\n                                      <div class=\"meta-content\">\n                                          <span class=\"dated\"><a href=\"#\">7 Jan, 16  10:10 pm </a></span>\n                                          <a href=\"#\" class=\"tag\"><i class=\"fa fa-tags\"></i> Used</a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                      <div class=\"user-option pull-right\">\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Individual\"><i class=\"fa fa-user\"></i> </a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                  </div>\n                                  <!-- ad-meta -->\n                              </div>\n                              <!-- item-info -->\n                          </div>\n                          <!-- ad-item -->\n\n                          <!-- ad-item -->\n                          <div class=\"ad-item row\">\n                              <div class=\"item-image-box col-sm-4\">\n                                  <!-- item-image -->\n                                  <div class=\"item-image\">\n                                      <a href=\"details.html\"><img src=\"./assets/images/trending/3.jpg\" alt=\"Image\" class=\"img-responsive\"></a>\n                                  </div>\n                                  <!-- item-image -->\n                              </div>\n                              <!-- item-image-box -->\n\n\n                              <div class=\"item-info col-sm-8\">\n                                  <!-- ad-info -->\n                                  <div class=\"ad-info\">\n                                      <h3 class=\"item-price\">$890.00 <span>(Negotiable)</span></h3>\n                                      <h4 class=\"item-title\"><a href=\"#\">Samsung Galaxy S6 Edge</a></h4>\n                                      <div class=\"item-cat\">\n                                          <span><a href=\"#\">Electronics & Gedgets</a></span> /\n                                          <span><a href=\"#\">Mobile Phone</a></span>\n                                      </div>\n                                  </div>\n                                  <!-- ad-info -->\n\n                                  <!-- ad-meta -->\n                                  <div class=\"ad-meta\">\n                                      <div class=\"meta-content\">\n                                          <span class=\"dated\"><a href=\"#\">7 Jan, 16  10:10 pm </a></span>\n                                          <a href=\"#\" class=\"tag\"><i class=\"fa fa-tags\"></i> Used</a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                      <div class=\"user-option pull-right\">\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Dealer\"><i class=\"fa fa-suitcase\"></i> </a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                  </div>\n                                  <!-- ad-meta -->\n                              </div>\n                              <!-- item-info -->\n                          </div>\n                          <!-- ad-item -->\n\n                          <!-- ad-item -->\n                          <div class=\"ad-item row\">\n                              <div class=\"item-image-box col-sm-4\">\n                                  <!-- item-image -->\n                                  <div class=\"item-image\">\n                                      <a href=\"details.html\"><img src=\"./assets/images/trending/4.jpg\" alt=\"Image\" class=\"img-responsive\"></a>\n                                  </div>\n                                  <!-- item-image -->\n                              </div>\n                              <!-- item-image-box -->\n\n\n                              <div class=\"item-info col-sm-8\">\n                                  <!-- ad-info -->\n                                  <div class=\"ad-info\">\n                                      <h3 class=\"item-price\">$800.00</h3>\n                                      <h4 class=\"item-title\"><a href=\"#\">Rick Morton- Magicius Chase</a></h4>\n                                      <div class=\"item-cat\">\n                                          <span><a href=\"#\">Books & Magazines</a></span> /\n                                          <span><a href=\"#\">Story book</a></span>\n                                      </div>\n                                  </div>\n                                  <!-- ad-info -->\n\n                                  <!-- ad-meta -->\n                                  <div class=\"ad-meta\">\n                                      <div class=\"meta-content\">\n                                          <span class=\"dated\"><a href=\"#\">7 Jan, 16  10:10 pm </a></span>\n                                          <a href=\"#\" class=\"tag\"><i class=\"fa fa-tags\"></i> Used</a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                      <div class=\"user-option pull-right\">\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Individual\"><i class=\"fa fa-user\"></i> </a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                  </div>\n                                  <!-- ad-meta -->\n                              </div>\n                              <!-- item-info -->\n                          </div>\n                          <!-- ad-item -->\n                      </div>\n                  </div>\n                  <!-- recommended-ads -->\n\n                  <div class=\"col-sm-4 text-center\">\n                      <div class=\"recommended-cta\">\n                          <div class=\"cta\">\n                              <!-- single-cta -->\n                              <div class=\"single-cta\">\n                                  <!-- cta-icon -->\n                                  <div class=\"cta-icon icon-secure\">\n                                      <img src=\"./assets/images/icon/13.png\" alt=\"Icon\" class=\"img-responsive\">\n                                  </div>\n                                  <!-- cta-icon -->\n\n                                  <h4>Secure Trading</h4>\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                              </div>\n                              <!-- single-cta -->\n\n                              <!-- single-cta -->\n                              <div class=\"single-cta\">\n                                  <!-- cta-icon -->\n                                  <div class=\"cta-icon icon-support\">\n                                      <img src=\"./assets/images/icon/14.png\" alt=\"Icon\" class=\"img-responsive\">\n                                  </div>\n                                  <!-- cta-icon -->\n\n                                  <h4>24/7 Support</h4>\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                              </div>\n                              <!-- single-cta -->\n\n\n                              <!-- single-cta -->\n                              <div class=\"single-cta\">\n                                  <!-- cta-icon -->\n                                  <div class=\"cta-icon icon-trading\">\n                                      <img src=\"./assets/images/icon/15.png\" alt=\"Icon\" class=\"img-responsive\">\n                                  </div>\n                                  <!-- cta-icon -->\n\n                                  <h4>Easy Trading</h4>\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                              </div>\n                              <!-- single-cta -->\n\n                              <!-- single-cta -->\n                              <div class=\"single-cta\">\n                                  <h5>Need Help?</h5>\n                                  <p><span>Give a call on</span><a href=\"tellto:08048100000\"> 08048100000</a></p>\n                              </div>\n                              <!-- single-cta -->\n                          </div>\n                      </div>\n                      <!-- cta -->\n                  </div>\n                  <!-- recommended-cta-->\n              </div>\n              <!-- row -->\n          </div>\n          <!-- recommended-info -->\n      </div>\n      <!-- container -->\n  </section>\n  <!-- main -->\n\n  <!-- download -->\n  <section id=\"something-sell\" class=\"clearfix parallax-section\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n                  <h2 class=\"title\">Do you have something-sell?</h2>\n                  <h4>Post your ad for free on Trade.com</h4>\n                  <a href=\"ad-post.html\" class=\"btn btn-primary\">Post Your Ad</a>\n              </div>\n          </div>\n          <!-- row -->\n      </div>\n      <!-- contaioner -->\n  </section>\n  <!-- download -->\n"

/***/ }),

/***/ "./src/app/pages/ad-detail/ad-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/ad-detail/ad-detail.component.ts ***!
  \********************************************************/
/*! exports provided: AdDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdDetailComponent", function() { return AdDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdDetailComponent = /** @class */ (function () {
    function AdDetailComponent(router, route, api) {
        this.router = router;
        this.route = route;
        this.api = api;
    }
    AdDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (resp) {
            console.log(resp);
            _this.id = resp.id;
            _this.getAd(resp.id);
        });
    };
    AdDetailComponent.prototype.getAd = function (id) {
        var _this = this;
        return this.api.getAd(id).subscribe(function (res) {
            _this.ad = res;
        });
    };
    AdDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ad-detail',
            template: __webpack_require__(/*! ./ad-detail.component.html */ "./src/app/pages/ad-detail/ad-detail.component.html"),
            styles: [__webpack_require__(/*! ./ad-detail.component.css */ "./src/app/pages/ad-detail/ad-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AdDetailComponent);
    return AdDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/archive-ads/archive-ads.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/archive-ads/archive-ads.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/archive-ads/archive-ads.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/archive-ads/archive-ads.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  archive-ads works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/archive-ads/archive-ads.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/archive-ads/archive-ads.component.ts ***!
  \************************************************************/
/*! exports provided: ArchiveAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveAdsComponent", function() { return ArchiveAdsComponent; });
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

var ArchiveAdsComponent = /** @class */ (function () {
    function ArchiveAdsComponent() {
    }
    ArchiveAdsComponent.prototype.ngOnInit = function () {
    };
    ArchiveAdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive-ads',
            template: __webpack_require__(/*! ./archive-ads.component.html */ "./src/app/pages/archive-ads/archive-ads.component.html"),
            styles: [__webpack_require__(/*! ./archive-ads.component.css */ "./src/app/pages/archive-ads/archive-ads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArchiveAdsComponent);
    return ArchiveAdsComponent;
}());



/***/ }),

/***/ "./src/app/pages/category-ad/category-ad.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/category-ad/category-ad.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/category-ad/category-ad.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/category-ad/category-ad.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  category-ad works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/category-ad/category-ad.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/category-ad/category-ad.component.ts ***!
  \************************************************************/
/*! exports provided: CategoryAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAdComponent", function() { return CategoryAdComponent; });
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

var CategoryAdComponent = /** @class */ (function () {
    function CategoryAdComponent() {
    }
    CategoryAdComponent.prototype.ngOnInit = function () {
    };
    CategoryAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-ad',
            template: __webpack_require__(/*! ./category-ad.component.html */ "./src/app/pages/category-ad/category-ad.component.html"),
            styles: [__webpack_require__(/*! ./category-ad.component.css */ "./src/app/pages/category-ad/category-ad.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryAdComponent);
    return CategoryAdComponent;
}());



/***/ }),

/***/ "./src/app/pages/close-account/close-account.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/close-account/close-account.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/close-account/close-account.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/close-account/close-account.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  close-account works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/close-account/close-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/close-account/close-account.component.ts ***!
  \****************************************************************/
/*! exports provided: CloseAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAccountComponent", function() { return CloseAccountComponent; });
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

var CloseAccountComponent = /** @class */ (function () {
    function CloseAccountComponent() {
    }
    CloseAccountComponent.prototype.ngOnInit = function () {
    };
    CloseAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-close-account',
            template: __webpack_require__(/*! ./close-account.component.html */ "./src/app/pages/close-account/close-account.component.html"),
            styles: [__webpack_require__(/*! ./close-account.component.css */ "./src/app/pages/close-account/close-account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CloseAccountComponent);
    return CloseAccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- ad-profile-page -->\n  <section id=\"main\" class=\"clearfix  ad-profile-page\" *ngIf=\"user\">\n    <div class=\"container\">\n\n        <div class=\"breadcrumb-section\">\n            <!-- breadcrumb -->\n            <ol class=\"breadcrumb\">\n                <li><a routerLink=\"/index\">Home</a></li>\n                <li routerLink=\"/profile\">Customer Profile</li>\n            </ol>\n            <!-- breadcrumb -->\n            <h2 class=\"title\">My Profile</h2>\n        </div>\n        <!-- banner -->\n\n        <div class=\"ad-profile section\">\n            <div class=\"user-profile\">\n                <div class=\"user-images\">\n                    <img src=\"https://eabiawak.com/wp-content/uploads/2017/07/photo.png\" alt=\"User Images\" class=\"img-responsive\" width=\"206px\" height=\"206px\">\n                </div>\n                <div class=\"user\">\n                    <h2>Hello, <a href=\"#\">{{user?.name}}</a></h2>\n                    <h5>You last logged in at: 14-01-2016 6:40 AM [ USA time (GMT + 6:00hrs)]</h5>\n                </div>\n\n                <div class=\"favorites-user\">\n                    <div class=\"my-ads\">\n                        <a href=\"my-ads.html\">23<small>My ADS</small></a>\n                    </div>\n                    <div class=\"favorites\">\n                        <a href=\"#\">18<small>Favorites</small></a>\n                    </div>\n                </div>\n            </div>\n            <!-- user-profile -->\n\n            <ul class=\"user-menu\">\n                <li routerLink=\"/dashboard/profile\" routerLinkActive=\"active\"><a>Profile</a></li>\n                <li routerLink=\"/dashboard/myads\" routerLinkActive=\"active\"><a>My ads</a></li>\n                <li routerLink=\"/dashboard/favoriteAds\" routerLinkActive=\"active\"><a>Favourite ads</a></li>\n                <li ><a>Archived ads </a></li>\n                <li><a href=\"pending-ads.html\">Pending approval</a></li>\n                <li routerLink=\"/dashboard/closeAccount\" routerLinkActive=\"active\"><a >Close account</a></li>\n            </ul>\n        </div>\n        <!-- ad-profile -->\n        <router-outlet></router-outlet>\n\n\n    </div>\n    <!-- container -->\n</section>\n<!-- ad-profile-page -->\n\n\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth) {
        this.auth = auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    DashboardComponent.prototype.getUser = function () {
        this.user = this.auth.getProfile();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.component.css":
/*!*********************************************!*\
  !*** ./src/app/pages/faq/faq.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/faq/faq.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
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

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/pages/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/favourite-ads/favourite-ads.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/favourite-ads/favourite-ads.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/favourite-ads/favourite-ads.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/favourite-ads/favourite-ads.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n            <div class=\"ads-info\">\n              <div class=\"row\">\n                  <div class=\"col-sm-8\">\n                      <div class=\"my-ads section\">\n                          <h2>Favourite ads</h2>\n                          <!-- ad-item -->\n                          <div class=\"ad-item row\">\n                              <!-- item-image -->\n                              <div class=\"item-image-box col-sm-4\">\n                                  <div class=\"item-image\">\n                                      <a href=\"details.html\"><img src=\"images/listing/1.jpg\" alt=\"Image\" class=\"img-responsive\"></a>\n                                  </div>\n                                  <!-- item-image -->\n                              </div>\n\n                              <div class=\"item-info col-sm-8\">\n                                  <!-- ad-info -->\n                                  <div class=\"ad-info\">\n                                      <h3 class=\"item-price\">$800.00</h3>\n                                      <h4 class=\"item-title\"><a href=\"#\">Apple TV - Everything you need to know!</a></h4>\n                                      <div class=\"item-cat\">\n                                          <span><a href=\"#\">Electronics & Gedgets</a></span> /\n                                          <span><a href=\"#\">Tv & Video</a></span>\n                                      </div>\n                                  </div>\n                                  <!-- ad-info -->\n\n                                  <!-- ad-meta -->\n                                  <div class=\"ad-meta\">\n                                      <div class=\"meta-content\">\n                                          <span class=\"dated\"><a href=\"#\">7 Jan, 16  10:10 pm </a></span>\n                                          <a href=\"#\" class=\"tag\"><i class=\"fa fa-tags\"></i> New</a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                      <div class=\"user-option pull-right\">\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                                          <a class=\"online\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Individual\"><i class=\"fa fa-user\"></i> </a>\n                                          <a class=\"delete-item\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete this ad\"><i class=\"fa fa-times\"></i></a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                  </div>\n                                  <!-- ad-meta -->\n                              </div>\n                              <!-- item-info -->\n                          </div>\n                          <!-- ad-item -->\n\n                          <!-- ad-item -->\n                          <div class=\"ad-item row\">\n                              <div class=\"item-image-box col-sm-4\">\n                                  <!-- item-image -->\n                                  <div class=\"item-image\">\n                                      <a href=\"details.html\"><img src=\"images/trending/2.jpg\" alt=\"Image\" class=\"img-responsive\"></a>\n                                  </div>\n                                  <!-- item-image -->\n                              </div>\n                              <!-- item-image-box -->\n\n\n                              <div class=\"item-info col-sm-8\">\n                                  <!-- ad-info -->\n                                  <div class=\"ad-info\">\n                                      <h3 class=\"item-price\">$250.00 <span>(Negotiable)</span></h3>\n                                      <h4 class=\"item-title\"><a href=\"#\">Bark Furniture, Handmade Bespoke Furniture</a></h4>\n                                      <div class=\"item-cat\">\n                                          <span><a href=\"#\">Home Appliances</a></span> /\n                                          <span><a href=\"#\">Sofa</a></span>\n                                      </div>\n                                  </div>\n                                  <!-- ad-info -->\n\n                                  <!-- ad-meta -->\n                                  <div class=\"ad-meta\">\n                                      <div class=\"meta-content\">\n                                          <span class=\"dated\"><a href=\"#\">7 Jan, 16  10:10 pm </a></span>\n                                          <a href=\"#\" class=\"tag\"><i class=\"fa fa-tags\"></i> Used</a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                      <div class=\"user-option pull-right\">\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Individual\"><i class=\"fa fa-user\"></i> </a>\n                                          <a class=\"delete-item\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete this ad\"><i class=\"fa fa-times\"></i></a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                  </div>\n                                  <!-- ad-meta -->\n                              </div>\n                              <!-- item-info -->\n                          </div>\n                          <!-- ad-item -->\n\n                          <!-- ad-item -->\n                          <div class=\"ad-item row\">\n                              <div class=\"item-image-box col-sm-4\">\n                                  <!-- item-image -->\n                                  <div class=\"item-image\">\n                                      <a href=\"details.html\"><img src=\"images/listing/3.jpg\" alt=\"Image\" class=\"img-responsive\"></a>\n                                  </div>\n                                  <!-- item-image -->\n                              </div>\n                              <!-- item-image-box -->\n\n\n                              <div class=\"item-info col-sm-8\">\n                                  <!-- ad-info -->\n                                  <div class=\"ad-info\">\n                                      <h3 class=\"item-price\">$890.00 <span>(Negotiable)</span></h3>\n                                      <h4 class=\"item-title\"><a href=\"#\">Samsung Galaxy S6 Edge</a></h4>\n                                      <div class=\"item-cat\">\n                                          <span><a href=\"#\">Electronics & Gedgets</a></span> /\n                                          <span><a href=\"#\">Mobile Phone</a></span>\n                                      </div>\n                                  </div>\n                                  <!-- ad-info -->\n\n                                  <!-- ad-meta -->\n                                  <div class=\"ad-meta\">\n                                      <div class=\"meta-content\">\n                                          <span class=\"dated\"><a href=\"#\">7 Jan, 16  10:10 pm </a></span>\n                                          <a href=\"#\" class=\"tag\"><i class=\"fa fa-tags\"></i> Used</a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                      <div class=\"user-option pull-right\">\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Individual\"><i class=\"fa fa-user\"></i> </a>\n                                          <a class=\"delete-item\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete this ad\"><i class=\"fa fa-times\"></i></a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                  </div>\n                                  <!-- ad-meta -->\n                              </div>\n                              <!-- item-info -->\n                          </div>\n                          <!-- ad-item -->\n\n                          <!-- ad-item -->\n                          <div class=\"ad-item row\">\n                              <div class=\"item-image-box col-sm-4\">\n                                  <!-- item-image -->\n                                  <div class=\"item-image\">\n                                      <a href=\"details.html\"><img src=\"images/trending/4.jpg\" alt=\"Image\" class=\"img-responsive\"></a>\n                                  </div>\n                                  <!-- item-image -->\n                              </div>\n                              <!-- item-image-box -->\n\n\n                              <div class=\"item-info col-sm-8\">\n                                  <!-- ad-info -->\n                                  <div class=\"ad-info\">\n                                      <h3 class=\"item-price\">$800.00</h3>\n                                      <h4 class=\"item-title\"><a href=\"#\">Rick Morton- Magicius Chase</a></h4>\n                                      <div class=\"item-cat\">\n                                          <span><a href=\"#\">Books & Magazines</a></span> /\n                                          <span><a href=\"#\">Story book</a></span>\n                                      </div>\n                                  </div>\n                                  <!-- ad-info -->\n\n                                  <!-- ad-meta -->\n                                  <div class=\"ad-meta\">\n                                      <div class=\"meta-content\">\n                                          <span class=\"dated\"><a href=\"#\">7 Jan, 16  10:10 pm </a></span>\n                                          <a href=\"#\" class=\"tag\"><i class=\"fa fa-tags\"></i> Used</a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                      <div class=\"user-option pull-right\">\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                                          <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Individual\"><i class=\"fa fa-user\"></i> </a>\n                                          <a class=\"delete-item\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete this ad\"><i class=\"fa fa-times\"></i></a>\n                                      </div>\n                                      <!-- item-info-right -->\n                                  </div>\n                                  <!-- ad-meta -->\n                              </div>\n                              <!-- item-info -->\n                          </div>\n                          <!-- ad-item -->\n                      </div>\n                  </div>\n                  <!-- my-ads -->\n\n                  <!-- recommended-cta-->\n                  <div class=\"col-sm-4 text-center\">\n                      <!-- recommended-cta -->\n                      <div class=\"recommended-cta\">\n                          <div class=\"cta\">\n                              <!-- single-cta -->\n                              <div class=\"single-cta\">\n                                  <!-- cta-icon -->\n                                  <div class=\"cta-icon icon-secure\">\n                                      <img src=\"images/icon/13.png\" alt=\"Icon\" class=\"img-responsive\">\n                                  </div>\n                                  <!-- cta-icon -->\n\n                                  <h4>Secure Trading</h4>\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                              </div>\n                              <!-- single-cta -->\n\n\n                              <!-- single-cta -->\n                              <div class=\"single-cta\">\n                                  <!-- cta-icon -->\n                                  <div class=\"cta-icon icon-support\">\n                                      <img src=\"images/icon/14.png\" alt=\"Icon\" class=\"img-responsive\">\n                                  </div>\n                                  <!-- cta-icon -->\n\n                                  <h4>24/7 Support</h4>\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                              </div>\n                              <!-- single-cta -->\n\n\n                              <!-- single-cta -->\n                              <div class=\"single-cta\">\n                                  <!-- cta-icon -->\n                                  <div class=\"cta-icon icon-trading\">\n                                      <img src=\"images/icon/15.png\" alt=\"Icon\" class=\"img-responsive\">\n                                  </div>\n                                  <!-- cta-icon -->\n\n                                  <h4>Easy Trading</h4>\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                              </div>\n                              <!-- single-cta -->\n\n                              <!-- single-cta -->\n                              <div class=\"single-cta\">\n                                  <h5>Need Help?</h5>\n                                  <p><span>Give a call on</span><a href=\"tellto:08048100000\"> 08048100000</a></p>\n                              </div>\n                              <!-- single-cta -->\n                          </div>\n                      </div>\n                      <!-- cta -->\n                  </div>\n                  <!-- recommended-cta-->\n\n              </div>\n              <!-- row -->\n          </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/pages/favourite-ads/favourite-ads.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/favourite-ads/favourite-ads.component.ts ***!
  \****************************************************************/
/*! exports provided: FavouriteAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteAdsComponent", function() { return FavouriteAdsComponent; });
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

var FavouriteAdsComponent = /** @class */ (function () {
    function FavouriteAdsComponent() {
    }
    FavouriteAdsComponent.prototype.ngOnInit = function () {
    };
    FavouriteAdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourite-ads',
            template: __webpack_require__(/*! ./favourite-ads.component.html */ "./src/app/pages/favourite-ads/favourite-ads.component.html"),
            styles: [__webpack_require__(/*! ./favourite-ads.component.css */ "./src/app/pages/favourite-ads/favourite-ads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FavouriteAdsComponent);
    return FavouriteAdsComponent;
}());



/***/ }),

/***/ "./src/app/pages/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- world-gmap -->\n<section id=\"main\" class=\"clearfix home-two\">\n  <!-- gmap -->\n  <div id=\"road_map\"></div>\n\n  <div class=\"container\">\n      <div class=\"row\">\n          <!-- banner -->\n          <div class=\"col-sm-12\">\n              <div class=\"banner\">\n                  <!-- banner-form -->\n                  <div class=\"banner-form banner-form-full\">\n                      <form action=\"#\">\n                          <!-- category-change -->\n                          <div class=\"dropdown category-dropdown\">\n                              <a data-toggle=\"dropdown\" href=\"#\"><span class=\"change-text\">Select Category</span> <i class=\"fa fa-angle-down\"></i></a>\n                              <ul class=\"dropdown-menu category-change\">\n                                  <li><a href=\"#\">Fashion & Beauty</a></li>\n                                  <li><a href=\"#\">Cars & Vehicles</a></li>\n                                  <li><a href=\"#\">Electronics & Gedgets</a></li>\n                                  <li><a href=\"#\">Real Estate</a></li>\n                                  <li><a href=\"#\">Sports & Games</a></li>\n                              </ul>\n                          </div>\n                          <!-- category-change -->\n\n                          <!-- language-dropdown -->\n                          <div class=\"dropdown category-dropdown language-dropdown \">\n                              <a data-toggle=\"dropdown\" href=\"#\"><span class=\"change-text\">United Kingdom</span> <i class=\"fa fa-angle-down\"></i></a>\n                              <ul class=\"dropdown-menu  language-change\">\n                                  <li><a href=\"#\">United Kingdom</a></li>\n                                  <li><a href=\"#\">United States</a></li>\n                                  <li><a href=\"#\">China</a></li>\n                                  <li><a href=\"#\">Russia</a></li>\n                              </ul>\n                          </div>\n                          <!-- language-dropdown -->\n\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Type Your key word\">\n                          <button type=\"submit\" class=\"form-control\" value=\"Search\">Search</button>\n                      </form>\n                  </div>\n                  <!-- banner-form -->\n              </div>\n          </div>\n          <!-- banner -->\n      </div>\n      <!-- row -->\n\n      <!-- category-ad -->\n      <section class=\"text-center\" *ngIf=\"sections\">\n          <ul class=\"category-list\">\n            <li class=\"category-item\" *ngFor=\"let x of sections\">\n                  <a >\n                      <div class=\"category-icon\">\n                        <img [src]=\"x.image\" alt=\"images\" class=\"img-responsive\">\n                      </div>\n                      <span class=\"category-title\">{{x.title}}</span>\n                      <span class=\"category-quantity\">( {{x.total || 0}})</span>\n                  </a>\n              </li>\n\n\n              <!-- <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/2.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Electrics & Gedgets</span>\n                      <span class=\"category-quantity\">(76212)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/3.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Real Estate</span>\n                      <span class=\"category-quantity\">(212)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/4.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Sports & Games</span>\n                      <span class=\"category-quantity\">(972)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/5.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Fshion & Beauty</span>\n                      <span class=\"category-quantity\">(1298)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/6.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Pets & Animals</span>\n                      <span class=\"category-quantity\">(76212)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/9.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Home Appliances</span>\n                      <span class=\"category-quantity\">(1298)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/10.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Matrimony Services</span>\n                      <span class=\"category-quantity\">(76212)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/11.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Music & Arts</span>\n                      <span class=\"category-quantity\">(212)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/12.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Miscellaneous </span>\n                      <span class=\"category-quantity\">(1298)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/7.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Job Openings </span>\n                      <span class=\"category-quantity\">(124)</span>\n                  </a>\n              </li>\n\n\n              <li class=\"category-item\">\n                  <a href=\"categories.html\">\n                      <div class=\"category-icon\"><img src=\"./assets/images/icon/8.png\" alt=\"images\" class=\"img-responsive\"></div>\n                      <span class=\"category-title\">Books & Magazines</span>\n                      <span class=\"category-quantity\">(972)</span>\n                  </a>\n              </li> -->\n\n          </ul>\n      </section>\n      <!-- category-ad -->\n\n<br>\n      <!-- featureds -->\n      <div class=\"section featureds\">\n          <div class=\"row\">\n              <!-- featured-top -->\n              <div class=\"col-sm-12\">\n                  <div class=\"featured-top\">\n                      <h4>Featured Ads</h4>\n                  </div>\n              </div>\n              <!-- featured-top -->\n          </div>\n\n          <div class=\"row\" *ngIf=\"ads\">\n              <!-- featured -->\n              <div class=\"col-md-4 col-lg-3\" *ngFor=\"let x of ads\">\n                  <!-- featured -->\n                  <div class=\"featured\" >\n                      <div class=\"featured-image\">\n                          <a ><img [src]=\"x.photos[0]\" alt=\"\" class=\"img-respocive\"></a>\n                          <a href=\"#\" class=\"verified\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Verified\" *ngIf=\"x.verified\"><i class=\"fa fa-check-square-o\"></i></a>\n                      </div>\n\n                      <!-- ad-info -->\n                      <div class=\"ad-info\" (click)=\"goDetails(x)\">\n                          <h3 class=\"item-price\">{{x.price | currency}}</h3>\n                          <h4 class=\"item-title\"><a >{{x?.title }}</a></h4>\n                          <div class=\"item-cat\">\n                              <span><a > {{x?.sectionName }} / {{x?.categoryName }}</a></span>\n                          </div>\n                      </div>\n                      <!-- ad-info -->\n\n                      <!-- ad-meta -->\n                      <div class=\"ad-meta\">\n                          <div class=\"meta-content\">\n                              <span class=\"dated\"><a href=\"#\">{{api.getDate(x?.date)}} </a></span>\n                          </div>\n                          <!-- item-info-right -->\n                          <div class=\"user-option pull-right\">\n                              <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Los Angeles, USA\"><i class=\"fa fa-map-marker\"></i> </a>\n                              <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Individual\"><i class=\"fa fa-suitcase\"></i> </a>\n                          </div>\n                          <!-- item-info-right -->\n                      </div>\n                      <!-- ad-meta -->\n                  </div>\n                  <!-- featured -->\n              </div>\n              <!-- featured -->\n\n\n\n          </div>\n          <!-- row -->\n\n          <!-- pagination  -->\n          <div class=\"text-center\">\n              <ul class=\"pagination \">\n                  <li><a href=\"#\"><i class=\"fa fa-chevron-left\"></i></a></li>\n                  <li><a href=\"#\">1</a></li>\n                  <li class=\"active\"><a href=\"#\">2</a></li>\n                  <li><a href=\"#\">3</a></li>\n                  <li><a href=\"#\">4</a></li>\n                  <li><a href=\"#\">5</a></li>\n                  <li><a>...</a></li>\n                  <li><a href=\"#\">10</a></li>\n                  <li><a href=\"#\">20</a></li>\n                  <li><a href=\"#\">30</a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-chevron-right\"></i></a></li>\n              </ul>\n          </div>\n          <!-- pagination  -->\n      </div>\n      <!-- featureds -->\n\n\n      <!-- cta -->\n      <div class=\"section cta text-center\">\n          <div class=\"row\">\n              <!-- single-cta -->\n              <div class=\"col-sm-4\">\n                  <div class=\"single-cta\">\n                      <!-- cta-icon -->\n                      <div class=\"cta-icon icon-secure\">\n                          <img src=\"./assets/images/icon/13.png\" alt=\"Icon\" class=\"img-responsive\">\n                      </div>\n                      <!-- cta-icon -->\n\n                      <h4>Secure Trading</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                  </div>\n              </div>\n              <!-- single-cta -->\n\n              <!-- single-cta -->\n              <div class=\"col-sm-4\">\n                  <div class=\"single-cta\">\n                      <!-- cta-icon -->\n                      <div class=\"cta-icon icon-support\">\n                          <img src=\"./assets/images/icon/14.png\" alt=\"Icon\" class=\"img-responsive\">\n                      </div>\n                      <!-- cta-icon -->\n\n                      <h4>24/7 Support</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                  </div>\n              </div>\n              <!-- single-cta -->\n\n              <!-- single-cta -->\n              <div class=\"col-sm-4\">\n                  <div class=\"single-cta\">\n                      <!-- cta-icon -->\n                      <div class=\"cta-icon icon-trading\">\n                          <img src=\"./assets/images/icon/15.png\" alt=\"Icon\" class=\"img-responsive\">\n                      </div>\n                      <!-- cta-icon -->\n\n                      <h4>Easy Trading</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                  </div>\n              </div>\n              <!-- single-cta -->\n          </div>\n      </div>\n      <!-- cta -->\n\n  </div>\n  <!-- container -->\n</section>\n<!-- world-gmap -->\n\n<!-- download -->\n<section id=\"download\" class=\"clearfix parallax-section\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-12 text-center\">\n              <h2>Download on App Store</h2>\n          </div>\n      </div>\n      <!-- row -->\n\n      <!-- row -->\n      <div class=\"row\">\n          <!-- download-app -->\n          <div class=\"col-sm-4\">\n              <a href=\"#\" class=\"download-app\">\n      <img src=\"./assets/images/icon/16.png\" alt=\"Image\" class=\"img-responsive\">\n      <span class=\"pull-left\">\n        <span>available on</span>\n        <strong>Google Play</strong>\n      </span>\n    </a>\n          </div>\n          <!-- download-app -->\n\n          <!-- download-app -->\n          <div class=\"col-sm-4\">\n              <a href=\"#\" class=\"download-app\">\n      <img src=\"./assets/images/icon/17.png\" alt=\"Image\" class=\"img-responsive\">\n      <span class=\"pull-left\">\n        <span>available on</span>\n        <strong>App Store</strong>\n      </span>\n    </a>\n          </div>\n          <!-- download-app -->\n\n          <!-- download-app -->\n          <div class=\"col-sm-4\">\n              <a href=\"#\" class=\"download-app\">\n      <img src=\"./assets/images/icon/18.png\" alt=\"Image\" class=\"img-responsive\">\n      <span class=\"pull-left\">\n        <span>available on</span>\n        <strong>Windows Store</strong>\n      </span>\n    </a>\n          </div>\n          <!-- download-app -->\n      </div>\n      <!-- row -->\n  </div>\n  <!-- contaioner -->\n</section>\n<!-- download -->\n\n<!-- footer -->\n<footer id=\"footer\" class=\"clearfix\">\n  <!-- footer-top -->\n  <section class=\"footer-top clearfix\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <!-- footer-widget -->\n              <div class=\"col-sm-3\">\n                  <div class=\"footer-widget\">\n                      <h3>Quik Links</h3>\n                      <ul>\n                          <li><a href=\"#\">About Us</a></li>\n                          <li><a href=\"#\">Contact Us</a></li>\n                          <li><a href=\"#\">Careers</a></li>\n                          <li><a href=\"#\">All Cities</a></li>\n                          <li><a href=\"#\">Help & Support</a></li>\n                          <li><a href=\"#\">Advertise With Us</a></li>\n                          <li><a href=\"#\">Blog</a></li>\n                      </ul>\n                  </div>\n              </div>\n              <!-- footer-widget -->\n\n              <!-- footer-widget -->\n              <div class=\"col-sm-3\">\n                  <div class=\"footer-widget\">\n                      <h3>How to sell fast</h3>\n                      <ul>\n                          <li><a href=\"#\">How to sell fast</a></li>\n                          <li><a href=\"#\">Membership</a></li>\n                          <li><a href=\"#\">Banner Advertising</a></li>\n                          <li><a href=\"#\">Promote your ad</a></li>\n                          <li><a href=\"#\">Trade Delivers</a></li>\n                          <li><a href=\"#\">FAQ</a></li>\n                      </ul>\n                  </div>\n              </div>\n              <!-- footer-widget -->\n\n              <!-- footer-widget -->\n              <div class=\"col-sm-3\">\n                  <div class=\"footer-widget social-widget\">\n                      <h3>Follow us on</h3>\n                      <ul>\n                          <li><a href=\"#\"><i class=\"fa fa-facebook-official\"></i>Facebook</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-twitter-square\"></i>Twitter</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-google-plus-square\"></i>Google+</a></li>\n                          <li><a href=\"#\"><i class=\"fa fa-youtube-play\"></i>youtube</a></li>\n                      </ul>\n                  </div>\n              </div>\n              <!-- footer-widget -->\n\n              <!-- footer-widget -->\n              <div class=\"col-sm-3\">\n                  <div class=\"footer-widget news-letter\">\n                      <h3>Newsletter</h3>\n                      <p>Trade is Worldest leading classifieds platform that brings!</p>\n                      <!-- form -->\n                      <form action=\"#\">\n                          <input type=\"email\" class=\"form-control\" placeholder=\"Your email id\">\n                          <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n                      </form>\n                      <!-- form -->\n                  </div>\n              </div>\n              <!-- footer-widget -->\n          </div>\n          <!-- row -->\n      </div>\n      <!-- container -->\n  </section>\n  <!-- footer-top -->\n\n\n  <div class=\"footer-bottom clearfix text-center\">\n      <div class=\"container\">\n          <p>Copyright &copy; 2016. Developed by <a href=\"http://themeregion.com/\">ThemeRegion</a></p>\n      </div>\n  </div>\n  <!-- footer-bottom -->\n</footer>\n<!-- footer -->\n\n<!--/Preset Style Chooser-->\n<div class=\"style-chooser\">\n  <div class=\"style-chooser-inner\">\n      <a href=\"#\" class=\"toggler\"><i class=\"fa fa-life-ring fa-spin\"></i></a>\n      <h4>Presets</h4>\n      <ul class=\"preset-list clearfix\">\n          <li class=\"preset1 active\" data-preset=\"1\"><a href=\"#\" data-color=\"preset1\"></a></li>\n          <li class=\"preset2\" data-preset=\"2\"><a href=\"#\" data-color=\"preset2\"></a></li>\n          <li class=\"preset3\" data-preset=\"3\"><a href=\"#\" data-color=\"preset3\"></a></li>\n          <li class=\"preset4\" data-preset=\"4\"><a href=\"#\" data-color=\"preset4\"></a></li>\n      </ul>\n  </div>\n</div>\n<!--/End:Preset Style Chooser-->\n"

/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = /** @class */ (function () {
    function IndexComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getSections();
        this.getAds();
    };
    IndexComponent.prototype.getSections = function () {
        var _this = this;
        return this.api.getCategories().pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (docArray) {
            return docArray.map(function (doc) {
                console.log(doc);
                var data = doc.payload.doc.data();
                var id = doc.payload.doc.id;
                return (__assign({ id: id }, data));
            });
        })).subscribe(function (response) {
            console.log(response);
            _this.sections = response;
        });
    };
    IndexComponent.prototype.getAds = function () {
        var _this = this;
        return this.api.getAds()
            .pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (docArray) {
            return docArray.map(function (doc) {
                var data = doc.payload.doc.data();
                var id = doc.payload.doc.id;
                return (__assign({ id: id }, data));
            });
        })).subscribe(function (ads) {
            console.log(ads);
            _this.ads = ads;
        });
    };
    IndexComponent.prototype.goDetails = function (data) {
        this.router.navigate(['ads/' + data.id]);
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/pages/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/pages/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-ads/my-ads.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/my-ads/my-ads.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/my-ads/my-ads.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/my-ads/my-ads.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-ads works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/my-ads/my-ads.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/my-ads/my-ads.component.ts ***!
  \**************************************************/
/*! exports provided: MyAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdsComponent", function() { return MyAdsComponent; });
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

var MyAdsComponent = /** @class */ (function () {
    function MyAdsComponent() {
    }
    MyAdsComponent.prototype.ngOnInit = function () {
    };
    MyAdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-ads',
            template: __webpack_require__(/*! ./my-ads.component.html */ "./src/app/pages/my-ads/my-ads.component.html"),
            styles: [__webpack_require__(/*! ./my-ads.component.css */ "./src/app/pages/my-ads/my-ads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyAdsComponent);
    return MyAdsComponent;
}());



/***/ }),

/***/ "./src/app/pages/pending-ads/pending-ads.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/pending-ads/pending-ads.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pending-ads/pending-ads.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/pending-ads/pending-ads.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pending-ads works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/pending-ads/pending-ads.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/pending-ads/pending-ads.component.ts ***!
  \************************************************************/
/*! exports provided: PendingAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingAdsComponent", function() { return PendingAdsComponent; });
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

var PendingAdsComponent = /** @class */ (function () {
    function PendingAdsComponent() {
    }
    PendingAdsComponent.prototype.ngOnInit = function () {
    };
    PendingAdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-ads',
            template: __webpack_require__(/*! ./pending-ads.component.html */ "./src/app/pages/pending-ads/pending-ads.component.html"),
            styles: [__webpack_require__(/*! ./pending-ads.component.css */ "./src/app/pages/pending-ads/pending-ads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PendingAdsComponent);
    return PendingAdsComponent;
}());



/***/ }),

/***/ "./src/app/pages/post-ad/post-ad.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/post-ad/post-ad.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/post-ad/post-ad.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/post-ad/post-ad.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main -->\n<section id=\"main\" class=\"clearfix ad-details-page\" *ngIf=\"data\">\n  <div class=\"container\">\n\n    <div class=\"breadcrumb-section\">\n      <!-- breadcrumb -->\n      <ol class=\"breadcrumb\">\n        <li><a href=\"index.html\">Home</a></li>\n        <li>Ad Post</li>\n      </ol>\n      <!-- breadcrumb -->\n      <h2 class=\"title\">Post An Ad</h2>\n    </div>\n    <!-- banner -->\n\n    <div class=\"adpost-details\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <fieldset>\n            <div class=\"section postdetails\">\n              <h4>Sell an item or service <span class=\"pull-right\">* Mandatory Fields</span></h4>\n              <div class=\"form-group selected-product\">\n                <ul class=\"select-category list-inline\" >\n                  <li *ngIf=\"section\">\n                    <a href=\"ad-post.html\">\n                      <span class=\"select\">\n                        <!-- <img src=\"images/icon/2.png\" alt=\"Images\" class=\"img-responsive\"> -->\n                      </span>\n                      {{section.sectionName}}\n                    </a>\n                  </li>\n\n                  <li class=\"active\" *ngIf=\"category\">\n                    <a href=\"#\">{{category.categoryName}}</a>\n                  </li>\n                </ul>\n                <a class=\"edit\" href=\"#\"><i class=\"fa fa-pencil\"></i>Edit</a>\n              </div>\n              <!-- <div class=\"row form-group\">\n                                      <label class=\"col-sm-3\">Type of ad<span class=\"required\">*</span></label>\n                                      <div class=\"col-sm-9 user-type\">\n                                          <input type=\"radio\" name=\"sellType\" value=\"newsell\" id=\"newsell\"> <label for=\"newsell\">I want to sell </label>\n                                          <input type=\"radio\" name=\"sellType\" value=\"newbuy\" id=\"newbuy\"> <label for=\"newbuy\">want to buy</label>\n                                      </div>\n                                  </div> -->\n              <div class=\"row form-group add-title\">\n                <label class=\"col-sm-3 label-title\">Title for your Ad<span class=\"required\">*</span></label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control\" id=\"text\" placeholder=\"ex, Sony Xperia dual sim 100% brand new \"\n                    [(ngModel)]=\"ad.title\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <label class=\"col-sm-2 label-title\">Category</label>\n                <div class=\"col-sm-4\" *ngIf=\"sections\">\n                  <select name=\"address\" class=\"form-control\" (change)=\"handleSection($event)\">\n                    <option value=\"\">---</option>\n                    <option *ngFor=\"let x of sections\" value='{ \"sectionName\" : \"{{x.title}}\" , \"sectionId\": \"{{x.id}}\"  }'>{{x.title}}</option>\n                  </select>\n                </div>\n                <label class=\"col-sm-2 label-title\">Sub-Category</label>\n                <div class=\"col-sm-4\">\n                  <select name=\"address\" class=\"form-control\" [disabled]=\"!categories\" (change)=\"handleSubCategory($event)\">\n                    <option value=\"\">---</option>\n                    <option *ngFor=\"let x of categories\" value='{ \"categoryName\" : \"{{x.title}}\" , \"cateogryId\": \"{{x.id}}\"  }'>{{x.title}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row form-group add-image\">\n                <label class=\"col-sm-3 label-title\">Photos for your ad <span>(This will be your cover photo )</span>\n                </label>\n                <div class=\"col-sm-9\">\n                  <h5><i class=\"fa fa-upload\" aria-hidden=\"true\"></i>Select Files to Upload / Drag and Drop Files <span>You\n                      can add multiple images.</span></h5>\n                  <div class=\"upload-section\">\n\n                    <label class=\"upload-image\" for=\"upload-image-one\">\n                      <input type=\"file\" (change)=\"fileChange($event,0)\" placeholder=\"Upload file\" id=\"upload-image-one\">\n                      <div id=\"preview0\" class=\"preview\">\n                        <img src=\"\" class=\"upload-image-one\">\n                      </div>\n                    </label>\n\n\n                    <label class=\"upload-image\" for=\"upload-image-two\">\n                      <input type=\"file\" id=\"upload-image-two\" (change)=\"fileChange($event,1)\">\n                      <div id=\"preview1\" class=\"preview\">\n                        <img src=\"\" class=\"upload-image-one\">\n                      </div>\n                    </label>\n                    <label class=\"upload-image\" for=\"upload-image-three\">\n                      <input type=\"file\" id=\"upload-image-three\" (change)=\"fileChange($event,2)\">\n                      <div id=\"preview2\" class=\"preview\">\n                        <img src=\"\" class=\"upload-image-one\">\n                      </div>\n                    </label>\n\n                    <label class=\"upload-image\" for=\"upload-imagefour\">\n\n                      <input type=\"file\" id=\"upload-imagefour\" (change)=\"fileChange($event,3)\">\n                      <div id=\"preview3\" class=\"preview\">\n                        <img src=\"\" class=\"upload-image-one\">\n                      </div>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row form-group select-condition\">\n                <label class=\"col-sm-3\">Condition<span class=\"required\">*</span></label>\n                <div class=\"col-sm-9\">\n                  <input type=\"radio\" name=\"itemCon\" value=\"new\" id=\"new\" [(ngModel)]=\"ad.condition\">\n                  <label for=\"new\">New</label>\n                  <input type=\"radio\" name=\"itemCon\" value=\"used\" id=\"used\" [(ngModel)]=\"ad.condition\">\n                  <label for=\"used\">Used</label>\n                </div>\n              </div>\n              <div class=\"row form-group select-price\">\n                <label class=\"col-sm-3 label-title\">Price<span class=\"required\">*</span></label>\n                <div class=\"col-sm-9\">\n                  <label>PKR</label>\n                  <input type=\"text\" class=\"form-control\" id=\"text1\" [(ngModel)]=\"ad.price\">\n                  <input type=\"radio\" name=\"negotiable\" value=\"false\" id=\"negotiable\" [(ngModel)]=\"ad.negotiable\">\n                  <label for=\"negotiable\">Negotiable </label>\n                </div>\n              </div>\n              <!--     <div class=\"row form-group brand-name\">\n                                      <label class=\"col-sm-3 label-title\">Brand Name<span class=\"required\">*</span></label>\n                                      <div class=\"col-sm-9\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"ex, Sony Xperia\"  [(ngModel)]=\"ad.negotiable\">\n                                      </div>\n                                  </div>\n                                <div class=\"row form-group additional\">\n                                      <label class=\"col-sm-3 label-title\">Additional<span class=\"required\">*</span></label>\n                                      <div class=\"col-sm-9\">\n                                          <div class=\"checkbox\">\n                                              <label for=\"camera\"><input type=\"checkbox\" name=\"camera\" id=\"camera\"> Camera</label>\n                                              <label for=\"dual-sim\"><input type=\"checkbox\" name=\"dual-sim\" id=\"dual-sim\"> Dual SIM</label>\n                                              <label for=\"keyboard\"><input type=\"checkbox\" name=\"keyboard\" id=\"keyboard\">  Physical keyboard</label>\n                                              <label for=\"3g\"><input type=\"checkbox\" name=\"3g\" id=\"3g\"> 3G</label>\n\n                                              <label for=\"gsm\"><input type=\"checkbox\" name=\"gsm\" id=\"gsm\"> GSM</label>\n\n                                              <label for=\"screen\"><input type=\"checkbox\" name=\"screen\" id=\"screen\"> Touch screen</label>\n                                          </div>\n                                      </div>\n                                  </div>\n\n                                  <div class=\"row form-group model-name\">\n                                      <label class=\"col-sm-3 label-title\">Model</label>\n                                      <div class=\"col-sm-9\">\n                                          <input type=\"text\" class=\"form-control\" id=\"model\" placeholder=\"ex, Sony Xperia dual sim 100% brand new \" [(ngModel)]=\"ad.phone\">\n                                      </div>\n                                  </div> -->\n\n              <div class=\"row form-group item-description\">\n                <label class=\"col-sm-3 label-title\">Description<span class=\"required\">*</span></label>\n                <div class=\"col-sm-9\">\n                  <textarea class=\"form-control\" id=\"textarea\" placeholder=\"Write few lines about your products\" rows=\"8\"\n                    [(ngModel)]=\"ad.description\"></textarea>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-9 col-sm-offset-3\">\n                  <p>5000 characters left</p>\n                </div>\n              </div>\n            </div>\n            <!-- section -->\n\n            <div class=\"section seller-info\">\n              <h4>Seller Information</h4>\n              <div class=\"row form-group\">\n                <label class=\"col-sm-3 label-title\">Seller Type<span class=\"required\">*</span></label>\n                <div class=\"col-sm-9\">\n                  <input type=\"radio\" name=\"sellerType\" value=\"individual\" id=\"individual\" [(ngModel)]=\"ad.sellerType\">\n                  <label for=\"individual\">Individual</label>\n                  <input type=\"radio\" name=\"sellerType\" value=\"dealer\" id=\"dealer\" [(ngModel)]=\"ad.sellerType\">\n                  <label for=\"dealer\">Dealer</label>\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <label class=\"col-sm-3 label-title\">Your Name<span class=\"required\">*</span></label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"ex, Jhon Doe\" [(ngModel)]=\"ad.customerName\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <label class=\"col-sm-3 label-title\">Your Email ID<span class=\"required\">*</span></label>\n                <div class=\"col-sm-9\">\n                  <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"ex, jhondoe@mail.com\" [(ngModel)]=\"ad.email\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <label class=\"col-sm-3 label-title\">Mobile Number<span class=\"required\">*</span></label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" name=\"mobileNumber\" class=\"form-control\" placeholder=\"ex, +912457895\" [(ngModel)]=\"ad.phone\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <label class=\"col-sm-3 label-title\">Address</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"ex, alekdera House, coprotec, usa\"\n                    [(ngModel)]=\"ad.address\">\n                </div>\n              </div>\n              <div class=\"row form-group\">\n                <label class=\"col-sm-2 label-title\">City</label>\n                <div class=\"col-sm-4\">\n                  <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"ex, alekdera House, coprotec, usa\"\n                    [(ngModel)]=\"ad.city\">\n                </div>\n                <label class=\"col-sm-2 label-title\">Country</label>\n                <div class=\"col-sm-4\">\n                  <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"ex, alekdera House, coprotec, usa\"\n                    [(ngModel)]=\"ad.country\">\n                </div>\n              </div>\n\n            </div>\n            <!-- section -->\n            <!--\n                              <div class=\"section\">\n                                  <h4>Make your Ad Premium </h4>\n                                  <p>More replies means more interested buyers. With lots of interested buyers, you have a better chance of selling for the price that you want. <a href=\"#\">Learn more</a></p>\n                                  <ul class=\"premium-options\">\n                                      <li class=\"premium\">\n                                          <input type=\"radio\" name=\"premiumOption\" value=\"day-one\" id=\"day-one\">\n                                          <label for=\"day-one\">Regular Ad Per Day</label>\n                                          <span>$20.00</span>\n                                      </li>\n                                      <li class=\"premium\">\n                                          <input type=\"radio\" name=\"premiumOption\" value=\"day-two\" id=\"day-two\">\n                                          <label for=\"day-two\">Top Ad for 3 days</label>\n                                          <span>$30.00</span>\n                                      </li>\n                                      <li class=\"premium\">\n                                          <input type=\"radio\" name=\"premiumOption\" value=\"day-three\" id=\"day-three\">\n                                          <label for=\"day-three\">Top Ad for 7 days</label>\n                                          <span>$50.00</span>\n                                      </li>\n                                      <li class=\"premium\">\n                                          <input type=\"radio\" name=\"premiumOption\" value=\"day-four\" id=\"day-four\">\n                                          <label for=\"day-four\">Daily Bump Up for 7 days</label>\n                                          <span>$100.00</span>\n                                      </li>\n                                  </ul>\n                              </div> -->\n            <!-- section -->\n\n            <div class=\"checkbox section agreement\">\n              <label for=\"send\">\n                <input type=\"checkbox\" name=\"send\" id=\"send\">\n                Send me Trade Email/SMS Alerts for people looking to buy mobile handsets in www By clicking \"Post\", you\n                agree to our <a href=\"#\">Terms of Use</a> and <a href=\"#\">Privacy Policy</a> and acknowledge that you\n                are the rightful owner of this item and using Trade to find a genuine buyer.\n              </label>\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"postAd()\">Post Your Ad</button>\n            </div>\n            <!-- section -->\n\n          </fieldset>\n          <!-- form -->\n        </div>\n\n\n        <!-- quick-rules -->\n        <div class=\"col-md-4\">\n          <div class=\"section quick-rules\">\n            <h4>Quick rules</h4>\n            <p class=\"lead\">Posting an ad on <a href=\"#\">Topa.pk</a> is free! However, all ads must follow our rules:</p>\n\n            <ul>\n              <li>Make sure you post in the correct category.</li>\n              <li>Do not post the same ad more than once or repost an ad within 48 hours.</li>\n              <li>Do not upload pictures with watermarks.</li>\n              <li>Do not post ads containing multiple items unless it's a package deal.</li>\n              <li>Do not put your email or phone numbers in the title or description.</li>\n              <li>Make sure you post in the correct category.</li>\n              <li>Do not post the same ad more than once or repost an ad within 48 hours.</li>\n              <li>Do not upload pictures with watermarks.</li>\n              <li>Do not post ads containing multiple items unless it's a package deal.</li>\n            </ul>\n          </div>\n        </div>\n        <!-- quick-rules -->\n      </div>\n      <!-- photos-ad -->\n    </div>\n  </div>\n  <!-- container -->\n</section>\n<!-- main -->\n"

/***/ }),

/***/ "./src/app/pages/post-ad/post-ad.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/post-ad/post-ad.component.ts ***!
  \****************************************************/
/*! exports provided: PostAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAdComponent", function() { return PostAdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostAdComponent = /** @class */ (function () {
    function PostAdComponent(api, storage) {
        this.api = api;
        this.storage = storage;
        this.photos = [];
        this.ad = {
            title: '',
            image: '',
            condition: '',
            price: '',
            sellerType: '',
            description: '',
            customerName: '',
            customerId: '',
            date: null,
            featured: null,
            negotiable: false,
            phone: null,
            sectionName: '',
            sectionId: '',
            verified: false,
            country: '',
            city: '',
            address: '',
            email: '',
            photos: []
        };
    }
    PostAdComponent.prototype.ngOnInit = function () {
        this.getCustomer();
        this.getCategories();
    };
    PostAdComponent.prototype.getCustomer = function () {
        var _this = this;
        var id = localStorage.getItem('uid');
        console.log(id);
        this.api.getCustomer(id).subscribe(function (resp) {
            _this.data = resp;
            _this.ad.customerName = _this.data.name;
            _this.ad.customerId = id;
            _this.ad.email = _this.data.email;
            _this.ad.phone = _this.data.phone;
        });
    };
    PostAdComponent.prototype.getCategories = function () {
        var _this = this;
        this.api.getCategories()
            .pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (docArray) {
            return docArray.map(function (doc) {
                var data = doc.payload.doc.data();
                var id = doc.payload.doc.id;
                return (__assign({ id: id }, data));
            });
        }))
            .subscribe(function (res) {
            _this.sections = res;
            console.log(_this.sections);
        });
    };
    PostAdComponent.prototype.getSubCategories = function (sectionId) {
        var _this = this;
        this.api.getSectionCategories(sectionId)
            .pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (docArray) {
            return docArray.map(function (doc) {
                var data = doc.payload.doc.data();
                var id = doc.payload.doc.id;
                return (__assign({ id: id }, data));
            });
        }))
            .subscribe(function (res) {
            _this.categories = res;
            console.log(_this.categories);
        });
    };
    PostAdComponent.prototype.postAd = function () {
        var _this = this;
        this.ad.date = new Date();
        //uploading files
        var x = new Promise(function (resolve, reject) {
            var items = 0;
            _this.photos.forEach(function (file, index) {
                var filePath = _this.ad.customerId + '/ads/' + file.name;
                var fileRef = _this.storage.ref(filePath);
                var task = _this.storage.upload(filePath, file);
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                    fileRef.getDownloadURL().subscribe(function (resp) {
                        console.log(resp);
                        _this.ad.photos.push(resp);
                    });
                    items++;
                    console.log(items);
                    if (items === _this.photos.length) {
                        console.log(_this.ad.photos);
                        resolve();
                    }
                }))
                    .subscribe();
            });
        }).then(function (dox) {
            _this.ad.image = _this.ad.photos[0];
            var data = __assign({}, _this.ad, _this.category, _this.section);
            console.log(data);
            _this.api.createAd(data).then(function (res) {
                console.log("Ad has been created bitch!");
            });
        });
    };
    PostAdComponent.prototype.handleSection = function (e) {
        this.categories = null;
        var data = JSON.parse(e.target.value);
        console.log(data);
        this.section = data;
        //update subcategories
        this.getSubCategories(data.sectionId);
    };
    PostAdComponent.prototype.handleSubCategory = function (e) {
        var data = JSON.parse(e.target.value);
        console.log(data);
        this.category = data;
    };
    PostAdComponent.prototype.fileChange = function (event, num) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.img = document.querySelector("#preview" + num + " img");
            this.img.file = file;
            this.photos.push(file);
            console.log(this.photos);
            var reader = new FileReader();
            reader.onload = (function (aImg) {
                return function (e) {
                    aImg.src = e.target.result;
                };
            })(this.img);
            reader.readAsDataURL(file);
        }
    };
    PostAdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-ad',
            template: __webpack_require__(/*! ./post-ad.component.html */ "./src/app/pages/post-ad/post-ad.component.html"),
            styles: [__webpack_require__(/*! ./post-ad.component.css */ "./src/app/pages/post-ad/post-ad.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], PostAdComponent);
    return PostAdComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\" *ngIf=\"user\">\n  <div class=\"row\">\n      <div class=\"col-sm-8\">\n          <div class=\"user-pro-section\">\n              <!-- profile-details -->\n              <div class=\"profile-details section\">\n                  <h2>Profile Details</h2>\n                  <!-- form -->\n                  <div class=\"form-group\">\n                      <label>Full Name</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Jhon Doe\" [(ngModel)]=\"user.name\">\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label>Email ID</label>\n                      <input type=\"email\" class=\"form-control\" placeholder=\"jhondoe@mail.com\" [(ngModel)]=\"user.email\" disabled>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"name-three\">Mobile</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"+213 1234 56789\" [(ngModel)]=\"user.phone\" >\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label>Your City</label>\n                      <select class=\"form-control\" [(ngModel)]=\"user.city\" >\n      <option value=\"rawalpindi\">Rawalpindi</option>\n      <option value=\"islamabad\">Islamabad</option>\n      <option value=\"karachi\">Karachi</option>\n      <option value=\"lahore\">Lahore</option>\n    </select>\n                  </div>\n\n                  <div class=\"form-group\" [(ngModel)]=\"user.type\" >\n                      <label>You are a</label>\n                      <select class=\"form-control\">\n      <option value=\"#\">Dealer</option>\n      <option value=\"#\">Individual Seller</option>\n    </select>\n                  </div>\n              </div>\n              <!-- profile-details -->\n\n              <!-- change-password -->\n              <div class=\"change-password section\">\n                  <h2>Change password</h2>\n                  <!-- form -->\n                  <div class=\"form-group\">\n                      <label>Old Password</label>\n                      <input type=\"password\" class=\"form-control\" >\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label>New password</label>\n                      <input type=\"password\" class=\"form-control\">\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label>Confirm password</label>\n                      <input type=\"password\" class=\"form-control\">\n                  </div>\n              </div>\n              <!-- change-password -->\n\n              <!-- preferences-settings -->\n              <div class=\"preferences-settings section\">\n                  <h2>Preferences Settings</h2>\n                  <!-- checkbox -->\n                  <div class=\"checkbox\">\n                      <label><input type=\"checkbox\" name=\"logged\"> Comments are enabled on my ads </label>\n                      <label><input type=\"checkbox\" name=\"receive\"> I want to receive newsletter.</label>\n                      <label><input type=\"checkbox\" name=\"want\">I want to receive advice on buying and selling. </label>\n                  </div>\n                  <!-- checkbox -->\n              </div>\n              <!-- preferences-settings -->\n\n              <a (click)=\"updateProfile()\" class=\"btn\">Update Profile</a>\n              <a href=\"#\" class=\"btn cancle\">Cancle</a>\n          </div>\n          <!-- user-pro-edit -->\n      </div>\n      <!-- profile -->\n\n      <div class=\"col-sm-4 text-center\">\n          <div class=\"recommended-cta\">\n              <div class=\"cta\">\n                  <!-- single-cta -->\n                  <div class=\"single-cta\">\n                      <!-- cta-icon -->\n                      <div class=\"cta-icon icon-secure\">\n                          <img src=\"./assets/images/icon/13.png\" alt=\"Icon\" class=\"img-responsive\">\n                      </div>\n                      <!-- cta-icon -->\n\n                      <h4>Secure Trading</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                  </div>\n                  <!-- single-cta -->\n\n                  <!-- single-cta -->\n                  <div class=\"single-cta\">\n                      <!-- cta-icon -->\n                      <div class=\"cta-icon icon-support\">\n                          <img src=\"./assets/images/icon/14.png\" alt=\"Icon\" class=\"img-responsive\">\n                      </div>\n                      <!-- cta-icon -->\n\n                      <h4>24/7 Support</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                  </div>\n                  <!-- single-cta -->\n\n\n                  <!-- single-cta -->\n                  <div class=\"single-cta\">\n                      <!-- cta-icon -->\n                      <div class=\"cta-icon icon-trading\">\n                          <img src=\"./assets/images/icon/15.png\" alt=\"Icon\" class=\"img-responsive\">\n                      </div>\n                      <!-- cta-icon -->\n\n                      <h4>Easy Trading</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n                  </div>\n                  <!-- single-cta -->\n\n                  <!-- single-cta -->\n                  <div class=\"single-cta\">\n                      <h5>Need Help?</h5>\n                      <p><span>Give a call on</span><a href=\"tellto:08048100000\"> 08048100000</a></p>\n                  </div>\n                  <!-- single-cta -->\n              </div>\n          </div>\n          <!-- cta -->\n      </div>\n      <!-- recommended-cta-->\n  </div>\n  <!-- row -->\n</div>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, api) {
        this.auth = auth;
        this.api = api;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.uid = this.auth.getToken();
        console.log("uid is " + this.uid);
        this.getProfile(this.uid);
    };
    ProfileComponent.prototype.getProfile = function (uid) {
        var _this = this;
        this.api.getCustomer(uid).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.api.updateCustomer(this.uid, this.user).then(function (response) {
            //profile updated
            var data = _this.user;
            data.uid = _this.uid;
            _this.auth.setProfile(data);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/signin/signin.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signin/signin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/signin/signin.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signin/signin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- signin-page -->\n    <section id=\"main\" class=\"clearfix user-page\">\n        <div class=\"container\">\n            <div class=\"row text-center\">\n                <!-- user-login -->\n                <div class=\"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n                    <div class=\"user-account\">\n                        <h2>User Login</h2>\n                        <!-- form -->\n                        <form #loginForm=\"ngForm\" (submit)=\"submit(loginForm.value)\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\" >\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\">\n                            </div>\n                            <button type=\"submit\" href=\"#\" class=\"btn\">Login</button>\n                        </form>\n                        <!-- form -->\n\n                        <!-- forgot-password -->\n                        <div class=\"user-option\">\n                            <div class=\"checkbox pull-left\">\n                                <label for=\"logged\"><input type=\"checkbox\" name=\"logged\" id=\"logged\"> Keep me logged in </label>\n                            </div>\n                            <div class=\"pull-right forgot-password\">\n                                <a href=\"#\">Forgot password</a>\n                            </div>\n                        </div>\n                        <!-- forgot-password -->\n                    </div>\n                    <a href=\"#\" class=\"btn-primary\">Create a New Account</a>\n                </div>\n                <!-- user-login -->\n            </div>\n            <!-- row -->\n        </div>\n        <!-- container -->\n    </section>\n    <!-- signin-page -->\n"

/***/ }),

/***/ "./src/app/pages/signin/signin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(auth, api, router) {
        this.auth = auth;
        this.api = api;
        this.router = router;
        this.user = {
            email: "asmarakhan@gmail.com",
            password: "asmara123"
        };
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.submit = function (data) {
        var _this = this;
        console.log(data);
        this.auth.login(data.email, data.password).then(function (resp) {
            _this.api.getCustomer(resp.user.uid).subscribe(function (res) {
                console.log(res);
                if (res) {
                    console.log("Customer Logged In");
                    _this.auth.setToken(resp.user.uid);
                    _this.auth.setProfile(res);
                    _this.auth.loggedIn = true;
                    _this.router.navigate(['/dashboard/profile']);
                }
                else {
                    console.log("no data found in db..");
                }
            }, function (error) { return console.log(error); });
        }, function (err) {
            console.log(err);
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/pages/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/pages/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- signup-page -->\n   <section id=\"main\" class=\"clearfix user-page\">\n    <div class=\"container\">\n        <div class=\"row text-center\">\n            <!-- user-login -->\n            <div class=\"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n                <div class=\"user-account\">\n                    <h2>Create a Topa Account</h2>\n                    <form #registerForm=\"ngForm\" (submit)=\"submit(registerForm.value)\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Email Id\"  name=\"email\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  name=\"password\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\"  name=\"newpassword\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\"  name=\"phone\" ngModel>\n                        </div>\n                        <!-- select -->\n                        <select class=\"form-control\"  name=\"city\" ngModel>\n            <option value=\"\">Select City</option>\n            <option value=\"rawalpindi\">Rawalpindi</option>\n            <option value=\"islamabad\">Islamabad</option>\n            <option value=\"karachi\">Karachi</option>\n            <option value=\"lahore\">Lahore</option>\n          </select>\n                        <!-- select -->\n\n                        <div class=\"checkbox\">\n                            <label class=\"pull-left checked\" for=\"signing\"><input type=\"checkbox\" name=\"signing\" id=\"signing\"> By signing up for an account you agree to our Terms and Conditions </label>\n                        </div>\n                        <!-- checkbox -->\n                        <button type=\"submit\" class=\"btn\">Registration</button>\n                    </form>\n                    <!-- checkbox -->\n\n                </div>\n            </div>\n            <!-- user-login -->\n        </div>\n        <!-- row -->\n    </div>\n    <!-- container -->\n</section>\n<!-- signup-page -->\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, api, router) {
        this.auth = auth;
        this.api = api;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submit = function (data) {
        var _this = this;
        console.log(data);
        this.auth.signup(data.email, data.password).then(function (resp) {
            _this.api.createCustomer(resp.user.uid, data).then(function (res) {
                console.log("Customer Created");
                data.uid = resp.user.uid;
                _this.auth.setProfile(data);
                _this.router.navigate(['/dashboard/profile']);
            });
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(afs) {
        this.afs = afs;
    }
    /* :::::::::::: CUSTOMER ::::::::::::::: */
    // ~ CREATE
    ApiService.prototype.createCustomer = function (uid, data) {
        return this.afs.doc('customers/' + uid).set(data);
    };
    // ~ GET
    ApiService.prototype.getCustomer = function (uid) {
        return this.afs.doc('customers/' + uid).valueChanges();
    };
    // ~ DELETE
    ApiService.prototype.deleteCustomer = function (uid) {
        return this.afs.doc('customers/' + uid).delete();
    };
    // ~ UPDATE
    ApiService.prototype.updateCustomer = function (uid, data) {
        return this.afs.doc('customers/' + uid).update(data);
    };
    /* :::::::::::: CATEGORIES + SUBCATEGORIES::::::::::::::: */
    // ~ GET
    ApiService.prototype.getCategories = function () {
        return this.afs.collection('sections').snapshotChanges();
    };
    ApiService.prototype.getSubCategories = function () {
        return this.afs.collection('categories').snapshotChanges();
    };
    ApiService.prototype.getSectionCategories = function (sectionId) {
        return this.afs.collection('categories', function (ref) { return ref.where('sectionId', '==', sectionId); }).snapshotChanges();
    };
    /* :::::::::::: ADS ::::::::::::::: */
    // ~ CREATE
    ApiService.prototype.createAd = function (data) {
        return this.afs.collection('ads').add(data);
    };
    // ~ GET
    ApiService.prototype.getAd = function (uid) {
        return this.afs.doc('ads/' + uid).valueChanges();
    };
    ApiService.prototype.getAds = function () {
        return this.afs.collection('ads').snapshotChanges();
    };
    // ~ GET Customer Ads
    ApiService.prototype.getCustomerAds = function (customerId) {
        return this.afs.collection('ads', function (ref) { return ref.where('customerId', '==', customerId); }).snapshotChanges();
    };
    // ~ GET Category Ads
    ApiService.prototype.getCategoryAds = function (categoryId) {
        return this.afs.collection('ads', function (ref) { return ref.where('sectionId', '==', categoryId); }).snapshotChanges();
    };
    // ~ GET Sub-Category Ads
    ApiService.prototype.getSubCategoryAds = function (subCategoryId) {
        return this.afs.collection('ads', function (ref) { return ref.where('categoryId', '==', subCategoryId); }).snapshotChanges();
    };
    // ~ GET User Favorite Ads
    ApiService.prototype.getCustomerFavoriteAds = function (customerId) {
        return this.afs.collection('favorites', function (ref) { return ref.where('customerId', '==', customerId); }).snapshotChanges();
    };
    // ~ DELETE
    ApiService.prototype.deleteAd = function (uid) {
        return this.afs.doc('ads/' + uid).delete();
    };
    // ~ UPDATE
    ApiService.prototype.updateAd = function (uid, data) {
        return this.afs.doc('ads/' + uid).update(data);
    };
    ApiService.prototype.getDate = function (timestamp) {
        return timestamp.toDate().toDateString();
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.loggedIn = false;
        this.checkProfile();
    }
    /* :::::::::::: CUSTOMER ::::::::::::::: */
    AuthService.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signup = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.setToken = function (uid) {
        return localStorage.setItem('uid', uid);
    };
    AuthService.prototype.setProfile = function (data) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        localStorage.setItem('phone', data.phone);
        localStorage.setItem('city', data.city);
        localStorage.setItem('image', data.image);
        this.user = data;
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('uid');
    };
    AuthService.prototype.getProfile = function () {
        return {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone'),
            city: localStorage.getItem('city'),
            uid: localStorage.getItem('uid'),
            image: localStorage.getItem('image')
        };
    };
    AuthService.prototype.checkProfile = function () {
        var uid = localStorage.getItem('uid');
        if (uid) {
            this.user = this.getProfile();
            this.loggedIn = true;
            return true;
        }
        else if (uid == undefined) {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.loggedIn = false;
    };
    AuthService.prototype.clearToken = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- header -->\n <header id=\"header\" class=\"clearfix\">\n    <!-- navbar -->\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container\">\n            <!-- navbar-header -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      </button>\n                <a class=\"navbar-brand\" routerLink=\"/index\"><img class=\"img-responsive\" style=\"margin-top:-22px;width:148px\"\n                   src=\"./assets/images/logox.png\" alt=\"Logo\"></a>\n            </div>\n            <!-- /navbar-header -->\n\n            <div class=\"navbar-left\">\n                <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n                    <!-- <ul class=\"nav navbar-nav\">\n                        <li class=\"active dropdown\"><a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Home\n                          </a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"index.html\">Home Default </a></li>\n                                <li><a href=\"index-one.html\">Home Version-1</a></li>\n                                <li class=\"active\"><a href=\"index-two.html\">Home Version-2</a></li>\n                                <li><a href=\"index-three.html\">Home Version-3</a></li>\n                                <li><a href=\"index-car.html\">Home Car-1<span class=\"badge\">New</span></a></li>\n                                <li><a href=\"index-car-two.html\">Home Car-2<span class=\"badge\">New</span></a></li>\n                                <li><a href=\"directory.html\">Home Directory<span class=\"badge\">Latest</span></a></li>\n                            </ul>\n                        </li>\n                        <li><a href=\"categories.html\">Category</a></li>\n                        <li><a href=\"details.html\">all ads</a></li>\n                        <li><a href=\"faq.html\">Help/Support</a></li>\n                        <li class=\"dropdown\"><a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Pages <span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"about-us.html\">ABout Us</a></li>\n                                <li><a href=\"contact-us.html\">Contact Us</a></li>\n                                <li><a href=\"ad-post.html\">Ad post</a></li>\n                                <li><a href=\"ad-post-details.html\">Ad post Details</a></li>\n                                <li><a href=\"categories-main.html\">Category Ads</a></li>\n                                <li><a href=\"details.html\">Ad Details</a></li>\n                                <li><a href=\"my-ads.html\">My Ads</a></li>\n                                <li><a href=\"my-profile.html\">My Profile</a></li>\n                                <li><a href=\"favourite-ads.html\">Favourite Ads</a></li>\n                                <li><a href=\"archived-ads.html\">Archived Ads</a></li>\n                                <li><a href=\"pending-ads.html\">Pending Ads</a></li>\n                                <li><a href=\"delete-account.html\">Close Account</a></li>\n                                <li><a href=\"published.html\">Ad Publised</a></li>\n                                <li><a href=\"signup.html\">Sign Up</a></li>\n                                <li><a href=\"signin.html\">Sign In</a></li>\n                                <li><a href=\"faq.html\">FAQ</a></li>\n                                <li><a href=\"coming-soon.html\">Coming Soon <span class=\"badge\">New</span></a></li>\n                                <li><a href=\"pricing.html\">Pricing<span class=\"badge\">New</span></a></li>\n                                <li><a href=\"500-page.html\">500 Opsss<span class=\"badge\">New</span></a></li>\n                                <li><a href=\"404-page.html\">404 Error<span class=\"badge\">New</span></a></li>\n                            </ul>\n                        </li>\n                    </ul> -->\n                </div>\n            </div>\n\n            <!-- nav-right -->\n            <div class=\"nav-right\">\n                <!-- language-dropdown -->\n                <div class=\"dropdown language-dropdown\">\n                    <i class=\"fa fa-globe\"></i>\n                    <a data-toggle=\"dropdown\" href=\"#\"><span class=\"change-text\">Pakistan</span> <i class=\"fa fa-angle-down\"></i></a>\n                    <ul class=\"dropdown-menu language-change\">\n                        <li><a href=\"#\">Pakistan</a></li>\n                        <!-- <li><a href=\"#\">United States</a></li>\n                        <li><a href=\"#\">China</a></li>\n                        <li><a href=\"#\">Russia</a></li> -->\n                    </ul>\n                </div>\n                <!-- language-dropdown -->\n\n                <!-- sign-in -->\n                <ul class=\"sign-in\" *ngIf=\"auth.loggedIn == false\">\n                    <li><i class=\"fa fa-user\"></i></li>\n                    <li><a routerLink=\"/signin\"> Sign In </a></li>\n                    <li><a routerLink=\"/signup\">Register</a></li>\n                </ul>\n                <ul class=\"sign-in\" *ngIf=\"auth.loggedIn == true\">\n                  <li><i class=\"fa fa-user\"></i></li>\n                  <li><a routerLink=\"/dashboard/profile\"> {{auth.user?.name}} </a></li>\n                  <li><a (click)=\"logout()\">Logout</a></li>\n              </ul>\n                <!-- sign-in -->\n\n                <a routerLink=\"/dashboard/post-ad\" class=\"btn\">Post Your Ad</a>\n            </div>\n            <!-- nav-right -->\n        </div>\n        <!-- container -->\n    </nav>\n    <!-- navbar -->\n  </header>\n  <!-- header -->\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/index']);
        this.auth.checkProfile();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Atrix\Projects\olx-classified\testing\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map