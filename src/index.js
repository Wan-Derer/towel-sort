// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  const res = [];
  let start = 0;
  let end = 0;
  let step = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      start = 0;
      end = matrix[i].length;
      step = 1;
    } else {
      start = matrix[i].length - 1;
      end = -1;
      step = -1;
    }

    for (let j = start; j !== end; j += step) {
      res.push(matrix[i][j]);
    }
  }
  return res;
};


