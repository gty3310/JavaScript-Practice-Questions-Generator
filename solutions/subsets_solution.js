function subsets(arr) {
  if (!arr.length) return [[]];
  const last = arr[arr.length - 1];
  const subs = subsets(arr.slice(0, arr.length - 1));
  return subs.concat(subs.map( (el) => {
    let newArr = el.slice(0)
    newArr.push(last);
    return newArr;
  }));
}
