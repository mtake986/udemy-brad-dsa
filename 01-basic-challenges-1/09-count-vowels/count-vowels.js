function countVowels(str) {
  const lowerStr = str.toLowerCase()
  let count = 0;

  for(let i = 0; i < lowerStr.length; i++) {
    const currChar = lowerStr[i];
    if ('aiueo'.split('').includes(currChar)) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
