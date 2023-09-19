function validatePassword(str) {
  if (str.length < 8) return false;

  const lowercases = "abcdefghijklmnopqrstuvwxyz";
  const uppercases = lowercases.toUpperCase();
  const numbers = "1234567890";

  const count = {};
  str.split('').map((letter) => {
    lowercases.includes(letter)
      ? (count["lowercase"] = true)
      : uppercases.includes(letter)
      ? (count["uppercase"] = true)
      : numbers.includes(letter)
      ? (count["number"] = true)
      : null;
  });

  return count["lowercase"] === true && count["uppercase"] === true && count['number'] === true
}

module.exports = validatePassword;
