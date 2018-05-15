"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var API = {
    url: "http://localhost:8080/api"
};
var ApiService = (function () {
    function ApiService($http, $cookies) {
        this.$http = $http;
        this.$cookies = $cookies;
    }
    ApiService.prototype.getToken = function () {
        return this.$cookies.get('token');
    };
    ApiService.prototype.setToken = function (t) {
        this._token = t;
        this.$cookies.put('token', t);
    };
    Object.defineProperty(ApiService.prototype, "isExists", {
        get: function () {
            return !!this.getToken();
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.login = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        return this.$http.post(API.url + '/login', { email: email, password: password })
            .then(function (res) {
            _this.setToken(res.data);
            return true;
        })
            .catch(function (err) {
            return err;
        });
    };
    ;
    ApiService.prototype.logout = function () {
        this._token = null;
        this.$cookies.remove('token');
    };
    ;
    ApiService.prototype.getAllEmployees = function (data) {
        return this.$http.get(API.url + '/employees', { params: { search: data } })
            .then(function (res) {
            return res;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ;
    ApiService.prototype.getEmployee = function (id) {
        return this.$http.get(API.url + '/employees/' + id)
            .then(function (res) {
            return res;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ApiService.prototype.createEmployee = function (data) {
        return this.$http.post(API.url + '/employees', { data: data })
            .then(function (res) {
            return res;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ApiService.prototype.updateEmployee = function (data) {
        return this.$http.put(API.url + '/employees/' + data.id, { data: data })
            .then(function (res) {
            return res;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ;
    ApiService.prototype.deleteEmployee = function (data) {
        return this.$http.delete(API.url + '/employees/' + data)
            .then(function (res) {
            return res;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return ApiService;
}());
exports.ApiService = ApiService;
