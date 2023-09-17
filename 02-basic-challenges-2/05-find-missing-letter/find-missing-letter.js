function findMissingLetter(arr) {
  if (!arr || arr.length === 0) return '';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();

  const whichCase = lower.includes(arr[0]) ? lower : upper;
  let numArr = [];

  arr.map((letter) => numArr.push(whichCase.indexOf(letter) + 1))

  const length = numArr.length;
  const min = numArr[0];
  numArr.map(num => num < min ? min = num : null);
  const consecutiveNumArr = [];


  for (let i = 0; i < length + 1; i++) {
    consecutiveNumArr.push(min + i);
  }

  const actualSum = numArr.reduce((a, b) => a + b, 0);
  const expectedSum = consecutiveNumArr.reduce((a, b) => a + b, 0);

  return whichCase[expectedSum - actualSum -1]

}

module.exports = findMissingLetter;
