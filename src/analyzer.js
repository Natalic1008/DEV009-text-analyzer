const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim().split(/\s+/).length;
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
  
    let countNumber = 0;
    const results = text.trim().split(' ');

    for (let i=0; i<results.length;i++){
      if(!isNaN(results[i])){
        countNumber++;
      }
    }
    return countNumber;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let countNumbers = 0;
    const result = text.trim().split(' ');

    for (let i=0; i<result.length;i++){
      if (isNaN(parseFloat(result[i]))){
        countNumbers+=0;
      } else {
        countNumbers+=parseFloat(result[i]);
      }
      return countNumbers
    }
  },
};

export default analyzer;
