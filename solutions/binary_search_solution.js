Array.prototype.myBsearch = function(target, func) {
  if (this.length === 0) return null;
  const mid = Math.floor(this.length / 2);

  if (this[mid] === target) {
    return mid;
  } else if (this[mid] > target) {
    return this.slice(0, mid).myBsearch(target);
  } else {
    const result = this.slice(mid + 1, this.length).myBsearch(target);
    return result === null ? result : mid + 1 + result
  }
}
