const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const mp = numbers.map((num) => num * 2);
console.log(mp)
/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const filt = numbers.filter((num) => num % 3 === 0);
console.log(filt)
/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const red = numbers.reduce((total, sum) => total + sum, 0)
console.log(red)
/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
const fe = numbers.forEach(num => num * 3)
console.log(fe)
/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const fd = numbers.find(num => num % 3 === 0)
console.log(fd)
/**
 * some: Checks if at least one array element satisfies a condition.
 */
const sm = numbers.some(num => num % 5 === 0);
console.log(sm)
/**
 * every: Checks if all array elements satisfy a condition.
 */
const ev = numbers.every(num => typeof num === 'number');
console.log(ev)
