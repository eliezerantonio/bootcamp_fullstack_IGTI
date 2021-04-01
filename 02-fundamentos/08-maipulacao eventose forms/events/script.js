// garantir que o javascript vai entrar em acao apenas quando toda pagina for carrega

window.addEventListener('load', start);

function start() {
    console.log("JavaScript funcionando")
    console.log("Pagina totalment carregada");


    const nameInput = document.querySelector('#nameInput');

    //funcao contador
    nameInput.addEventListener('keyup', countName);

    var form = document.querySelector('form')


    //  manipulando evento
    form.addEventListener('submit', preventSubmit)
}


function countName(event) {
    console.log(event);
    var count = event.target.value;

    var span = document.querySelector('#nameLength');

    span.textContent = count.length;
}

function preventSubmit(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#nameInput');


    alert("Cadastrado com sucesso" + nameInput.value);


}