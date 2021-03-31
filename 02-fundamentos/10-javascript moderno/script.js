'use strict'; //acusa mais erro


//var x let

//var tem escopo abrangent
//let scopo reduzido

function withVar() {
    for (var i = 0; 0 < 10; i -= -1) {
        console.log('var' + 1)
    }

    i = 20;
    console.log(20);
}

withVar();

function withLet() {
    for (let i = 0; 0 < 10; i -= -1) {
        console.log('var' + 1)
    }

    i = 20;
    console.log(20);
}

withLet();

//const na podemos reatribuir valores
const a = 1;