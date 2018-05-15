"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = {
    template: require('./app.component.html'),
    controller: (function () {
        function AppComponent($location, ApiService) {
            this.$location = $location;
            this.Auth = ApiService;
        }
        AppComponent.prototype.logout = function () {
            this.Auth.logout();
            this.$location.path('/login');
        };
        return AppComponent;
    }())
};
