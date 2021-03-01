function carga() {
    document.getElementById("p1").innerHTML = formatoFecha();

    document.getElementById("p2").innerHTML = formatoEmail("");

    document.getElementById("p3").innerHTML = formatoHtml("&");

    document.getElementById("p4").innerHTML = formatoNA();

    formatoScript();

}

function formatoFecha() {
    var fecha=prompt("Inserta fecha con formato ##/##/####");
    var reg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    return "Nací el " + fecha + " en Donostia: " + reg.test(fecha) + "<br/>";
}

function formatoEmail() {
    var email=prompt("Inserta una dirección de correo");
    var reg = /^[A-Za-z0-9.-]+@[A-Za-z0-9]+[.A-Za-z0-9]{3,4}$/;
    return email + " : " + reg.test(email) + "<br/>";
}

function formatoHtml(escape) {
    return escape
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function formatoNA() {
    na=prompt("Inserta nombre y apellido");
    return na.replace(/(\w+)\s(\w+)/, '$2, $1');
}

function formatoScript() {
    var codigoHtml = '<html><head> ...';
    return codigoHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}