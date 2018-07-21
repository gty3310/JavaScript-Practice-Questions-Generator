Array.prototype.myJoin = function (separator = '') {
  let newString = ''

  this.forEach( (el, idx) => {
    newString += `${el}`;
    if (idx < this.length - 1) newString += separator;
  })

  return newString;
}
