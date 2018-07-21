Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) return this;

  if (!func) func = (left,  right) => {
    return left < right ? -1 : left > right ? 1 : 0;
  }

  const midpoint = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, midpoint).mergeSort(func);
  const sortedRight = this.slice(midpoint).mergeSort(func);

  return sortedLeft.merge(sortedRight, func);
}

Array.prototype.merge = function (arr, func) {
  let merged = [];

  while (this.length && arr.length) {
    switch(func(this[0], arr[0])) {
      case -1:
        merged.push(this.shift());
        break
      case 0:
        merged.push(this.shift());
        break
      case 1:
        merged.push(arr.shift());
        break
    }
  }

  merged = merged.concat(this);
  merged = merged.concat(arr);

  return merged;
}
