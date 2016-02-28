var addProperties = function(data, pos, propName, value) {
    //Array of objects
    var newArr = [];

    if(data.length > 1) {

        data.forEach(function(obj, index) {

            var newObj = mutateObj(obj, pos, propName, value);
            newArr[index] = newObj;

        });

    } else {

        var newArr = mutateObj(data, pos, propName, value);
    }

    return newArr;
}

function mutateObj(obj, pos, propName, value) {
    var newObj = {};

    for (var key in obj) {

        if (typeof pos !== 'undefined' && pos === key) {
            newObj[key] = obj[key];
            newObj[propName] = value;

        }

        if (typeof pos == 'undefined') {

            newObj[propName] = value;
            newObj[key] = obj[key];
        }

        newObj[key] = obj[key];
    }

    return newObj;
}




module.exports = addProperties;
