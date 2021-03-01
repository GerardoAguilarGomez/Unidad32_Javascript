function sumar() {
    var contador = 0;
    var array_numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var array_totales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var suma;

    while (contador < 36000) {
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;

        suma = dado1 + dado2;
        //alert(suma);
        switch (suma) {
            case 2:
                array_totales[0] = array_totales[0] + 1;
                break;
            case 3:
                array_totales[1] = array_totales[1] + 1;
                break;
            case 4:
                array_totales[2] = array_totales[2] + 1;
                break;
            case 5:
                array_totales[3] = array_totales[3] + 1;
                break;
            case 6:
                array_totales[4] = array_totales[4] + 1;
                break;
            case 7:
                array_totales[5] = array_totales[5] + 1;
                break;
            case 8:
                array_totales[6] = array_totales[6] + 1;
                break;
            case 9:
                array_totales[7] = array_totales[7] + 1;
                break;
            case 10:
                array_totales[8] = array_totales[8] + 1;
                break;
            case 11:
                array_totales[9] = array_totales[9] + 1;
                break;
            case 12:
                array_totales[10] = array_totales[10] + 1;
                break;
        }

        contador++;
    }
    var mensaje;
    for (var i = 0; i < array_numeros.length; i++) {
        mensaje = "Numero " + array_numeros[i] + ": " + array_totales[i] + " veces <br>";
        document.getElementById("resultados").innerHTML += mensaje;
    }

}