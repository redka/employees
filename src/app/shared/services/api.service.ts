import * as angular from 'angular';

export interface IApi {
  url: string;
}

const API: IApi = {
  url: "http://localhost:8080/api"
};

export class ApiService {
  $http: angular.IHttpService;
  $cookies: angular.cookies.ICookiesService;

  constructor($http, $cookies) {
    this.$http = $http;
    this.$cookies = $cookies;
  }

  login({email, password}) {
    return this.$http.post(API.url + '/login', { email, password })
      .then((res) => {
        let token: any = res.data;
        this.$cookies.put('token', token);
        return true;
      })
      .catch(err => {
        return err;
      });
  };

  logout() {
    this.$cookies.remove('token');
  };

  getAllEmployees() {
    return this.$http.get(API.url + '/employees', {})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  };

  getEmployee(id){
    return this.$http.get(API.url + '/employees/' + id)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  createEmployee(data) {
    return this.$http.post(API.url + '/employees', {data})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateEmployee(data) {
    return this.$http.put(API.url + '/employees/' + data.id, {data})
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  };



}