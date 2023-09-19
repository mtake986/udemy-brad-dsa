function sumOfEvenSquares(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, num) => {
      return sum + num;
    }, 0);
  
}

module.exports = sumOfEvenSquares;
