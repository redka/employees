import * as angular from 'angular';

export function AppRun(
  $rootScope: angular.IRootScopeService,
  $cookies: angular.cookies.ICookiesService,
  $location: angular.ILocationService,
  $httpBackend: angular.IHttpBackendService
) {

  $rootScope.$on('$locationChangeStart',  (event, next, current) => {
    // if(!$cookies.get('token')) {
    //   $location.path('/login');
    // }
  });


  let employeesList = [
    {
      "id": "1",
      "fullName": "Redka Vasylqqw",
      "department": "developmentertertert",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "2",
      "fullName": "JPgfdgdfgdfg",
      "department": "developmentgfdgdfgdfg",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    }
  ];
  let host = 'http://localhost:8080';

  function findEmployeesIndexById(id) {
    if (!id) return null;
    let index = -1;

    for(let i = 0; i < employeesList.length; i++) {
      let o = employeesList[i];
      if (id == o.id) {
        index = i;
        break;
      }
    }

    return index;
  }

  $httpBackend.whenGET(host + '/api/employees').respond((method, url, data) => {
    if(employeesList.length != 0) {
      return [200, employeesList.slice()];
    } else if (employeesList.length == 0) {
      return [204, "No Content"];
    }
    return [404, "NOT-FOUND"];
  } );

  $httpBackend.whenGET(/\/api\/employees\/.*/).respond((method, url, data) => {
    let parts = url.split("/");
    let id = parts[parts.length - 1];
    let index = findEmployeesIndexById(id);
    if (index != -1) {
      return [200, employeesList[index]];
    }

    return [404, "NOT-FOUND"];
  } );

  $httpBackend.whenPOST(host + "/api/employees").respond(function(method, url, params?: string) {
    console.log("POST -> " + url);
    let o = JSON.parse(params);
    o = o.data;
    o.id = employeesList.length + 1;
    employeesList.push(o);
    return [200, "Success"];
  } );

  $httpBackend.whenPUT(/\/api\/employees\/.*/).respond(function(method, url, params?: string) {
    console.log("PUT -> " + url);
    let o = JSON.parse(params);
    o = o.data;
    let index = findEmployeesIndexById(o.id);

    if (index != -1) {
      employeesList[index] = o;
      return [200, 'Success'];
    }

    return [404, 'NOT-FOUND'];
  } );


  $httpBackend.whenDELETE(/\/api\/employees\/.*/).respond(function(method, url, data) {
    console.log("DELETE -> " + url);

    let parts = url.split("/");
    let id = parts[parts.length - 1];
    let index = findEmployeesIndexById(id);
    // if (parts.length != 2) {
    //   return [409, "invalid id"];
    // }
    if (index != -1) {
      employeesList.splice(index, 1);
      return [200, 'SUCCESS!!'];
    }

    return [404, 'NOT-FOUND!!'];
  } );


}
