var addProperties = function(data, pos, propName, value) {
    //Array of objects
    var newArr = [];

    if(data.length > 1) {

        data.forEach(function(obj, index) {
            var newObj = {};
            for (var key in obj) {
                console.log(key);
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

            newArr[index] = newObj;
        });

    } else {

    }

    return newArr;
}

module.exports = addProperties;
