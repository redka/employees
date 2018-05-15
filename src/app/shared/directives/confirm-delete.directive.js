"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfirmDeleteDirective = (function () {
    function ConfirmDeleteDirective($mdDialog, $timeout) {
        this.$mdDialog = $mdDialog;
        this.$timeout = $timeout;
        this.link = function (scope, element, attrs) {
            var _this = this;
            element.bind('click', function (ev) {
                var confirm = _this.$mdDialog.confirm()
                    .title('Are you really want delete?')
                    .targetEvent(ev)
                    .ok('Yes')
                    .cancel('No');
                _this.$mdDialog.show(confirm).then(function (suc) {
                    _this.$timeout(function () {
                        scope.$eval(attrs.confirmDeleteClick);
                    }, 0);
                }, function (er) {
                    console.log('No', er);
                });
            });
        };
        this.restrict = 'A';
        this.$mdDialog = $mdDialog;
        this.$timeout = $timeout;
    }
    ConfirmDeleteDirective.factory = function () {
        var directive = function ($mdDialog, $timeout) { return new ConfirmDeleteDirective($mdDialog, $timeout); };
        directive.$inject = ["$mdDialog", "$timeout"];
        return directive;
    };
    return ConfirmDeleteDirective;
}());
exports.ConfirmDeleteDirective = ConfirmDeleteDirective;
