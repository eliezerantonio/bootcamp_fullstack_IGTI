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

//const nao podemos reatribuir valores
const a = 1;

function sum(a, b) {
    return a + b;

}
const sum2 = function(a, b) { // funcao anonima
    return a + b;
}

// arrow function

const sum3 = (a, b) => {
    return a + b;
}

//arrow function reduzida, quandot em apenas um comando


const sum4 = (a, b) => a + b;


//template literais

const name = 'Eliezer'
const surname = 'Antonio';
const text1 = `eu sou o ${name} ${surName}`