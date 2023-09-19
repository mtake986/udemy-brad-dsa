function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false

  let map1 = [];
  let map2 = [];

  const toMap = (arr, map) => {
    for (let i = 0; i < arr.length; i++) {
      map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    }
  }


  toMap(str1.split(''), map1)
  toMap(str2.split(""), map2);


  const map1Keys = Object.keys(map1);

  for (let i = 0; i < map1Keys.length; i++) {
    const letter = map1Keys[i];
    console.log(letter, map2[letter]);
    if (!map2[letter] || !map2[letter] === map1[letter]) return false; 
  } 
  return true;
}

module.exports = validAnagrams;
