function toDecimal(binaryList) {
  if (binaryList.length === 0) return 0;

  return (
    2 ** (binaryList.length - 1) * binaryList[0] +
    toDecimal(binaryList.slice(1))
  );
}

function solution(binaryCharacters) {
  const binaryCharactersList = binaryCharacters.split('').map(Number);

  return toDecimal(binaryCharactersList);
}

module.exports = solution;
