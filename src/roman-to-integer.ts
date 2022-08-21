// https://leetcode.com/problems/roman-to-integer/

const symbols: { [P in any]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const subtractSymbols: { [P in any]: string[] } = {
  I: ['V', 'X'],
  X: ['L', 'C'],
  C: ['D', 'M'],
};

export function romanToInt(number: string): number {
  let previousIndex = number.length - 1;
  let total: number = symbols[number[previousIndex]];

  for (let i = previousIndex - 1; i >= 0; i--) {
    if (subtractSymbols[number[i]]) {
      if (
        number[previousIndex].charCodeAt(0) - subtractSymbols[number[i]][0].charCodeAt(0) === 0 ||
        number[previousIndex].charCodeAt(0) - subtractSymbols[number[i]][1].charCodeAt(0) === 0
      )
        total -= symbols[number[i]];
      else total += symbols[number[i]];
    } else {
      total += symbols[number[i]];
    }

    previousIndex = i;
  }

  return total;
}
