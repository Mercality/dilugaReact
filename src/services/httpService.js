var Fetch = require('whatwg-fetch');
var env = require('../../env.js');

var baseUrl = 'http://' + env.serverAddr;
var ingredients = '/ingredients';
var service = {
    get: function(url) {
        return fetch(baseUrl + url, {
            headers: {
                'Accept': 'application/json',
            },
            'method': 'get'
        })
        .then (function(response) {
            return response;
        })
        .then(this.checkStatus);
    },

    post: function(url, body) {
        return fetch(baseUrl + url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        })
        .then(this.checkStatus);
    },

    put: function(url, body) {
        return fetch(baseUrl + url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
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
