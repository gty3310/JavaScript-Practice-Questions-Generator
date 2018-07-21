function pigLatinify(sentence) {
  const words = sentence.split(' ')
  const translateWord = (word) => {
    vowels = 'aeiou'.split('');
    if (vowels.indexOf(word[0]) != -1) {
      return `${word}ay`;
    } else {
      let phonemeEnd = 0;
      while(!(vowels.indexOf(word[phonemeEnd]) != -1)) {
        phonemeEnd += 1;
      }

      if (word[phonemeEnd - 1] === 'q') phonemeEnd += 1;
      return `${word.slice(phonemeEnd)}${word.slice(0, phonemeEnd)}ay`;
    }
  }

  return words.map( word => translateWord(word) ).join(' ');
}
