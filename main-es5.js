(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/newsbox-login/newsbox-login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/newsbox-login/newsbox-login.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"title col-md-8 col-sm-12\">\n            <h1>01 News Box Login</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <img class=\"logo\" src=\"../../../assets/logo/title.png\" alt=\"logo\">\n        </div>   \n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <label>NewsBox Login</label>\n            <form [formGroup]=\"user\">\n                <div>\n                    <input type=\"email\" class=\"input-field col-lg-2 col-sm-8\" formControlName=\"email\" placeholder=\"Business Email\">\n                </div>\n                <div>\n                    <input type=\"password\" class=\"input-field col-lg-2 col-sm-8\" formControlName=\"password\" placeholder=\"password\">\n                </div>\n            </form>\n            <div class=\"row input-container\">\n                <button class=\"col-lg-2 col-sm-8\" mat-raised-button color=\"accent\" (click)=\"onSubmit()\">Login</button> \n            </div>\n            <div class=\"row\">\n                <button class=\"textLike\" (click)=\"registerNewsBox()\">Create NewsBox Account</button>\n            </div>\n            <div class=\"row\">\n                <h2>From TechDime</h2>\n            </div>\n        </div>   \n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/newsbox-register1/newsbox-register1.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/newsbox-register1/newsbox-register1.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg\">\n    <div class=\"row\">\n        <div class=\"title col-md-6 col-sm-12\">\n            <h1>01 Create News Box Registration</h1>\n        </div>\n        <div class=\"col-md-6 col-sm-12\" style=\"text-align-last: center;text-align: center;\">\n            <form [formGroup]=\"nb1\">\n                <h2 for=\"phone\">Create NewsBox Account</h2>\n                <div class=\"input-container\">\n                    <form [formGroup]=\"nb1\">\n                        <div>\n                            <input type=\"email\" class=\"input-field col-12\" formControlName=\"email\" placeholder=\"Business Email\">\n                        </div>\n                        <div>\n                            <input type=\"password\" class=\"input-field col-12\" formControlName=\"password\" placeholder=\"Password\">\n                        </div>\n                        <div>\n                            <input type=\"password\" class=\"input-field col-12\" placeholder=\"Confirm Password\">\n                        </div>\n                    </form>\n                    <div>\n                        <button mat-raised-button color=\"accent\" class=\" col-12\" (click)=\"onSubmit()\">Proceed</button> \n                    </div>\n                </div>\n            </form>\n            <h2>From TechDime</h2>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/newsbox-register2/newsbox-register2.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/newsbox-register2/newsbox-register2.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg\">\n    <div class=\"row ccard\">\n            <h1>02 News Box Registration</h1>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-sm-12\" style=\"text-align-last: center;text-align: center;\">\n            <h2 for=\"phone\">Create NewsBox Account</h2>\n            <img src=\"../../../assets/backgrounds/reg2.png\" alt=\"\">\n        </div>\n        <div class=\"col-lg-6 col-sm-12 input-container\" style=\"text-align: left;\">\n            <form [formGroup]=\"nb2\" style=\"justify-content: flex-start;\">\n                <div>\n                    <label class=\"file-label\">\n                        <input\n                            formControlName=\"logo\"\n                            class=\"file-input\"\n                            type=\"file\"\n                            name=\"file\"\n                            #fileInput\n                            (change)=\"onChange(fileInput.files[0])\"\n                        />\n                        <span class=\"file-cta\">\n                          <span class=\"file-icon\">\n                            <img src=\"../../../assets/icons/upload_logo.png\" alt=\"\">\n                          </span>\n                          <span class=\"file-label\">\n                            Upload Company logo\n                          </span>\n                        </span>\n                        <span class=\"file-name\">\n                          {{ fileName }}\n                        </span>\n                      </label>\n                </div>\n                <div>\n                    <input type=\"text\" class=\"input-field col-9\" formControlName=\"page\" placeholder=\"Add Page\">\n                </div>\n                <div>\n                    <input type=\"email\" class=\"input-field col-9\" formControlName=\"email\" placeholder=\"Business Email\">\n                </div>\n                <div class=\"row ccard\">\n                    <div class=\"col-2 card\">\n                        <img src=\"../../../assets/icons/nbreg_url1.png\" alt=\"\">\n                    </div>\n                    <div class=\"col-7\" style=\"padding: 5px 10px;text-align: center;\">\n                        <input type=\"text\" class=\"input-field col-12\" formControlName=\"url1\" placeholder=\"URL\">\n                        <p style=\"color: var(--primaryColor);font-size: small;text-align: center;\">Upload Fact-Checking Policy or Add URL</p>\n                    </div>\n                    <div class=\"col-1 card2\">\n                        <img src=\"../../../assets/icons/check.png\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"row ccard\">\n                    <div class=\"col-2 card\">\n                        <img src=\"../../../assets/icons/nbreg_url2.png\" alt=\"\">\n                    </div>\n                    <div class=\"col-7\" style=\"padding: 5px 10px;text-align: center;\">\n                        <input type=\"text\" class=\"input-field col-12\" formControlName=\"url2\" placeholder=\"URL\">\n                        <p style=\"color: var(--primaryColor);font-size: small;text-align: center;\">Upload Ethics Policy</p>\n                    </div>\n                    <div class=\"col-1 card2\">\n                        <img src=\"../../../assets/icons/check.png\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"row ccard\">\n                    <div class=\"col-2 card\">\n                        <img src=\"../../../assets/icons/nbreg_url3.png\" alt=\"\">\n                    </div>\n                    <div class=\"col-7\" style=\"padding: 5px 10px;text-align: center;\">\n                        <input type=\"text\" class=\"input-field col-12\" formControlName=\"url3\" placeholder=\"URL\">\n                        <p style=\"color: var(--primaryColor);font-size: small;text-align: center;\">Upload Corrections Policy</p>\n                    </div>\n                    <div class=\"col-1 card2\">\n                        <img src=\"../../../assets/icons/check.png\" alt=\"\">\n                    </div>\n                </div>\n            </form>\n            <div>\n                <button mat-raised-button color=\"accent\" class=\" col-9\" (click)=\"onSubmit()\">Submit</button> \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/newsbox-register3/newsbox-register3.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/newsbox-register3/newsbox-register3.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row title\">\n        <h2>03 News Box Application Submitted for review</h2>\n    </div>\n    <div class=\"row input-container\">\n        <h2>\n            Your Application\n        </h2>\n        <h2 style=\"color: black;\">\n            Has been Submitted for Review\n        </h2>\n        <div>\n            <img src=\"../../../assets/backgrounds/nbreg03.png\" alt=\"\">\n        </div>\n        <button mat-raised-button color=\"primary\" class=\" col-9\" (click)=\"onSubmit()\">\n            Go Back to Home\n        </button> \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/otp/otp.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/otp/otp.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"title col-md-8 col-sm-12\">\n            <h1>Step 02 Log</h1>\n            <h3>Login/Verify Phone Number</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <img class=\"logo\" src=\"../../../assets/logo/no-title.png\" alt=\"logo\">\n        </div>   \n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <label>Enter OTP</label>      \n            <form> \n                <div id=\"otp\">\n                    <input type=\"text\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" id=\"first\"/>\n                    <input type=\"text\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" id=\"second\"/>\n                    <input type=\"text\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" id=\"third\"/>\n                    <input type=\"text\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" pattern=\"[0-9]{1}\" id=\"fourth\" (keyup)=\"submit()\"/>\n                </div>         \n            </form>\n            <label><a (click)=\"passwordLogin();\" style=\"color: rgba(26, 23, 24, 0.2);text-decoration: none;\">Send Again</a></label>\n            <p><button (click)=\"passwordLogin()\" style=\"color: #A00E1B; text-decoration: none; background:none; border:none;\">Log in with password</button></p>\n            \n        </div>   \n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/password-login/password-login.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/password-login/password-login.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"title col-md-8 col-sm-12\">\n            <h1>Step 03 Login with password</h1>\n            <h3>Login/Enter Password</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <img class=\"logo\" src=\"../../../assets/logo/no-title.png\" alt=\"logo\">\n        </div>   \n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <label>Enter Password</label>      \n            <form [formGroup]=\"password\"> \n                <input type=\"password\" class=\"input-field col-md-2 col-sm-8\" formControlName=\"password\">     \n            </form>\n            <div class=\"row input-container\">\n                <button class=\"col-md-2 col-sm-8\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">login</button> \n            </div>\n            <div class=\"row\">\n                <button class=\"textLike\" (click)=\"trouble()\">Trouble Logging In?</button>\n            </div>           \n        </div>   \n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/phone-number/phone-number.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/phone-number/phone-number.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"title col-md-8 col-sm-12\">\n            <h1>01 Starting Registration</h1>\n            <h3>Register / Login/ Enter Phone Number</h3>\n            <img src=\"../../../assets/backgrounds/phone-number.png\" alt=\"bg\">\n        </div>\n        \n        <div class=\"col-md-4 col-sm-12\" style=\"text-align-last: center;text-align: center;\">\n            <img class=\"logo\" src=\"../../../assets/logo/title.png\" alt=\"Clickpad\">\n            <form [formGroup]=\"phoneNumber\">\n                <label for=\"phone\">Enter your phone number</label>\n                <div class=\"input-container\">\n                    <mat-form-field class=\"input-field col-3\" color=\"basic\">\n                        <mat-icon matPrefix style=\"margin-right: 5px;\">\n                            <img src=\"../../../assets/icons/UAE-Flag.png\" alt=\"\">\n                        </mat-icon>\n                        <input matInput type=\"phone\" value=\"+971\" readonly>\n                    </mat-form-field>\n                    <mat-form-field class=\"input-field col-7\" color=\"basic\">\n                        <input matInput type=\"number\" formControlName=\"phone\">\n                    </mat-form-field>\n                </div>\n            </form>\n            <button class=\"col-9\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Next</button> \n            <button class=\"textLike\" (click)=\"trouble()\">Trouble Logging In?</button>\n            <button class=\"col-9\" (click)=\"newsboxLogin()\" mat-raised-button color=\"accent\">NewsBox Login</button> \n            <label>From TechDime</label>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/register-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/register-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-phone-number *ngIf=\"phone_step\" (onFormGroupChange)=\"phoneSubmitted($event)\" (nextScreen)=\"nextScreen($event)\"></app-phone-number>\n<app-otp *ngIf=\"otp_step\" (onFormGroupChange)=\"otpSubmitted($event)\" (nextScreen)=\"nextScreen($event)\" [phoneNumber]=\"phoneNumber\"></app-otp>\n<app-password-login *ngIf=\"password_login_step\" (onFormGroupChange)=\"passwordSubmitted($event)\" (nextScreen)=\"nextScreen($event)\" [phoneNumber]=\"phoneNumber\"></app-password-login>\n<app-trouble-login *ngIf=\"trouble_login_step\" (nextScreen)=\"nextScreen($event)\"></app-trouble-login>\n<app-newsbox-login *ngIf=\"newsbox_login_step\" (nextScreen)=\"nextScreen($event)\"></app-newsbox-login>\n<app-newsbox-register1 *ngIf=\"register_newsbox1_step\" (nextScreen)=\"nextScreen($event)\"></app-newsbox-register1>\n<app-newsbox-register2 *ngIf=\"register_newsbox2_step\" (nextScreen)=\"nextScreen($event)\"></app-newsbox-register2>\n<app-newsbox-register3 *ngIf=\"register_newsbox3_step\" (nextScreen)=\"nextScreen($event)\"></app-newsbox-register3>\n<app-user-register1  *ngIf=\"register_user1_step\" (nextScreen)=\"nextScreen($event)\"></app-user-register1>\n<app-user-register2  *ngIf=\"register_user2_step\" (nextScreen)=\"nextScreen($event)\"></app-user-register2>\n<app-user-register3  *ngIf=\"register_user3_step\" (nextScreen)=\"nextScreen($event)\"></app-user-register3>\n<!-- <app-user-register2></app-user-register2> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/trouble-login/trouble-login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/trouble-login/trouble-login.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"title col-md-8 col-sm-12\">\n            <h1>01 Trouble</h1>\n            <h3>Login/ trouble loggin in</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <h2>Trouble loggin in?</h2>\n            <label class=\"col-md-2 col-sm-8\"><p style=\"color: rgba(26, 23, 24, 0.2);text-decoration: none;\">Enter your Username / Email address and we will send you a link to access your account</p></label>\n            <form [formGroup]=\"username\"> \n                <input type=\"text\" class=\"input-field col-md-2 col-sm-8\" formControlName=\"username\" placeholder=\"Enter your username or email address\">     \n            </form>\n            <button class=\"col-md-2 col-sm-8\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Send</button> \n            <p><a href=\"\" style=\"color: #A00E1B;text-decoration: none;\">Need more help?</a></p>\n        </div>   \n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/user-register1/user-register1.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/user-register1/user-register1.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"title col-md-8 col-sm-12\">\n            <h1>Step 001  Registration when phone is not in database</h1>\n            <h3>Register Choose Username</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <h1 class=\"header\">Choose Your Username</h1>      \n            <form [formGroup]=\"user1\"> \n                <input type=\"text\" class=\"input-field col-md-3 col-sm-8\" formControlName=\"username\">     \n            </form>\n            <div class=\"row input-container\">\n                <button class=\"col-md-3 col-sm-8\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Next</button> \n            </div>          \n        </div>   \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/user-register2/user-register2.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/user-register2/user-register2.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"title col-md-8 col-sm-12\">\n            <h1>Step 002  Registration</h1>\n            <h4>Register / fillout Personal Information</h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"container input-container\">\n            <h1 class=\"header\">Registration</h1>\n            <h5>Your can edit this information after registration</h5>\n            <form [formGroup]=\"user2\"> \n                <div>\n                    <input type=\"text\" class=\"input-field col-md-4 col-sm-8\" formControlName=\"firstName\" placeholder=\"First Name\">\n                </div>\n                <div>\n                    <input type=\"text\" class=\"input-field col-md-4 col-sm-8\" formControlName=\"lastName\" placeholder=\"Last Name\">\n                </div>\n                <div>\n                    <input type=\"email\" class=\"input-field col-md-4 col-sm-8\" formControlName=\"email\" placeholder=\"Email\">\n                </div>\n                <div>\n                    <input type=\"password\" class=\"input-field col-md-4 col-sm-8\" formControlName=\"password\" placeholder=\"Password\">\n                </div>\n                <div>\n                    <input type=\"password\" class=\"input-field col-md-4 col-sm-8\" placeholder=\"Confirm Password\">\n                </div>\n                <div class=\"button-bar input-container2\">\n                    <a class=\"button\" ng-class=\"{'button-positive': isActive('breakfast')}\" ng-click=\"setActive('breakfast')\">Male</a>\n                    <a class=\"button\" ng-class=\"{'button-positive': isActive('lunch')}\" ng-click=\"setActive('lunch')\">Female</a>\n                    <a class=\"button\" ng-class=\"{'button-positive': isActive('dinner')}\" ng-click=\"setActive('dinner')\">Rather not to say</a>\n                </div>\n            </form>\n            <div class=\"row input-container\">\n                <button class=\"col-md-3 col-sm-8\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Next</button> \n            </div>          \n        </div>   \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-form/user-register3/user-register3.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-form/user-register3/user-register3.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>user-register3 works!</p>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-form/register-form.component */ "./src/app/register-form/register-form.component.ts");




var routes = [
    { path: '', component: _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_3__["RegisterFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'clickpad-main';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _register_form_register_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form/register-form.module */ "./src/app/register-form/register-form.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _register_form_register_form_module__WEBPACK_IMPORTED_MODULE_5__["RegisterFormModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/register-form/newsbox-login/newsbox-login.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/register-form/newsbox-login/newsbox-login.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    padding: 20px 15px;\r\n}\r\n\r\nh1 {\r\n    color: var(--secondaryColor);\r\n}\r\n\r\nimg {\r\n    max-width: -webkit-fill-available;\r\n}\r\n\r\ndiv .input-container {\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nlabel {\r\n    font-size: 20px;\r\n    padding: 10px 5px;\r\n    margin: 30px;\r\n}\r\n\r\nbutton, input {\r\n    padding: 15px 20px;\r\n    margin: 10px 20px;\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    font-weight: normal;\r\n    color: #fff;\r\n}\r\n\r\ninput {\r\n    padding: 15px 20px;\r\n    background-color: #E5E4E4;\r\n    color: #1A1718;\r\n    border: 1px solid;\r\n}\r\n\r\n.textLike {\r\n    background: none;\r\n    border: none;\r\n    color: var(--primaryColor);\r\n    text-decoration: none;\r\n}\r\n\r\n.mat-basic {\r\n    color: rgba(26, 23, 24, 0.2);\r\n    text-decoration: none;\r\n}\r\n\r\n.mat-primary {\r\n    background-color: var(--primaryColor);\r\n    color: #fff;\r\n}\r\n\r\n.mat-accent {\r\n    background-color: var(--secondaryColor);\r\n    color: #fff;\r\n}\r\n\r\nh2 {\r\n    margin-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9uZXdzYm94LWxvZ2luL25ld3Nib3gtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0kscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci1mb3JtL25ld3Nib3gtbG9naW4vbmV3c2JveC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG5kaXYgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiwgaW5wdXQge1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFNDtcclxuICAgIGNvbG9yOiAjMUExNzE4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbi50ZXh0TGlrZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtYmFzaWMge1xyXG4gICAgY29sb3I6IHJnYmEoMjYsIDIzLCAyNCwgMC4yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbi5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuICBcclxuLm1hdC1hY2NlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register-form/newsbox-login/newsbox-login.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/register-form/newsbox-login/newsbox-login.component.ts ***!
  \************************************************************************/
/*! exports provided: NewsboxLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsboxLoginComponent", function() { return NewsboxLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NewsboxLoginComponent = /** @class */ (function () {
    function NewsboxLoginComponent(fb) {
        this.fb = fb;
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewsboxLoginComponent.prototype.onSubmit = function () {
        this.nextScreen.emit("home");
    };
    NewsboxLoginComponent.prototype.registerNewsBox = function () {
        this.nextScreen.emit("registerNewsBox1");
    };
    NewsboxLoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NewsboxLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NewsboxLoginComponent.prototype, "nextScreen", void 0);
    NewsboxLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsbox-login',
            template: __webpack_require__(/*! raw-loader!./newsbox-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/newsbox-login/newsbox-login.component.html"),
            styles: [__webpack_require__(/*! ./newsbox-login.component.css */ "./src/app/register-form/newsbox-login/newsbox-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NewsboxLoginComponent);
    return NewsboxLoginComponent;
}());



/***/ }),

/***/ "./src/app/register-form/newsbox-register1/newsbox-register1.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/register-form/newsbox-register1/newsbox-register1.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: var(--secondaryColor);\r\n}\r\n\r\nh2 {\r\n    margin-top: 50px;\r\n}\r\n\r\n.bg {\r\n    background: url('reg1.png') no-repeat; \r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-position-y: 100px;\r\n}\r\n\r\n.input-field {\r\n    align-self: start;\r\n    text-align: left;\r\n}\r\n\r\ndiv .input-container {\r\n    padding: 140px;\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nlabel {\r\n    font-size: 20px;\r\n    padding: 10px 5px;\r\n    margin: 30px;\r\n}\r\n\r\nbutton, input {\r\n    padding: 15px 20px;\r\n    margin: 10px 20px;\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    font-weight: normal;\r\n    color: #fff;\r\n}\r\n\r\ninput {\r\n    padding: 15px 20px;\r\n    background-color: #E5E4E4;\r\n    color: #1A1718;\r\n    border: 1px solid;\r\n}\r\n\r\n.mat-basic {\r\n    color: rgba(26, 23, 24, 0.2);\r\n    text-decoration: none;\r\n}\r\n\r\n.mat-primary {\r\n    background-color: var(--primaryColor);\r\n    color: #fff;\r\n}\r\n\r\n.mat-accent {\r\n    background-color: var(--secondaryColor);\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9uZXdzYm94LXJlZ2lzdGVyMS9uZXdzYm94LXJlZ2lzdGVyMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQStEO0lBQy9ELHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vbmV3c2JveC1yZWdpc3RlcjEvbmV3c2JveC1yZWdpc3RlcjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmRzL3JlZzEucG5nKSBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEwMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5kaXYgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNEU0O1xyXG4gICAgY29sb3I6ICMxQTE3MTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG5cclxuLm1hdC1iYXNpYyB7XHJcbiAgICBjb2xvcjogcmdiYSgyNiwgMjMsIDI0LCAwLjIpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubWF0LXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiAgXHJcbi5tYXQtYWNjZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register-form/newsbox-register1/newsbox-register1.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/register-form/newsbox-register1/newsbox-register1.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewsboxRegister1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsboxRegister1Component", function() { return NewsboxRegister1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NewsboxRegister1Component = /** @class */ (function () {
    function NewsboxRegister1Component(fb) {
        this.fb = fb;
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewsboxRegister1Component.prototype.onSubmit = function () {
        this.nextScreen.emit("registerNewsBox2");
    };
    NewsboxRegister1Component.prototype.ngOnInit = function () {
        this.nb1 = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NewsboxRegister1Component.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NewsboxRegister1Component.prototype, "nextScreen", void 0);
    NewsboxRegister1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsbox-register1',
            template: __webpack_require__(/*! raw-loader!./newsbox-register1.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/newsbox-register1/newsbox-register1.component.html"),
            styles: [__webpack_require__(/*! ./newsbox-register1.component.css */ "./src/app/register-form/newsbox-register1/newsbox-register1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NewsboxRegister1Component);
    return NewsboxRegister1Component;
}());



/***/ }),

/***/ "./src/app/register-form/newsbox-register2/newsbox-register2.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/register-form/newsbox-register2/newsbox-register2.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: var(--secondaryColor);\r\n}\r\n\r\n.file-input {\r\n    display: none;\r\n}\r\n\r\n.file-icon img {\r\n    padding: 30px;\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: #E5E4E4;\r\n    border: 1px solid #858585b2;\r\n    border-radius: 26px;\r\n}\r\n\r\n.file-label {\r\n    margin: 0 20px;\r\n}\r\n\r\n.input-field {\r\n    align-self: start;\r\n    text-align: left;\r\n}\r\n\r\ndiv .input-container {\r\n    padding: 140px;\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nbutton, input {\r\n    padding: 15px 20px;\r\n    margin: 10px 20px;\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    font-weight: normal;\r\n    color: #fff;\r\n}\r\n\r\ninput {\r\n    padding: 15px 20px;\r\n    background-color: #E5E4E4;\r\n    color: #1A1718;\r\n    border: 1px solid #858585b2;\r\n}\r\n\r\n.card {\r\n    padding: 25px;\r\n    border: 1px solid #858585b2;\r\n    border-radius: 26px;\r\n}\r\n\r\n.card2 {\r\n    padding: 25px;\r\n}\r\n\r\n.ccard {\r\n    margin: 10px 0;\r\n}\r\n\r\n.mat-basic {\r\n    color: rgba(26, 23, 24, 0.2);\r\n    text-decoration: none;\r\n}\r\n\r\n.mat-primary {\r\n    background-color: var(--primaryColor);\r\n    color: #fff;\r\n}\r\n\r\n.mat-accent {\r\n    background-color: var(--secondaryColor);\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9uZXdzYm94LXJlZ2lzdGVyMi9uZXdzYm94LXJlZ2lzdGVyMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci1mb3JtL25ld3Nib3gtcmVnaXN0ZXIyL25ld3Nib3gtcmVnaXN0ZXIyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmlsZS1pY29uIGltZyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU0RTQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODU4NTg1YjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG59XHJcblxyXG4uZmlsZS1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuZGl2IC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNEU0O1xyXG4gICAgY29sb3I6ICMxQTE3MTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODU4NTg1YjI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODU4NTg1YjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG59XHJcblxyXG4uY2FyZDIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLmNjYXJkIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4ubWF0LWJhc2ljIHtcclxuICAgIGNvbG9yOiByZ2JhKDI2LCAyMywgMjQsIDAuMik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuICBcclxuLm1hdC1hY2NlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register-form/newsbox-register2/newsbox-register2.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/register-form/newsbox-register2/newsbox-register2.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewsboxRegister2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsboxRegister2Component", function() { return NewsboxRegister2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NewsboxRegister2Component = /** @class */ (function () {
    function NewsboxRegister2Component(fb) {
        this.fb = fb;
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewsboxRegister2Component.prototype.onSubmit = function () {
        this.nextScreen.emit("registerNewsBox3");
    };
    NewsboxRegister2Component.prototype.ngOnInit = function () {
        this.nb2 = this.fb.group({
            logo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            page: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    NewsboxRegister2Component.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NewsboxRegister2Component.prototype, "nextScreen", void 0);
    NewsboxRegister2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsbox-register2',
            template: __webpack_require__(/*! raw-loader!./newsbox-register2.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/newsbox-register2/newsbox-register2.component.html"),
            styles: [__webpack_require__(/*! ./newsbox-register2.component.css */ "./src/app/register-form/newsbox-register2/newsbox-register2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NewsboxRegister2Component);
    return NewsboxRegister2Component;
}());



/***/ }),

/***/ "./src/app/register-form/newsbox-register3/newsbox-register3.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/register-form/newsbox-register3/newsbox-register3.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    color: var(--primaryColor);\r\n}\r\n\r\n.title {\r\n    padding: 15px 20px;\r\n    color: var(--secondaryColor);\r\n}\r\n\r\n.mat-primary {\r\n    background-color: var(--primaryColor);\r\n    color: #fff;\r\n}\r\n\r\ndiv .input-container {\r\n    padding: 70px;\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    max-width: -webkit-fit-content;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    margin: 10px 30px;\r\n    padding: 5px 80px;\r\n}\r\n\r\nimg {\r\n    width: 600px;\r\n    height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9uZXdzYm94LXJlZ2lzdGVyMy9uZXdzYm94LXJlZ2lzdGVyMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBc0I7SUFBdEIsMkJBQXNCO0lBQXRCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci1mb3JtL25ld3Nib3gtcmVnaXN0ZXIzL25ld3Nib3gtcmVnaXN0ZXIzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XHJcbn1cclxuXHJcbi5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmRpdiAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDcwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggMzBweDtcclxuICAgIHBhZGRpbmc6IDVweCA4MHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register-form/newsbox-register3/newsbox-register3.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/register-form/newsbox-register3/newsbox-register3.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewsboxRegister3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsboxRegister3Component", function() { return NewsboxRegister3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsboxRegister3Component = /** @class */ (function () {
    function NewsboxRegister3Component() {
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewsboxRegister3Component.prototype.onSubmit = function () {
        this.nextScreen.emit("home");
    };
    NewsboxRegister3Component.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NewsboxRegister3Component.prototype, "nextScreen", void 0);
    NewsboxRegister3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsbox-register3',
            template: __webpack_require__(/*! raw-loader!./newsbox-register3.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/newsbox-register3/newsbox-register3.component.html"),
            styles: [__webpack_require__(/*! ./newsbox-register3.component.css */ "./src/app/register-form/newsbox-register3/newsbox-register3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsboxRegister3Component);
    return NewsboxRegister3Component;
}());



/***/ }),

/***/ "./src/app/register-form/otp/otp.component.css":
/*!*****************************************************!*\
  !*** ./src/app/register-form/otp/otp.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    padding: 20px 15px;\r\n}\r\n\r\nimg {\r\n    max-width: -webkit-fill-available;\r\n}\r\n\r\ndiv .input-container {\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nlabel {\r\n    font-size: 20px;\r\n    padding: 10px 5px;\r\n    margin: 30px;\r\n}\r\n\r\nform input {\r\n    margin: 0 5px;\r\n    line-height: 110px;\r\n    width: 90px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    border: solid 1px #ccc;\r\n    box-shadow: 0 0 5px #ccc inset;\r\n    outline: none;\r\n    transition: all 0.2s ease-in-out;\r\n    border-radius: 15px;\r\n    color: var(--primaryColor);\r\n}\r\n\r\nform input:focus {\r\n    background-color: #E5E4E4;\r\n}\r\n\r\n.mat-basic {\r\n    color: rgba(26, 23, 24, 0.2);\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9vdHAvb3RwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItZm9ybS9vdHAvb3RwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbmRpdiAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuZm9ybSBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjIGluc2V0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG59XHJcblxyXG5mb3JtIGlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU0RTQ7XHJcbn1cclxuXHJcbi5tYXQtYmFzaWMge1xyXG4gICAgY29sb3I6IHJnYmEoMjYsIDIzLCAyNCwgMC4yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/register-form/otp/otp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/register-form/otp/otp.component.ts ***!
  \****************************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var OtpComponent = /** @class */ (function () {
    function OtpComponent(fb) {
        this.fb = fb;
        this.onFormGroupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(OtpComponent.prototype, "otp2", {
        get: function () {
            return this.otp.controls;
        },
        enumerable: true,
        configurable: true
    });
    OtpComponent.prototype.submit = function () {
        var inputs = document.querySelectorAll('#otp > *[id]');
        var otp3 = '';
        for (var i = 0; i < inputs.length; i++) {
            otp3 += inputs[i].value;
        }
        if (otp3.length == 4) {
            this.otp2.otp.setValue(otp3);
            this.onFormGroupChange.emit(this.otp);
            this.nextScreen.emit("home");
        }
    };
    OtpComponent.prototype.passwordLogin = function () {
        this.nextScreen.emit("passwordLogin");
    };
    OtpComponent.prototype.ngOnInit = function () {
        this.otp = this.fb.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        var inputs = document.querySelectorAll('#otp > *[id]');
        var _loop_1 = function (i) {
            inputs[i].addEventListener('keydown', function (event) {
                if (event.key === "Backspace") {
                    inputs[i].value = '';
                    if (i !== 0)
                        inputs[i - 1].focus();
                }
                else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') {
                        return true;
                    }
                    else if (event.keyCode > 47 && event.keyCode < 58) {
                        inputs[i].value = event.key;
                        if (i !== inputs.length - 1)
                            inputs[i + 1].focus();
                        event.preventDefault();
                    }
                    else if (event.keyCode > 64 && event.keyCode < 91) {
                        inputs[i].value = String.fromCharCode(event.keyCode);
                        if (i !== inputs.length - 1)
                            inputs[i + 1].focus();
                        event.preventDefault();
                    }
                }
            });
        };
        for (var i = 0; i < inputs.length; i++) {
            _loop_1(i);
        }
    };
    OtpComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OtpComponent.prototype, "phoneNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OtpComponent.prototype, "onFormGroupChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OtpComponent.prototype, "nextScreen", void 0);
    OtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! raw-loader!./otp.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/otp/otp.component.html"),
            styles: [__webpack_require__(/*! ./otp.component.css */ "./src/app/register-form/otp/otp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "./src/app/register-form/password-login/password-login.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/register-form/password-login/password-login.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    padding: 20px 15px;\r\n}\r\n\r\nimg {\r\n    max-width: -webkit-fill-available;\r\n}\r\n\r\ndiv .input-container {\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nlabel {\r\n    font-size: 20px;\r\n    padding: 10px 5px;\r\n    margin: 30px;\r\n}\r\n\r\nbutton, input {\r\n    padding: 5px 20px;\r\n    margin: 10px 20px;\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    font-weight: normal;\r\n    color: #fff;\r\n}\r\n\r\ninput {\r\n    background-color: #E5E4E4;\r\n    color: #1A1718;\r\n    border: none;\r\n}\r\n\r\n.textLike {\r\n    background: none;\r\n    border: none;\r\n    color: var(--primaryColor);\r\n    text-decoration: none;\r\n}\r\n\r\n.mat-basic {\r\n    color: rgba(26, 23, 24, 0.2);\r\n    text-decoration: none;\r\n}\r\n\r\n.mat-primary {\r\n    background-color: var(--primaryColor);\r\n    color: #fff;\r\n}\r\n\r\n.mat-accent {\r\n    background-color: var(--secondaryColor);\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9wYXNzd29yZC1sb2dpbi9wYXNzd29yZC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxxQ0FBcUM7SUFDckMsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vcGFzc3dvcmQtbG9naW4vcGFzc3dvcmQtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuZGl2IC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG5idXR0b24sIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFNDtcclxuICAgIGNvbG9yOiAjMUExNzE4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4udGV4dExpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubWF0LWJhc2ljIHtcclxuICAgIGNvbG9yOiByZ2JhKDI2LCAyMywgMjQsIDAuMik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4ubWF0LXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiAgXHJcbi5tYXQtYWNjZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register-form/password-login/password-login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/register-form/password-login/password-login.component.ts ***!
  \**************************************************************************/
/*! exports provided: PasswordLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordLoginComponent", function() { return PasswordLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PasswordLoginComponent = /** @class */ (function () {
    function PasswordLoginComponent(fb) {
        this.fb = fb;
        this.onFormGroupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PasswordLoginComponent.prototype.onSubmit = function () {
        this.onFormGroupChange.emit(this.password);
        this.nextScreen.emit("home");
    };
    PasswordLoginComponent.prototype.trouble = function () {
        this.nextScreen.emit("trouble");
    };
    PasswordLoginComponent.prototype.ngOnInit = function () {
        this.password = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    PasswordLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PasswordLoginComponent.prototype, "phoneNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PasswordLoginComponent.prototype, "onFormGroupChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PasswordLoginComponent.prototype, "nextScreen", void 0);
    PasswordLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-login',
            template: __webpack_require__(/*! raw-loader!./password-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/password-login/password-login.component.html"),
            styles: [__webpack_require__(/*! ./password-login.component.css */ "./src/app/register-form/password-login/password-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PasswordLoginComponent);
    return PasswordLoginComponent;
}());



/***/ }),

/***/ "./src/app/register-form/phone-number/phone-number.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/register-form/phone-number/phone-number.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: -webkit-fill-available;\n}\n\n.logo {\n  padding: 20px 15px;\n}\n\ndiv .input-container {\n  display: inline-flex;\n  justify-content: center;\n}\n\n.mat-form-field {\n  margin: 0 5px;\n  font-size: medium;\n}\n\n::ng-deep .mat-form-field-flex {\n  padding: 5px 5px;\n  background-color: #E5E4E4;\n}\n\n::ng-deep .mat-form-field-outline-start {\n  border-radius: 28px 0 0 28px !important;\n  min-width: 28px !important;\n}\n\n::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 28px 28px 0 !important;\n}\n\nbutton {\n  padding: 5px 20px;\n  margin: 10px 20px;\n  border-radius: 10px;\n  font-size: large;\n  font-weight: normal;\n  color: #fff;\n}\n\n.textLike {\n  background: none;\n  border: none;\n  color: var(--primaryColor);\n  text-decoration: none;\n}\n\nlabel {\n  font-size: 20px;\n  padding: 10px 5px;\n}\n\n.title {\n  padding: 20px 20px;\n}\n\n.mat-primary {\n  background-color: var(--primaryColor);\n  color: #fff;\n}\n\n.mat-accent {\n  background-color: var(--secondaryColor);\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9waG9uZS1udW1iZXIvQzpcXFVzZXJzXFxqaWJyZVxcRG9jdW1lbnRzXFxBaG1hZC1EdWJhaVxcY2xpY2twYWQtbWFpbi9zcmNcXGFwcFxccmVnaXN0ZXItZm9ybVxccGhvbmUtbnVtYmVyXFxwaG9uZS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vcGhvbmUtbnVtYmVyL3Bob25lLW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSx1Q0FBQTtFQUNBLDBCQUFBO0FDQUo7O0FER0E7RUFDSSx1Q0FBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLHFDQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksdUNBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci1mb3JtL3Bob25lLW51bWJlci9waG9uZS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbn1cclxuXHJcbmRpdiAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU0RTQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4IDAgMCAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4cHggIWltcG9ydGFudDtcclxufVxyXG4gIFxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjhweCAyOHB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRleHRMaWtlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuICBcclxuLm1hdC1hY2NlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iLCJpbWcge1xuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xufVxuXG5kaXYgLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU0RTQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHggMCAwIDI4cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xuICBib3JkZXItcmFkaXVzOiAwIDI4cHggMjhweCAwICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW46IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50ZXh0TGlrZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG5cbi5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/register-form/phone-number/phone-number.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/register-form/phone-number/phone-number.component.ts ***!
  \**********************************************************************/
/*! exports provided: PhoneNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberComponent", function() { return PhoneNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PhoneNumberComponent = /** @class */ (function () {
    function PhoneNumberComponent(fb) {
        this.fb = fb;
        this.onFormGroupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PhoneNumberComponent.prototype.onSubmit = function () {
        this.onFormGroupChange.emit(this.phoneNumber);
        this.nextScreen.emit("otp");
    };
    PhoneNumberComponent.prototype.trouble = function () {
        this.nextScreen.emit("trouble");
    };
    PhoneNumberComponent.prototype.newsboxLogin = function () {
        this.nextScreen.emit("newsboxLogin");
    };
    PhoneNumberComponent.prototype.ngOnInit = function () {
        this.phoneNumber = this.fb.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    PhoneNumberComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PhoneNumberComponent.prototype, "onFormGroupChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PhoneNumberComponent.prototype, "nextScreen", void 0);
    PhoneNumberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phone-number',
            template: __webpack_require__(/*! raw-loader!./phone-number.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/phone-number/phone-number.component.html"),
            styles: [__webpack_require__(/*! ./phone-number.component.scss */ "./src/app/register-form/phone-number/phone-number.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PhoneNumberComponent);
    return PhoneNumberComponent;
}());



/***/ }),

/***/ "./src/app/register-form/register-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/register-form/register-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register-form/register-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-form/register-form.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(fb) {
        this.fb = fb;
        this.phone_step = true;
        this.otp_step = false;
        this.password_login_step = false;
        this.trouble_login_step = false;
        this.newsbox_login_step = false;
        this.register_newsbox1_step = false;
        this.register_newsbox2_step = false;
        this.register_newsbox3_step = false;
        this.register_user1_step = false;
        this.register_user2_step = false;
        this.register_user3_step = false;
        this.step = 1;
    }
    Object.defineProperty(RegisterFormComponent.prototype, "phone", {
        get: function () { return this.phoneNumber.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterFormComponent.prototype, "passwordC", {
        get: function () { return this.password.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterFormComponent.prototype, "otpC", {
        get: function () { return this.otp.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterFormComponent.prototype.phoneSubmitted = function ($event) {
        this.otp = $event;
        if (this.otp.invalid) {
            return;
        }
        this.step++;
    };
    RegisterFormComponent.prototype.otpSubmitted = function ($event) {
        this.phoneNumber = $event;
        if (this.phoneNumber.invalid) {
            return;
        }
        this.step++;
    };
    RegisterFormComponent.prototype.passwordSubmitted = function ($event) {
        this.password = $event;
    };
    RegisterFormComponent.prototype.nextScreen = function ($event) {
        if ($event == "otp") {
            this.otp_step = true;
            this.phone_step = false;
        }
        if ($event == "passwordLogin") {
            this.password_login_step = true;
            this.otp_step = false;
        }
        if ($event == "home") {
            this.password_login_step = false;
        }
        if ($event == "trouble") {
            this.phone_step = false;
            this.password_login_step = false;
            this.trouble_login_step = true;
        }
        if ($event == "phone") {
            this.phone_step = true;
            this.trouble_login_step = false;
        }
        if ($event == "newsboxLogin") {
            this.newsbox_login_step = true;
            this.phone_step = false;
        }
        if ($event == "registerNewsBox1") {
            this.newsbox_login_step = false;
            this.register_newsbox1_step = true;
        }
        if ($event == "registerNewsBox2") {
            this.register_newsbox1_step = false;
            this.register_newsbox2_step = true;
        }
        if ($event == "registerNewsBox3") {
            this.register_newsbox2_step = false;
            this.register_newsbox3_step = true;
        }
        if ($event == "registerUser2") {
            this.register_user1_step = false;
            this.register_user2_step = true;
        }
        if ($event == "registerUser3") {
            this.register_user2_step = false;
            this.register_user3_step = true;
        }
    };
    RegisterFormComponent.prototype.next = function () {
        if (this.step == 1) {
            this.phone_step = true;
            if (this.phoneNumber.invalid) {
                return;
            }
            this.step++;
        }
        if (this.step == 2) {
            this.otp_step = true;
            if (this.otp.invalid) {
                return;
            }
            this.step++;
        }
    };
    RegisterFormComponent.prototype.previous = function () {
        this.step--;
        if (this.step == 1) {
            this.phone_step = false;
        }
        if (this.step == 2) {
            this.password_login_step = false;
        }
    };
    RegisterFormComponent.prototype.submit = function () {
        if (this.step == 3) {
            this.password_login_step = true;
            if (this.password.invalid) {
                return;
            }
        }
    };
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.phoneNumber = this.fb.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.otp = this.fb.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.password = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegisterFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! raw-loader!./register-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.scss */ "./src/app/register-form/register-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/register-form/register-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/register-form/register-form.module.ts ***!
  \*******************************************************/
/*! exports provided: RegisterFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormModule", function() { return RegisterFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _phone_number_phone_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone-number/phone-number.component */ "./src/app/register-form/phone-number/phone-number.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form.component */ "./src/app/register-form/register-form.component.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./otp/otp.component */ "./src/app/register-form/otp/otp.component.ts");
/* harmony import */ var _password_login_password_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./password-login/password-login.component */ "./src/app/register-form/password-login/password-login.component.ts");
/* harmony import */ var _trouble_login_trouble_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./trouble-login/trouble-login.component */ "./src/app/register-form/trouble-login/trouble-login.component.ts");
/* harmony import */ var _newsbox_login_newsbox_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./newsbox-login/newsbox-login.component */ "./src/app/register-form/newsbox-login/newsbox-login.component.ts");
/* harmony import */ var _newsbox_register1_newsbox_register1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./newsbox-register1/newsbox-register1.component */ "./src/app/register-form/newsbox-register1/newsbox-register1.component.ts");
/* harmony import */ var _newsbox_register2_newsbox_register2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./newsbox-register2/newsbox-register2.component */ "./src/app/register-form/newsbox-register2/newsbox-register2.component.ts");
/* harmony import */ var _newsbox_register3_newsbox_register3_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./newsbox-register3/newsbox-register3.component */ "./src/app/register-form/newsbox-register3/newsbox-register3.component.ts");
/* harmony import */ var _user_register1_user_register1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-register1/user-register1.component */ "./src/app/register-form/user-register1/user-register1.component.ts");
/* harmony import */ var _user_register2_user_register2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user-register2/user-register2.component */ "./src/app/register-form/user-register2/user-register2.component.ts");
/* harmony import */ var _user_register3_user_register3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-register3/user-register3.component */ "./src/app/register-form/user-register3/user-register3.component.ts");


























var RegisterFormModule = /** @class */ (function () {
    function RegisterFormModule() {
    }
    RegisterFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_phone_number_phone_number_component__WEBPACK_IMPORTED_MODULE_3__["PhoneNumberComponent"], _register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"], _otp_otp_component__WEBPACK_IMPORTED_MODULE_16__["OtpComponent"], _password_login_password_login_component__WEBPACK_IMPORTED_MODULE_17__["PasswordLoginComponent"], _trouble_login_trouble_login_component__WEBPACK_IMPORTED_MODULE_18__["TroubleLoginComponent"], _newsbox_login_newsbox_login_component__WEBPACK_IMPORTED_MODULE_19__["NewsboxLoginComponent"], _newsbox_register1_newsbox_register1_component__WEBPACK_IMPORTED_MODULE_20__["NewsboxRegister1Component"], _newsbox_register2_newsbox_register2_component__WEBPACK_IMPORTED_MODULE_21__["NewsboxRegister2Component"], _newsbox_register3_newsbox_register3_component__WEBPACK_IMPORTED_MODULE_22__["NewsboxRegister3Component"], _user_register1_user_register1_component__WEBPACK_IMPORTED_MODULE_23__["UserRegister1Component"], _user_register2_user_register2_component__WEBPACK_IMPORTED_MODULE_24__["UserRegister2Component"], _user_register3_user_register3_component__WEBPACK_IMPORTED_MODULE_25__["UserRegister3Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]
            ],
            exports: [_phone_number_phone_number_component__WEBPACK_IMPORTED_MODULE_3__["PhoneNumberComponent"], _register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"]]
        })
    ], RegisterFormModule);
    return RegisterFormModule;
}());



/***/ }),

/***/ "./src/app/register-form/trouble-login/trouble-login.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/register-form/trouble-login/trouble-login.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    padding: 20px 15px;\r\n}\r\n\r\nimg {\r\n    max-width: -webkit-fill-available;\r\n}\r\n\r\ndiv .input-container {\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n    padding: 20px 15px;\r\n}\r\n\r\nlabel {\r\n    font-size: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\n.mat-form-field {\r\n    margin: 0 5px;\r\n    font-size: medium;\r\n    \r\n}\r\n\r\n::ng-deep .mat-form-field-flex{\r\n    padding: 5px 5px;\r\n    background-color: #E5E4E4;\r\n}\r\n\r\n::ng-deep .mat-form-field-outline-start {\r\n    border-radius: 28px 0 0 28px !important;\r\n    min-width: 28px !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-outline-end {\r\n    border-radius: 0 28px 28px 0 !important;\r\n}\r\n\r\nbutton, input {\r\n    padding: 5px 20px;\r\n    margin: 10px 20px;\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    font-weight: normal;\r\n    color: #fff;\r\n}\r\n\r\ninput {\r\n    padding: 15px 20px;\r\n    background-color: #E5E4E4;\r\n    color: #1A1718;\r\n    border: 0;\r\n    font-size: small;\r\n}\r\n\r\n.mat-basic {\r\n    color: rgba(26, 23, 24, 0.2);\r\n    text-decoration: none;\r\n}\r\n\r\n.mat-primary {\r\n    background-color: var(--primaryColor);\r\n    color: #fff;\r\n}\r\n\r\n.mat-accent {\r\n    background-color: var(--secondaryColor);\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS90cm91YmxlLWxvZ2luL3Ryb3VibGUtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItZm9ybS90cm91YmxlLWxvZ2luL3Ryb3VibGUtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuZGl2IC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleHtcclxuICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNEU0O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweCAwIDAgMjhweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDI4cHggMjhweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbiwgaW5wdXQge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNEU0O1xyXG4gICAgY29sb3I6ICMxQTE3MTg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ubWF0LWJhc2ljIHtcclxuICAgIGNvbG9yOiByZ2JhKDI2LCAyMywgMjQsIDAuMik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4ubWF0LXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiAgXHJcbi5tYXQtYWNjZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register-form/trouble-login/trouble-login.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/register-form/trouble-login/trouble-login.component.ts ***!
  \************************************************************************/
/*! exports provided: TroubleLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TroubleLoginComponent", function() { return TroubleLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TroubleLoginComponent = /** @class */ (function () {
    function TroubleLoginComponent(fb) {
        this.fb = fb;
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TroubleLoginComponent.prototype.onSubmit = function () {
        this.nextScreen.emit("phone");
    };
    TroubleLoginComponent.prototype.ngOnInit = function () {
        this.username = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    TroubleLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TroubleLoginComponent.prototype, "nextScreen", void 0);
    TroubleLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trouble-login',
            template: __webpack_require__(/*! raw-loader!./trouble-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/trouble-login/trouble-login.component.html"),
            styles: [__webpack_require__(/*! ./trouble-login.component.css */ "./src/app/register-form/trouble-login/trouble-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TroubleLoginComponent);
    return TroubleLoginComponent;
}());



/***/ }),

/***/ "./src/app/register-form/user-register1/user-register1.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/register-form/user-register1/user-register1.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div .input-container {\r\n    padding: 70px;\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin: 30px 30px;\r\n}\r\n\r\nbutton, input {\r\n    padding: 5px 20px;\r\n    margin: 5px 20px;\r\n    border-radius: 10px;\r\n    line-height: 40px;\r\n    font-size: large;\r\n    font-weight: normal;\r\n    border: none;\r\n}\r\n\r\ninput {\r\n    background-color: #E5E4E4;\r\n    color: #1A1718;\r\n}\r\n\r\n.header {\r\n    padding: 20px 12px;\r\n}\r\n\r\n.mat-primary {\r\n    background-color: var(--primaryColor);\r\n    color: #fff;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS91c2VyLXJlZ2lzdGVyMS91c2VyLXJlZ2lzdGVyMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vdXNlci1yZWdpc3RlcjEvdXNlci1yZWdpc3RlcjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDcwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAzMHB4IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiwgaW5wdXQge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU0RTQ7XHJcbiAgICBjb2xvcjogIzFBMTcxODtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEycHg7XHJcbn1cclxuXHJcbi5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/register-form/user-register1/user-register1.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/register-form/user-register1/user-register1.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserRegister1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegister1Component", function() { return UserRegister1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var UserRegister1Component = /** @class */ (function () {
    function UserRegister1Component(fb) {
        this.fb = fb;
        this.onFormGroupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserRegister1Component.prototype.onSubmit = function () {
        this.nextScreen.emit("userRegister2");
    };
    UserRegister1Component.prototype.ngOnInit = function () {
        this.user1 = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    UserRegister1Component.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UserRegister1Component.prototype, "onFormGroupChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UserRegister1Component.prototype, "nextScreen", void 0);
    UserRegister1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-register1',
            template: __webpack_require__(/*! raw-loader!./user-register1.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/user-register1/user-register1.component.html"),
            styles: [__webpack_require__(/*! ./user-register1.component.css */ "./src/app/register-form/user-register1/user-register1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserRegister1Component);
    return UserRegister1Component;
}());



/***/ }),

/***/ "./src/app/register-form/user-register2/user-register2.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/register-form/user-register2/user-register2.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div .input-container {\r\n    padding: 70px;\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\ndiv .input-container2 {\r\n    display: inline-block;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nform {\r\n    padding: 70px;\r\n    display: inline-block;\r\n    display: grid;\r\n    text-align: center;\r\n    align-content: center;\r\n}\r\n\r\nh2 {\r\n    margin: 30px 30px;\r\n}\r\n\r\nbutton, input {\r\n    padding: 5px 20px;\r\n    margin: 5px 20px;\r\n    border-radius: 10px;\r\n    line-height: 40px;\r\n    font-size: large;\r\n    font-weight: normal;\r\n    border: none;\r\n}\r\n\r\ninput {\r\n    background-color: #E5E4E4;\r\n    color: #1A1718;\r\n    border: 1px solid #1A1718;\r\n}\r\n\r\n.header {\r\n    padding: 20px 12px;\r\n}\r\n\r\n.mat-primary {\r\n    background-color: var(--primaryColor);\r\n    color: #fff;\r\n}\r\n\r\n.button-bar {\r\n    margin: 20px 0;\r\n    display: inline-block;\r\n    justify-content: center;\r\n}\r\n\r\n.button {\r\n    background-color: #E5E4E4;\r\n    border: 1px solid #1A1718;\r\n    padding: 15px 50px;\r\n    margin: 0 5px;\r\n    border-radius: 10px;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS91c2VyLXJlZ2lzdGVyMi91c2VyLXJlZ2lzdGVyMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vdXNlci1yZWdpc3RlcjIvdXNlci1yZWdpc3RlcjIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDcwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2IC5pbnB1dC1jb250YWluZXIyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDcwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW46IDMwcHggMzBweDtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFNDtcclxuICAgIGNvbG9yOiAjMUExNzE4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFBMTcxODtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEycHg7XHJcbn1cclxuXHJcbi5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idXR0b24tYmFyIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQTE3MTg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register-form/user-register2/user-register2.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/register-form/user-register2/user-register2.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserRegister2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegister2Component", function() { return UserRegister2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserRegister2Component = /** @class */ (function () {
    function UserRegister2Component() {
    }
    UserRegister2Component.prototype.ngOnInit = function () {
    };
    UserRegister2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-register2',
            template: __webpack_require__(/*! raw-loader!./user-register2.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/user-register2/user-register2.component.html"),
            styles: [__webpack_require__(/*! ./user-register2.component.css */ "./src/app/register-form/user-register2/user-register2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserRegister2Component);
    return UserRegister2Component;
}());



/***/ }),

/***/ "./src/app/register-form/user-register3/user-register3.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/register-form/user-register3/user-register3.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vdXNlci1yZWdpc3RlcjMvdXNlci1yZWdpc3RlcjMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/register-form/user-register3/user-register3.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/register-form/user-register3/user-register3.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserRegister3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegister3Component", function() { return UserRegister3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserRegister3Component = /** @class */ (function () {
    function UserRegister3Component() {
    }
    UserRegister3Component.prototype.ngOnInit = function () {
    };
    UserRegister3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-register3',
            template: __webpack_require__(/*! raw-loader!./user-register3.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-form/user-register3/user-register3.component.html"),
            styles: [__webpack_require__(/*! ./user-register3.component.css */ "./src/app/register-form/user-register3/user-register3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserRegister3Component);
    return UserRegister3Component;
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
    production: false,
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jibre\Documents\Ahmad-Dubai\clickpad-main\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map