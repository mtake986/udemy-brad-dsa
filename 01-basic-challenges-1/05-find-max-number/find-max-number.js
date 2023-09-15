function findMaxNumber(lis) {
  // let max = 0;
  // for (let i = 0; i < lis.length; i++) {
  //   if (lis[i] > max) max = lis[i]
  // }

  // lis.map(num => num > max ? max = num : null)

  let max = lis[0]
  for (let i = 1 ; i < lis.length; i++) {
    if (lis[i] > max) max = lis[i]
  }
  return max;
} 

module.exports = findMaxNumber;
