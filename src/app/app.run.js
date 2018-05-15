"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AppRun($rootScope, $cookies, $location, ApiService, $state) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var path = next.split("/");
        if (path[3] !== 'login' && !ApiService.isExists) {
            event.preventDefault();
            $location.path('/login');
        }
        else if (path[3] == 'login' && ApiService.isExists) {
            $location.path('/employees');
        }
    });
}
exports.AppRun = AppRun;
