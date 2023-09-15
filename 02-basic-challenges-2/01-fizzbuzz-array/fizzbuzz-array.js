function fizzBuzzArray(end) {
  const fizzBuzzArr = [];
  for (let i = 1; i < end + 1; i++) {
    if (i % 15 === 0) fizzBuzzArr.push("FizzBuzz");
    else if (i % 5 === 0) fizzBuzzArr.push("Buzz");
    else if (i % 3 === 0) fizzBuzzArr.push("Fizz");
    else fizzBuzzArr.push(i);
  }

  return fizzBuzzArr;
}

module.exports = fizzBuzzArray;
