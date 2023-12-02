import fs from "fs";
import readline from "readline";
import path from "path";

const numberStringPairs = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const numberAsStrings = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

export const sumValues = (valuesArray) => {
  return valuesArray.reduce((partialSum, a) => partialSum + a, 0);
};

export const convertFileToStrArr = async (relativeFilePath) => {
  const stringArr = [];
  const __dirname = path.resolve(path.dirname(""));
  const fileStream = fs.createReadStream(
    path.resolve(__dirname, relativeFilePath),
  );
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    stringArr.push(line);
  }

  return stringArr;
};

export const parseValues = (inputStrArr) => {
  const parsedNumbers = [];
  let firstNumber;
  let lastNumber;

  inputStrArr.forEach((str) => {
    let firstInstance = 999999;
    if (str) {
      // Find first string number instance
      numberAsStrings.forEach((numberAsString) => {
        const occurence = str.indexOf(numberAsString);
        if (occurence >= 0 && occurence < firstInstance) {
          firstInstance = occurence;
          firstNumber = numberStringPairs[numberAsString];
        }
      });
      // Find first digit number instance
      // TODO Combine with first as index
      for (let index = 1; index <= 9; index++) {
        const occurence = str.indexOf(index);
        if (occurence >= 0 && occurence < firstInstance) {
          firstInstance = occurence;
          firstNumber = index;
        }
      }

      let lastInstance = -1;

      // Find last string number instance
      numberAsStrings.forEach((numberAsString) => {
        const occurence = str.lastIndexOf(numberAsString);
        if (occurence > 0 && occurence > lastInstance) {
          lastInstance = occurence;
          lastNumber = numberStringPairs[numberAsString];
        }
      });
      for (let index = 9; index >= 0; index--) {
        const occurence = str.lastIndexOf(index);
        if (occurence > 0 && occurence > lastInstance) {
          lastInstance = occurence;
          lastNumber = index;
        }
      }
    }

    let combined;
    if (firstNumber && lastNumber) {
      combined = `${firstNumber}${lastNumber}`;
    }

    if (combined) parsedNumbers.push(Number(combined));
  });
  return parsedNumbers;
};

export const calculateSolution = async () => {
  const stringArr = await convertFileToStrArr("./day1/part2/input.txt");
  const parsedValues = parseValues(stringArr);
  const result = sumValues(parsedValues);
  console.log(`Result is: ${result}`);
};

calculateSolution();
