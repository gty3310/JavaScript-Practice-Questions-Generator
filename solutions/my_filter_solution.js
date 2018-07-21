Array.prototype.myFilter = function (func) {
  const selection = [];
  this.forEach( (el) => {
    if (func(el)) selection.push(el);
  });

  return selection;
}
