import {ApiService} from "./shared/services/api.service";

export const AppComponent = {
  template: require('./app.component.html'),
  controller: class AppComponent {
    $location: angular.ILocationService;
    Auth: ApiService;

    constructor($location, ApiService) {
      this.$location = $location;
      this.Auth = ApiService;
    }

    logout() {
      this.Auth.logout();
      this.$location.path('/login');
    }

  }
};
