import * as angular from 'angular';
import {ConfirmDeleteService} from "../services/confirm-delete.service";

export class ConfirmDeleteDirective implements angular.IDirective {
  restrict: string;
  template = `<div class="confirm">
                <h4>Are you really want delete?</h4>
                <button class="md-primary" >No</button>
                <button class="md-primary" ng-click="confirm()">Yes</button>
              </div>`;

  constructor() {
    this.restrict = 'E';
  }

  link = function(
    scope: angular.IScope,
    element: angular.IAugmentedJQuery,
    attributes: angular.IAttributes
  ) {
    this.ConfirmDeleteService = new ConfirmDeleteService();
    element.css({'display': 'none'});

    // scope.$watch(() => { confirmServ.isConfirmShow }, () => {
    //   console.log('-->', confirmServ.isConfirmShow);
    // })
    // console.log('scope', scope)
    // scope.confirmed = function(){
    //   console.log('button yes')
    // }
    // element.bind('click', function() {
    //   console.log('directive')
    //
    //
    // });
  }
}