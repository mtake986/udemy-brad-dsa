function diceGameSimulation(times) {

  let results = [];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  while (results.length < times) {
    const dice1 = getRandomInt(6)
    const dice2 = getRandomInt(6);
    const sum = dice1 + dice2

    const getResult = () => {
      if ([7, 11].includes(sum)) return 'win';
      else if ([2, 3, 12].includes(sum)) return 'lose';
      else return 'roll again';
    }
    const result = getResult();
    const payload = {dice1, dice2, sum, result}
    results.push(payload)
  }

  return (results)
}

module.exports = diceGameSimulation;
