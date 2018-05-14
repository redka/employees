import * as angular from 'angular';
import { LoginComponent } from './login.component';

export const LoginModule = angular
    .module('app.login', [])
    .component('login', LoginComponent)
    .name;
