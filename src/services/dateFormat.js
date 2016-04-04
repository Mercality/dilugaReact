var dateFormat = {
    format: function(date, separator) {
        var date = new Date(date);
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
            month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth(),
            year = date.getFullYear();
        return day + separator + month + separator + year;
    },

    human: function(dat) {
        var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        var date = new Date(dat);

        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
        return day+1 + ' de ' + meses[month] + ' de ' + year;
    }
}

module.exports = dateFormat;
