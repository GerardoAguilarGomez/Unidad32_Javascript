var apoyo;
var operador;
var numero1;
var res;

function anadir(numero){
    var resul=document.getElementById("resultado").value;
    if(resul=="0"){
    document.getElementById("resultado").value=numero;
    }else{
        document.getElementById("resultado").value=document.getElementById("resultado").value + numero;  
    }
}

function coma(){
    var resul=document.getElementById("resultado").value;

    if(resul == 0) {
        apoyo = '0.';
    } else if(resul.indexOf('.') == -1) {
        apoyo += '.';
    }

    document.getElementById("resultado").value=apoyo;
}

function operacion(valor){
    numero1=document.getElementById("resultado").value;
    switch(valor){
        case 1:
            operador="+";
            break;
        case 2:
            operador="-";
            break;
        case 3:
            operador="*";
            break;
        case 4:
            operador="/";
    }
    document.getElementById("resultado").value=0
}

function calcular(){
    switch(operador){
        case "+":
            res=numero1 + document.getElementById("resultado").value
            break;
        case "-":
            res=numero1 - document.getElementById("resultado").value
            break;
        case "*":
            res=numero1 * document.getElementById("resultado").value
            break;
        case "/":
            res=numero1 / document.getElementById("resultado").value
    }
    document.getElementById("resultado").value=res;
}
