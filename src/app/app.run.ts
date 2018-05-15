import * as angular from 'angular';
import {ApiService} from "./shared/services/api.service";

export function AppRun(
  $rootScope: angular.IRootScopeService,
  $cookies: angular.cookies.ICookiesService,
  $location: angular.ILocationService,
  ApiService: ApiService,
  $state: angular.ui.IStateService
) {

  $rootScope.$on('$locationChangeStart',  (event, next, current) => {
    let path = next.split("/");

    if (path[3] !== 'login' && !ApiService.isExists) {
      event.preventDefault();
      $location.path('/login');
    } else if(path[3] == 'login' && ApiService.isExists) {
      $location.path('/employees');
    }
  });
}
