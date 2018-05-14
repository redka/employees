import * as angular from 'angular';
import {ApiService} from "./services/api.service";
import {ConfirmDeleteDirective} from "./directives/confirm-delete.directive";
import {ConfirmDeleteService} from './services/confirm-delete.service'

export const SharedModule = angular
  .module('app.shared', [])
  .service('ApiService', ApiService)
  .service('ConfirmDeleteService', ConfirmDeleteService)
  .directive('confirmDelete', () => new ConfirmDeleteDirective)
  .name;
