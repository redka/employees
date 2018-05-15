import * as angular from 'angular';
import { ProfileEmployeeComponent } from './profile-employee.component';

export const ProfileEmployeeModule = angular
    .module('app.profileEmployee', [])
    .component('profileEmployee', ProfileEmployeeComponent)
    .name;
