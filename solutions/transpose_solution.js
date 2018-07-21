const transpose = function (arr) {
  let transposedArr = [];
  let currRow;

  for (var col = 0; col < arr[0].length; col++) {
    transposedRow = [];
    for (var row = 0; row < arr.length; row++) {
      transposedRow.push(arr[row][col]);
    }
    transposedArr.push(transposedRow);
  }
  return transposedArr;
};
