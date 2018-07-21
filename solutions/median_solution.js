Array.prototype.median = function () {
  if (!this.length) return null;
  const sorted = this.sort();
  const mid = Math.floor(this.length / 2);

  if (this.length % 2 != 0) {
    return sorted[mid];
  } else {
    return (sorted[mid] + sorted[mid - 1]) / 2;
  }
}
