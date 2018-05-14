import * as angular from 'angular';

import uiRouter from 'angular-ui-router';
import * as ngMaterial from 'angular-material';

import { AppModule } from './app/';

angular.bootstrap(document, [
  AppModule,
  uiRouter,
  ngMaterial
]);
