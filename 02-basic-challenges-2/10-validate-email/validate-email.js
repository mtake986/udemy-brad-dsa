function validateEmail(str) {
  if (str.split("@").length !== 2) return false;

  // str includes 1 AtMark and 1 Comma.
  const indexOfAt = str.indexOf("@");
  const commaIndexes = [];

  for (let i = 0; i < str.length ; i++) {
    if (str[i] === '.') commaIndexes.push(i);
  }

  const lastCommaIndex = commaIndexes[commaIndexes.length - 1];
  console.log(str, indexOfAt, commaIndexes, lastCommaIndex);

  if (lastCommaIndex) 
    if (indexOfAt && lastCommaIndex) {
      if (indexOfAt < lastCommaIndex - 1) {
        if (
          indexOfAt !== 0 &&
          indexOfAt !== str.length - 1 &&
          lastCommaIndex !== 0 &&
          lastCommaIndex < str.length - 3
        ) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  else {
    return false
  }
}

module.exports = validateEmail;
