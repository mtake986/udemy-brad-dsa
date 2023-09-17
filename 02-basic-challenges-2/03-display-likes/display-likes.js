function displayLikes(nameArr) {
  if (nameArr.length < 1) return `no one likes this`;
  else if (nameArr.length === 1) return `${nameArr[0]} likes this`;
  else if (nameArr.length === 2)
    return `${nameArr[0]} and ${nameArr[1]} like this`;
  else if (nameArr.length === 3)
    return `${nameArr[0]}, ${nameArr[1]} and ${nameArr[2]} like this`;
  else if (nameArr.length > 3)
    return `${nameArr[0]}, ${nameArr[1]} and ${nameArr.length - 2} others like this`;
}

module.exports = displayLikes;
