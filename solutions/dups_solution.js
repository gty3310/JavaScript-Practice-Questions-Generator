Array.prototype.dups = function() {
  const count = {};
  const dups = {};

  this.forEach( (el, idx) => {
    count[el] = count[el] || [];
    count[el].push(idx);
  });

  const keys = Object.keys(count).filter( el => count[el].length > 1)
  keys.forEach( (key) => {
    dups[key] = count[key];
  });

  return dups;
}
