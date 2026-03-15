let a = "";
let b = "";
let op = "";
function suma(a,b){
    let r=0;
    r= a+b;
    return r;
}
function resta(a,b){
    let r=0;
    r= a-b;
    return r;
}
function mul(a,b){
    let r=0;
    r= a*b;
    return r;
}
function div(a,b){
    let r=0;
    r= a/b;
    return r;
}
function limpiar(){
    a = "";
    b = "";
    op = "";
    document.getElementById("pantalla").innerHTML = "";
}
let pantalla = "";
function numero(n){
    if(op === ""){
        a += n;
        document.getElementById("pantalla").innerHTML = a;
    }
    else{
        b += n;
        document.getElementById("pantalla").innerHTML = a + op + b;
    }
}
function operador(signo){
    op = signo;
    document.getElementById("pantalla").innerHTML = a + op;
}
function igual(){
    let resultado;

    if(op === "+"){
        resultado = suma(Number(a), Number(b));
    }
    else if(op === "-"){
        resultado = resta(Number(a), Number(b));
    }
    else if(op === "*"){
        resultado = mul(Number(a), Number(b));
    }
    else if(op === "/"){
        resultado = div(Number(a), Number(b));
    }

    document.getElementById("pantalla").innerHTML = resultado;

    a = resultado;
    b = "";
    op = "";
}