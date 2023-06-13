const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim().split(' ').length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const str = text.trim().replace(/[\s,.#!$%&;:{}=\-_`~()""¨...]+/g,'');
    return str.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const totalCharacters=text.trim().replace(/\s+/g,'').length;
    const numWords=text.trim().split(/\s+/).length;
    return parseFloat((totalCharacters/numWords).toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  
    const countNumber = 0;
    const results = results.split(' ');

    for (let i=0; i<(results.length);i++){
      if(isNaN(results[i])){
        countNumber=countNumber+1;
      }
      return countNumber;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
