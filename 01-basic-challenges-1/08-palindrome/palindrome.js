function isPalindrome(str) {

  let alphabets = "abcdefghijklmnopkrstuvwxyz".split("");
  let numbers = "1234567890".split("");
  
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      alphabets.includes(str[i].toLowerCase()) ||
      numbers.includes(str[i].toLowerCase())
      )
      newStr += str[i];
    }
    
    console.log(newStr);
    
    const STR_LENGTH = newStr.length;
    const halfNum = Math.floor(STR_LENGTH / 2);
    
    for (let i = 0; i < halfNum; i++) {
      if (newStr[i].toLowerCase() !== newStr[STR_LENGTH - i - 1].toLowerCase())
      return false;
  }
  return true; 

  // sol1. reg expression
  // const reg = str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

module.exports = isPalindrome;
