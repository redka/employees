"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = {
    template: require('./login.component.html'),
    controller: (function () {
        function LoginComponent($location, $timeout, ApiService) {
            this.user = {
                email: '',
                password: ''
            };
            this.$location = $location;
            this.Auth = ApiService;
            this.$timeout = $timeout;
        }
        LoginComponent.prototype.login = function (form) {
            var _this = this;
            if (form.$valid) {
                console.log('user', this.user);
                this.Auth.login({
                    email: this.user.email,
                    password: this.user.password
                })
                    .then(function (success) {
                    console.log(success);
                    if (success.status === 422) {
                        _this.serverError = success.statusText;
                        _this.$timeout(function () {
                            _this.serverError = '';
                        }, 3000);
                    }
                    else {
                        _this.$location.path('/');
                    }
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
        };
        return LoginComponent;
    }())
};
