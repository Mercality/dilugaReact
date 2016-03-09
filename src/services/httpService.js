var Fetch = require('whatwg-fetch');

var baseUrl = 'http://192.168.8.15:6069';
var ingredients = '/ingredients';
var service = {
    get: function(url) {
        return fetch(baseUrl + url)
        .then (function(response) {
            return response.json();
        });
    },

    post: function(url, body) {
        return fetch(baseUrl + url, {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        })
    },

    checkStatus: function(response) {
          if (response.status >= 200 && response.status < 300) {

            return response
          } else {

            var error = new Error(response.statusText)
            error.response = response
            throw error
          }
    },
}


module.exports = service;
