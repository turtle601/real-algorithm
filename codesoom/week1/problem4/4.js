function toDecimal(binaryCharactersList, acc = 0) {
  if (binaryCharactersList.length === 0) return acc;

  return toDecimal(
    binaryCharactersList.slice(1),
    acc + binaryCharactersList[0] * 2 ** (binaryCharactersList.length - 1)
  );
}

function solution(binaryCharacters) {
  const binaryCharactersList = binaryCharacters.split('').map(Number);

  return toDecimal(binaryCharactersList);
}

module.exports = solution;
