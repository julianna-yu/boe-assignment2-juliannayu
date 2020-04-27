const fibonacciNums = (n) => {
  if (n <= 0) {
    return [];
  }
  let fNum = new Array();
  fNum[0] = 0;
  fNum[1] = 1;
  for (let i = 2; i < n; i++) {
    fNum[i] = fNum[i - 1] + fNum[i - 2];
  }
  return fNum;
};

module.exports = fibonacciNums;

console.log(fibonacciNums( 4 ));
// [ 0, 1, 1, 2 ]

console.log(fibonacciNums( 0 ));
// []

console.log(fibonacciNums( -2 ));
// []
