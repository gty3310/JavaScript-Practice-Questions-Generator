Array.prototype.flatten = function () {
  let flattened = [];

  this.forEach( (el) => {
    if (el instanceof Array) {
      flattened = flattened.concat(el.flatten());
    } else {
      flattened.push(el);
    }
  });

  return flattened;
}
