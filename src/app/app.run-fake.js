"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AppRunFakeBack($httpBackend) {
    var employeesList = [
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
            "fullName": "Redka Vasyl",
            "department": "Development",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "7",
            "fullName": "Maks Face",
            "department": "Marketing",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "8",
            "fullName": "Masha One",
            "department": "Design",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "9",
            "fullName": "Andrey",
            "department": "Development",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "10",
            "fullName": "Roma Derman",
            "department": "Design",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "11",
            "fullName": "Redka Vasyl",
            "department": "Development",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "12",
            "fullName": "Maks Face",
            "department": "Marketing",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "13",
            "fullName": "Masha One",
            "department": "Design",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "14",
            "fullName": "Andrey",
            "department": "Development",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "15",
            "fullName": "Roma Derman",
            "department": "Design",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "16",
            "fullName": "Redka Vasyl",
            "department": "Development",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "17",
            "fullName": "Maks Face",
            "department": "Marketing",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "18",
            "fullName": "Masha One",
            "department": "Design",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "19",
            "fullName": "Andrey",
            "department": "Development",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        },
        {
            "id": "20",
            "fullName": "Roma Derman",
            "department": "Design",
            "notes": "fgfgregjnfjivdfnjdfinvdfvdfivndfvdfv"
        }
    ];
    var host = 'http://localhost:8080';
    var user = {
        email: 'example@me',
        password: 'password'
    };
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
        if (!id)
            return null;
        var index = -1;
        for (var i = 0; i < employeesList.length; i++) {
            var o = employeesList[i];
            if (id == o.id) {
                index = i;
                break;
            }
        }
        return index;
    }
    $httpBackend.whenPOST(host + "/api/login").respond(function (method, url, params) {
        console.log("POST -> " + url);
        var obj = JSON.parse(params);
        if (user.email != obj.email) {
            return [422, "Unprocessable Entity", {}, 'Email not found!'];
        }
        else if (user.password != obj.password) {
            return [422, "Unprocessable Entity", {}, 'Password is invalid!'];
        }
        var token = guid();
        return [200, token];
    });
    $httpBackend.whenGET(/\/api\/employees[\?search=]?.*/).respond(function (method, url, data) {
        console.log("GET -> " + url);
        if (employeesList.length != 0) {
            var searchValue_1 = url.split("search=");
            var simpleUrl = url.split("/");
            console.log('simpleUrl.length', simpleUrl, searchValue_1);
            if (simpleUrl.length == 5 && searchValue_1.length == 1) {
                return [200, employeesList.slice()];
            }
            else if (simpleUrl.length == 6 && searchValue_1.length == 1) {
                var id = simpleUrl[simpleUrl.length - 1];
                var index = findEmployeesIndexById(id);
                if (index != -1) {
                    return [200, employeesList[index]];
                }
            }
            else if (searchValue_1.length == 2) {
                var filterEmployees = employeesList.filter(function (item) {
                    if (item.fullName.indexOf(searchValue_1[1]) != -1) {
                        return item;
                    }
                });
                if (filterEmployees.length == 0) {
                    return [204, "No Content"];
                }
                else if (filterEmployees.length > 0) {
                    return [200, filterEmployees.slice()];
                }
            }
        }
        return [404, "NOT-FOUND"];
    });
    $httpBackend.whenPOST(host + "/api/employees").respond(function (method, url, params) {
        console.log("POST -> " + url);
        var o = JSON.parse(params);
        o = o.data;
        o.id = employeesList.length + 1;
        employeesList.push(o);
        return [200, "Success"];
    });
    $httpBackend.whenPUT(/\/api\/employees\/.*/).respond(function (method, url, params) {
        console.log("PUT -> " + url);
        var o = JSON.parse(params);
        o = o.data;
        var index = findEmployeesIndexById(o.id);
        if (index != -1) {
            employeesList[index] = o;
            return [200, 'Success'];
        }
        return [404, 'NOT-FOUND'];
    });
    $httpBackend.whenDELETE(/\/api\/employees\/.*/).respond(function (method, url, data) {
        console.log("DELETE -> " + url);
        var parts = url.split("/");
        var id = parts[parts.length - 1];
        var index = findEmployeesIndexById(id);
        if (index != -1) {
            employeesList.splice(index, 1);
            return [200, { index: index }, {}, 'Success'];
        }
        return [404, 'NOT-FOUND!!'];
    });
}
exports.AppRunFakeBack = AppRunFakeBack;
