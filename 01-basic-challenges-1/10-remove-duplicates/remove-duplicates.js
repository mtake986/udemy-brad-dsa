function removeDuplicates(arr) {
  const hashMap = new Map();
  const noDupArr = []
  for (let i = 0; i < arr.length ; i++) {
    if (!hashMap.has(arr[i])) {
      console.log(hashMap)
      hashMap.set(arr[i], i)
      noDupArr.push(arr[i])
    }
  }
  console.log(noDupArr);
  return noDupArr
}

module.exports = removeDuplicates;
