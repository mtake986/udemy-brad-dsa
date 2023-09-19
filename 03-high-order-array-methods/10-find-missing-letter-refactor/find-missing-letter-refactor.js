function findMissingLetter(arr) {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'
  alphabets = alphabets + alphabets.toUpperCase()
  const firstIndex = alphabets.split('').indexOf(arr[0])
  let missingLetter = ''
  arr.map((letter, i) => {
    if (missingLetter === '') {
      if (alphabets[firstIndex + i] !== letter) {
        missingLetter = alphabets[firstIndex + i];
      }
    }
  })

  return missingLetter
}

module.exports = findMissingLetter;
