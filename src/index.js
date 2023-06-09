import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea =document.getElementsByName('user-input')[0];
textarea.addEventListener('input',() =>{
    const value = textarea.value
    document.getElementsByClassName('palabras')[0].innerHTML="Palabras: "+analyzer.getWordCount(value);
    document.getElementsByClassName('caracteres')[0].innerHTML="Caracteres: "+analyzer.getCharacterCount(value);
 } )

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener('click',resetAll);

function resetAll(){
    document.getElementsByName('user-input')[0].value=" ";
    document.getElementsByClassName('palabras')[0].value= " "
}