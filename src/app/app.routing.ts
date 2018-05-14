import * as angular from 'angular';

export function AppRouting(
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider,
  $locationProvider: angular.ILocationProvider
) {
  $stateProvider
    .state('employees', {
      url: '/employees',
      component: 'employees'
    })
    .state('editEmployee', {
      url: '/employees/:id',
      component: 'editEmployee'
    })
    .state('createEmployee', {
      url: '/employees/create',
      component: 'createEmployee'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    });
  $urlRouterProvider.otherwise('/employees');

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);


}
