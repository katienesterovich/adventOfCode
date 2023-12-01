import { inputs } from "./input.js";

export const sumValues = (valuesArray) => {
  return valuesArray.reduce((partialSum, a) => partialSum + a, 0);
};

export const parseValues = (inputStrArr) => {
  const parsedNumbers = [];

  inputStrArr.forEach((input) => {
    const numbers = input.match(/\d/g);
    let combined;
    const arrLength = numbers?.length;

    if (arrLength >= 2) {
      combined = `${numbers[0]}${numbers[arrLength-1]}`;
    } else if (arrLength === 1) {
      combined = `${numbers[0]}${numbers[0]}`;
    }

    if (combined) parsedNumbers.push(Number(combined));
  });
  return parsedNumbers;
};

export const calculateSolution = () => {
  const parsedValues = parseValues(inputs);
  const result = sumValues(parsedValues);
  console.log(`Result is: ${result}`);
};

calculateSolution();
