function highestScoringWord(phrase) {
  const arr = phrase.split(" ");
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const highest = {score: 0, word: ''}
  arr.map((word) => {
    const sum = word.split("").reduce((currScores, letter) => {
      return currScores + letters.indexOf(letter) + 1;
    }, 0);
    if (highest.score < sum) {
      highest['score'] = sum
      highest['word'] = word;
    };
  });

  return highest.word
}

module.exports = highestScoringWord;
