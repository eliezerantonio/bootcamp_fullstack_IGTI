window.addEventListener('load', start);

var globalNames = ['um', 'dois', 'tres', 'quatro'];
var inputName = null;

function start() {
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    //onFocus
    activateInput()

}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();



    }

    //acessando pagina
    var form = document.querySelector('form');
    //evitando submisao do formulario
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    inputName.focus()
}