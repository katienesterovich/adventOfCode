import { inputs } from "./input.js";

export const sumValues = (valuesArray) => {
  return valuesArray.reduce((partialSum, a) => partialSum + a, 0);
};

export const parseValues = (inputStrArr) => {
  const parsedNumbers = [];

  inputStrArr.forEach((input) => {
    const firstNumber = input.match(/\d/);
    const lastNumber = input.match(/(\d+)(?!.*\d)/);
    let combined;
    if (firstNumber && lastNumber) {
      combined = `${firstNumber[0]}${lastNumber[0]}`;
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
