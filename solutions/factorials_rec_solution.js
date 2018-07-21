function factorialsRec(num) {
  if (num === 1) return [1];

  const facs = factorialsRec(num - 1);
  facs.push(facs[facs.length - 1] * (num - 1));
  return facs;
}
