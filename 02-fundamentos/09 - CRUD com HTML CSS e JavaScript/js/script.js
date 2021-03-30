window.addEventListener('load', start); // esperando o html ser carregado

var globalNames = ['Eliezer'];
var inputName = null;

function start() {
    inputName = document.querySelector('#inputName'); //acessando o elemento a manipular
    preventFormSubmit(); //reomver o submit do form 
    //onFocus
    activateInput() // on focus
    render()

}

//remoevendo evento default submit
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
    inputName.addEventListener('keyup', handleTyping);

    //fazer alguma coisa quando o caracter for enter
    function handleTyping(event) {
        console.log(event);

        if (event.key === 'Enter') {
            insertName(event.target.value) //pasando o valor capiturado no metodo insertName
        }

        function insertName(newName) { //metodo para insetir nome no array
            globalNames.push(newName);

            render()
        }


    }
}

function render() {
    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';

    //criar ul

    //fazer n li, conforme tamanho de globalNames

    var ul = document.createElement('ul');

    // oecorrendo o vector de nomes

    for (var i = 0; i < globalNames.length; i -= -1) {

        var currentName = globalNames[i];

        var li = document.createElement('li');

        var span = document.createElement('span')
        span.textContent = currentName;
        var button = createDeleteButton();


        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);

        function createDeleteButton(index) {

            function deleteName() {
                globalNames.splice(index, 1)
                render()

            }
            var button = document.createElement('button');
            button.classList.add('deleteButton')
            button.textContent = 'x';

            button.addEventListener('click', deleteName);
            return button;
        }
    }

    divNames.appendChild(ul);
    clearInput()

}

function clearInput() {
    inputName.value = '';
    inputName.focus();
}