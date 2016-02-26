var classie = require('desandro-classie');

var toggleErrors = function(element, valid) {
    if (valid) {
        if (classie.has(element, 'has-error')) classie.remove(element, 'has-error');
        classie.add(element, 'has-success');
    } else {
        if (classie.has(element, 'has-success')) classie.remove(element, 'has-success');
        classie.add(element, 'has-error');
    }
}

module.exports = toggleErrors;
