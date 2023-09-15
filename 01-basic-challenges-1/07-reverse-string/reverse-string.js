function reverseString(str) {
  // const splitStr = str.split('');
  // let rev = '';
  // for (let i = 0; i < splitStr.length; i++) {
  //   rev += splitStr[splitStr.length-i-1];
  // }

  // return rev;

  return str.split('').reverse().join('');
}

module.exports = reverseString;
