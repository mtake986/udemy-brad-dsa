const isValidIPv4 = (address) => {
  const addressArr = address.split(".");
  if (addressArr.length !== 4) return false;

  return address.split(".").every((nums) => {
    const strNum = nums.split("").reduce((acc, num) => {
      if (String(num) !== "0") return (acc += String(num));
    }, "");

    if (Number(strNum) >= 0 && Number(strNum) <= 255) {
      return true;
    } else {
      return false;
    }
  });
};

module.exports = isValidIPv4;
