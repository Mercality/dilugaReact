var History = require('react-router/lib/hashHistory');
var React = require('react');
var errorHandler = {

    check: function(res) {

        if (res.error) {
            res.json.then(function(error) {
                var message = error.statusText || 'Not Found',
                status = error.statusCode,
                messageList = '&messageList='+encodeURIComponent(JSON.stringify(error));


                History.push('/messages');
                History.replace({
                    pathname: '/messages?status='+status+'&message='+message+messageList
                });


            })
            throw new Error('The was an error, check messages page for detailed information');
        }

    },

}


module.exports = errorHandler;
