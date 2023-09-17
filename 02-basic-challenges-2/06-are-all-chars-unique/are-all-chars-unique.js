function areAllCharactersUnique(str) {
  if (str.length < 2) return true;

  const set = new Set(str);

  console.log(set.size, str.length);
  return (set.size === str.length)
}

module.exports = areAllCharactersUnique;
