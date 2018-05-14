import * as angular from 'angular';
import {ApiService} from "../shared/services/api.service";

interface User {
  email: string;
  password: string;
}

export const LoginComponent = {
  template: require('./login.component.html'),
  controller: class LoginComponent {
    user: User = {
      email: '',
      password: ''
    };
    serverError: string;

    $location: angular.ILocationService;
    Auth: ApiService;
    $timeout: angular.ITimeoutService;

    constructor($location, $timeout, ApiService) {
      this.$location = $location;
      this.Auth = ApiService;
      this.$timeout = $timeout;
    }

    login(form) {
      if (form.$valid) {
        console.log('user', this.user);
        this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
          .then((success) => {
            if (success.status === 422) {
              this.serverError = success.statusText;
              this.$timeout(() => {
                this.serverError = '';
              }, 3000);
            } else {
              this.$location.path('/');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

  }
};


