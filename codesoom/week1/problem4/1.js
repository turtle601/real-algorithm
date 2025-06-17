function solution(binaryCharacters) {
  let sum = 0;
  const binaryCharactersList = binaryCharacters.split('').map(Number).reverse();

  for (let i = 0; i < binaryCharactersList.length; i++) {
    const a = binaryCharactersList[i] * 2 ** i;

    sum += a;
  }

  return sum;
}

module.exports = solution;
