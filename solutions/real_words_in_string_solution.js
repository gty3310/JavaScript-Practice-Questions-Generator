String.prototype.realWordsInString = function (dictionary) {
  realWords = [];
  for (let i = 0; i < this.length; i++) {
    let first = i
    for (let j = 0; j < this.length; j++) {
      let last = j
      let word = this.slice(first, last);

      if (dictionary.indexOf(word) > -1) {
        if (realWords.indexOf(word) < 0) realWords.push(word);
      }
    }
  }

  return realWords;
}

// Brian solution
String.prototype._realWordsInString = function(dictionary) {
  realWords = [];

  dictionary.forEach( (el) => {
    if (string.includes(el)) result.push(el);
  });
  return result.sort();
}
