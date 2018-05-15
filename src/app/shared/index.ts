import * as angular from 'angular';
import {ApiService} from "./services/api.service";
import {ConfirmDeleteDirective} from "./directives/confirm-delete.directive";
import {PaginationService} from "./services/pagination.service";

export const SharedModule = angular
  .module('app.shared', [])
  .service('ApiService', ApiService)
  .service('PaginationService', PaginationService)
  .directive('confirmDelete', ConfirmDeleteDirective.factory())
  .name;
