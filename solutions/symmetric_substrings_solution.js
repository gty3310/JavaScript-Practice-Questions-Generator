String.prototype.symmetricSubstrings = function () {
  const symmetric = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = 2; j <= this.length - i; j++) {
      const subst = this.slice(i, i + j);
      const reversed = subst.split('').reverse().join('')

      if (subst === reversed) symmetric.push(subst);
    }
  }

  return symmetric;
}
