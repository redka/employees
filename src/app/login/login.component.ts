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

    $location: angular.ILocationService;
    Auth: ApiService;

    constructor($location, ApiService) {
      this.$location = $location;
      this.Auth = ApiService;
    }

    login(form) {
      if (form.$valid) {
        console.log('user', this.user);
        this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
          .then((success) => {
            console.log(success);
            this.$location.path('/');
          })
          .catch(err => {
            console.log(err);
          });
      }
    }

  }
};


