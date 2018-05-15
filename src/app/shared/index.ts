import * as angular from 'angular';
import {ApiService} from "./services/api.service";
import {ConfirmDeleteDirective} from "./directives/confirm-delete.directive";

export const SharedModule = angular
  .module('app.shared', [])
  .service('ApiService', ApiService)
  .directive('confirmDelete', ConfirmDeleteDirective.factory())
  .name;
