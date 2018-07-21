Array.prototype.myReduce = function (callback, acc) {
  const array = this.slice(0);
  if (!acc) acc = array.shift();

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i])
  }

  return acc
}
