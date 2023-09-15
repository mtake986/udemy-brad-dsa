function arrayIntersection(arr1, arr2) {
  const set = new Set(arr1);
  const intersectionArr = [];

  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i];
    if (set.has(num)){
      intersectionArr.push(num)
    }
  }
  return intersectionArr;
}

module.exports = arrayIntersection;
