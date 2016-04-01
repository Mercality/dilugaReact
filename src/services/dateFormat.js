var dateFormat = {
    format: function(date, separator) {
        var date = new Date(date);
        var day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay(),
            month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth(),
            year = date.getFullYear();
        return day + separator + month + separator + year;
    }
}

module.exports = dateFormat;
