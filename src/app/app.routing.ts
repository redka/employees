import * as angular from 'angular';

export function AppRouting(
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider,
  $locationProvider: angular.ILocationProvider
) {
  $stateProvider
    .state('employees', {
      url: '/employees',
      component: 'employees',
      data: {
        authorizedOnly: true
      }
    })
    .state('editEmployee', {
      url: '/employees/:id',
      component: 'editEmployee',
      data: {
        authorizedOnly: true
      }
    })
    .state('profileEmployee', {
      url: '/employees/profile/:id',
      component: 'profileEmployee',
      data: {
        authorizedOnly: true
      }
    })
    .state('createEmployee', {
      url: '/employees/create',
      component: 'createEmployee',
      data: {
        authorizedOnly: true
      }
    })
    .state('login', {
      url: '/login',
      component: 'login'
    });
  $urlRouterProvider.otherwise('/employees');

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);


}
