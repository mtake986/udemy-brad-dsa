function generateHashtag(str) {
  const trimmed = str.trim()

  console.log(trimmed)

  const strArr = trimmed.split(' ')

  const tag = strArr.reduce((curr, str) => {
    return curr + str.slice(0, 1).toUpperCase() + str.slice(1)
  }, '');

  return tag.length < 141 && tag !== '' ? `#${tag}` : false;
}

module.exports = generateHashtag;
