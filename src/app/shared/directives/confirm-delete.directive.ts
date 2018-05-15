import * as angular from 'angular';

export class ConfirmDeleteDirective implements angular.IDirective {
  restrict: string;

  constructor(private $mdDialog: angular.material.IDialogService, private $timeout: angular.ITimeoutService) {
    this.restrict = 'A';
    this.$mdDialog = $mdDialog;
    this.$timeout = $timeout;
  }

  link = function(
    scope: any,
    element: angular.IAugmentedJQuery,
    attrs: angular.IAttributes
  ) {

    element.bind('click', (ev) => {
      let confirm = this.$mdDialog.confirm()
        .title('Are you really want delete?')
        .targetEvent(ev)
        .ok('Yes')
        .cancel('No');

      this.$mdDialog.show(confirm).then((suc) => {
        this.$timeout(() => {
          scope.$eval(attrs.confirmDeleteClick);
        }, 0);
      }, function(no) {
        console.log('No', no);
      });
    });

  };

  static factory(): angular.IDirectiveFactory {
    let directive: angular.IDirectiveFactory =
      ($mdDialog: angular.material.IDialogService, $timeout: angular.ITimeoutService) => new ConfirmDeleteDirective($mdDialog, $timeout);
    directive.$inject = ["$mdDialog", "$timeout"];
    return directive;
  }
}

