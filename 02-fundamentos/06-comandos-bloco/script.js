var a = 5;

var b = 4;

if (a > b)
    console.log("Sim");
else if (a == b)
    console.log("Nao");

else

    console.log("nenhum");



//prettier-ignore

const valor = 5;

switch (valor) {
    case 1:
        console.log("Valor 1");
        break;

    case 2:
        console.log("Valor 2");
        break;

    case 3:
        console.log("Valor 3");
        break;
    default:
        console.log("Nenhum");
}

//strutura de repeticao;

//while
var numerActual = 1;

var somatorio = 0;

while (numerActual < 10) {
    somatorio += numerActual;
    numerActual++;


}

//do while
do {
    somatorio += numerActual;
    numerActual++;

} while (numerActual < 10) {}
// for

for (var a = 1; a <= 10; a -= -1) {
    //  console.log(a)

}

//funcao