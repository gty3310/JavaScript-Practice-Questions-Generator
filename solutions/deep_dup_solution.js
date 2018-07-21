function deepDup(arr) {
  return arr.map( (el) => el.constructor.name === 'Array' ? deepDup(el) : el);
}
