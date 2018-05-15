import * as angular from 'angular';

export function AppRunFakeBack(
  $httpBackend: angular.IHttpBackendService
) {
  let employeesList = [
    {
      "id": "1",
      "fullName": "Redka Vasyl",
      "department": "Development",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "2",
      "fullName": "Maks Face",
      "department": "Marketing",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "3",
      "fullName": "Masha One",
      "department": "Design",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "4",
      "fullName": "Andrey",
      "department": "Development",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "5",
      "fullName": "Roma Derman",
      "department": "Design",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "6",
      "fullName": "Petro Zagordniy",
      "department": "Development",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "7",
      "fullName": "Ivan Ivanov",
      "department": "Marketing",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "8",
      "fullName": "Slava Prokopenko",
      "department": "Design",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "9",
      "fullName": "Galuna Demchuk",
      "department": "Development",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "10",
      "fullName": "Vadym Chornyi",
      "department": "Design",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "11",
      "fullName": "Vova Lutva",
      "department": "Development",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "12",
      "fullName": "Diana Melnyk",
      "department": "Marketing",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "13",
      "fullName": "Dasha Kuznetsova",
      "department": "Design",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "14",
      "fullName": "Anna Pavlova",
      "department": "Development",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "15",
      "fullName": "Taras Shevchenko",
      "department": "Design",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "16",
      "fullName": "Ivan Karpenko",
      "department": "Development",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "17",
      "fullName": "Borys Vasyliuk",
      "department": "Marketing",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "18",
      "fullName": "Olya Viter",
      "department": "Design",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "19",
      "fullName": "Bogdan Savchenko",
      "department": "Development",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    },
    {
      "id": "20",
      "fullName": "Svitlana Soroka",
      "department": "Design",
      "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
    }
  ];
  let host = 'http://localhost:8080';

  let user: any = {
    email: 'example@me',
    password: 'password'
  }

  function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

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

  $httpBackend.whenPOST(host + "/api/login").respond(function(method, url, params?: string) {
    console.log("POST -> " + url);
    let obj = JSON.parse(params);

    if(user.email != obj.email) {
      return [422, "Unprocessable Entity", {}, 'Email not found!']
    } else if (user.password != obj.password) {
      return [422, "Unprocessable Entity", {}, 'Password is invalid!']
    }

    let token = guid();
    return [200, token];
  } );

  $httpBackend.whenGET(/\/api\/employees[\?search=]?.*/).respond((method, url, data) => {
    console.log("GET -> " + url);
    if(employeesList.length != 0) {
      let searchValue = url.split("search=");
      let simpleUrl = url.split("/");

      console.log('simpleUrl.length', simpleUrl, searchValue)
      if(simpleUrl.length == 5 && searchValue.length == 1) {
        return [200, employeesList.slice()];
      }

      else if (simpleUrl.length == 6 && searchValue.length == 1) {
        let id = simpleUrl[simpleUrl.length - 1];
        let index = findEmployeesIndexById(id);
        if (index != -1) {
          return [200, employeesList[index]];
        }
      }

      else if (searchValue.length == 2) {

        let filterEmployees = employeesList.filter((item) => {
          if (item.fullName.indexOf(searchValue[1]) != -1) {
            return item;
          }
        });
        if(filterEmployees.length == 0) {
          return [204, "No Content"];
        } else if (filterEmployees.length > 0) {
          return [200, filterEmployees.slice()];
        }
      }


    }
    return [404, "NOT-FOUND"];
  });

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

    if (index != -1) {
      employeesList.splice(index, 1);
      return [200, {index: index}, {}, 'Success'];
    }

    return [404, 'NOT-FOUND!!'];
  } );

}
