function findMissingNumber(arr) {
  if (arr.length === 0) return 1;
  else {
    let sum = 0;
    for (i in arr) {
      sum += arr[i];
    }

    const shouldBeSum = (arr.length + 1) * (arr.length + 2) / 2
    // console.log(sum, shouldBeSum)
    return shouldBeSum - sum;
  }
}

module.exports = findMissingNumber;
