Array.prototype.quickSort = function (func) {
  if (this.length < 2) return this;

  if (!func) {
    func = (x, y) => {
      if (x < y) return - 1;
      return 1;
    }
  }

  const pivot = this[0];
  let left = this.slice(1).filter( (el) => func(el, pivot) === -1);
  let right = this.slice(1).filter( (el) => func(el, pivot) != -1);
  left = left.quicksort(func);
  right = right.quicksort(func);

  return left.concat([pivot]).concat(right);
}
