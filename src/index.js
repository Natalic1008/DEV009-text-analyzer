import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea =document.querySelector("textarea[name='user-input']");
textarea.addEventListener('keyup',() =>{
  const value = textarea.value;
  document.getElementsByClassName('palabras')[0].innerHTML="Palabras: "+analyzer.getWordCount(value);
  document.getElementsByClassName('caracteres')[0].innerHTML="Caracteres: "+analyzer.getCharacterCount(value);
  document.getElementsByClassName('exclusion')[0].innerHTML="Caracteres excluyendo espacios y signos de puntuación: "+ analyzer.getCharacterCountExcludingSpaces(value);
  document.getElementsByClassName('longitud')[0].innerHTML="Longitud media: "+analyzer.getNumberCount(value);
  document.getElementsByClassName('numeros')[0].innerHTML="Números: "+analyzer.getNumberCount(value);
  document.getElementsByClassName('suma')[0].innerHTML="Suma de números: "+analyzer.getNumberCount(value);
});
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener('click',resetAll);

function resetAll(){
  document.getElementsByName('user-input')[0].value=" ";
  document.getElementsByClassName('palabras')[0].innerHTML="Palabra: 0";
  document.getElementsByClassName('caracteres')[0].innerHTML="Caracteres: 0";
  document.getElementsByClassName('exclusion')[0].innerHTML="Caracteres excluyendo espacios y signos de puntuación:0";
  document.getElementsByClassName('longitud')[0].innerHTML="Longitud media: 0";
  document.getElementsByClassName('numeros')[0].innerHTML="Números: 0";
  document.getElementsByClassName('suma')[0].innerHTML="Suma de números: 0";
}