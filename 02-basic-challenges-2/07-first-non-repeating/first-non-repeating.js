function findFirstNonRepeatingCharacter(str) {
  let obj = {}

  str.split("").map((letter) => {
    if (obj[letter]) {
      obj[letter] = obj[letter] + 1;
    } else {
      obj[letter] = 1;
    }
  });

  const values = Object.values(obj)
  const index = values.indexOf(1);

  console.log(values, index)
  if (index !== -1) return Object.keys(obj)[index]
  return null
}

module.exports = findFirstNonRepeatingCharacter;
