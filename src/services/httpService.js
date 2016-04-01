var Fetch = require('whatwg-fetch');
var env = require('../../env.js');

var baseUrl = 'http://' + env.serverAddr;
var ingredients = '/ingredients';
var service = {

    get: function(url, authorization) {
        var headers = {
            'Accept': 'application/json',
        }
        if (authorization) headers.Authorization = 'Bearer ' + authorization;

        return fetch(baseUrl + url, {
            headers: headers,
            'method': 'get'
        })
        .then(this.checkStatus);
    },

    post: function(url, body, authorization) {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (authorization) headers.Authorization = 'Bearer ' + authorization;
        return fetch(baseUrl + url, {
            headers: headers,
            method: 'post',
            body: JSON.stringify(body)
        })
        .then(this.checkStatus);
    },

    put: function(url, body, authorization) {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        if (authorization) headers.Authorization = 'Bearer ' + authorization;

        return fetch(baseUrl + url, {
            headers: headers,
            method: 'put',
            body: JSON.stringify(body)
        })
        .then(this.checkStatus);
    },

    checkStatus: function(response) {

          if (response.status >= 200 && response.status < 300)
            return response.json()

         else
             return {
                 error: true,
                 status: response.status,
                 text: response.statusText,
                 json: response.json()
             };

    },
}

module.exports = service;
