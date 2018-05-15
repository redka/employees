import * as angular from 'angular';
import 'angular-material/angular-material';
import * as ngCookies from "angular-cookies";
import * as ngMockE2E from "angular-mocks/ngMockE2E";

import { AppComponent } from './app.component';

import { EmployeesModule } from './employees/';
import { LoginModule } from './login/';

import { SharedModule } from './shared/';

import { AppRouting } from './app.routing';
import { AppRun} from "./app.run";
import { EditEmployeeModule } from "./edit-employee/edit-employee.module";
import { CreateEmployeeModule } from "./create-employee/create-employee.module";
import { AppRunFakeBack } from "./app.run-fake";
import { ProfileEmployeeModule } from "./profile-employee/profile-employee.module";

export const AppModule = angular
  .module('app', [
    'ui.router',
    ngCookies,
    ngMockE2E,
    EmployeesModule,
    LoginModule,
    SharedModule,
    EditEmployeeModule,
    CreateEmployeeModule,
    ProfileEmployeeModule
  ])
  .component('appRoot', AppComponent)
  .config(AppRouting)
  .run(AppRun)
  .run(AppRunFakeBack)
  .name;
