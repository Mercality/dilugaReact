var Fetch = require('whatwg-fetch');
var env = require('../../env.js');

var baseUrl = 'http://' + env.serverAddr + ':' + env.serverPort;
var ingredients = '/ingredients';
var service = {
    get: function(url) {
        return fetch(baseUrl + url)
        .then (function(response) {
            return response;
        });
    },

    post: function(url, body, apiUrl) {
        baseUrl = apiUrl !== undefined ? apiUrl : baseUrl;
        return fetch(baseUrl + url, {
            credentials: 'include',
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

    checkStatus: function(response) {
          if (response.status >= 200 && response.status < 300) {
            return response.json()
          }
          else if (typeof response === 'string') {
              return response;
          } else {

            var error = new Error(response.statusText)
            error.response = response
            throw error
          }
    },
}


module.exports = service;
