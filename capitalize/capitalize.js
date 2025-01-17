module.exports = function (string) {
  const firstChar = string[0];
  return string.replace(firstChar, firstChar.toUpperCase());
};
