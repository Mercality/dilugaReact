var Fetch = require('whatwg-fetch');
var env = require('../../env.js');

var baseUrl = 'http://' + env.serverAddr;
var ingredients = '/ingredients';
var service = {
    get: function(url) {
        return fetch(baseUrl + url)
        .then (function(response) {
            return response;
        })
        .then(this.checkStatus);
    },

    post: function(url, body) {
        return fetch(baseUrl + url, {
            //credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        })
        .then(function(response) {
            return response;
        })
    },

    put: function(url, body) {
        return fetch(baseUrl + url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'put',
            body: JSON.stringify(body)
        })
        .then(function(response) {
            return response.json();
        })
    },

    checkStatus: function(response) {
          if (response.status >= 200 && response.status < 300)
            return response.json()

         else
            var error = {status: response.status, statusText: response.statusText }
            return error;

    },
}


module.exports = service;
