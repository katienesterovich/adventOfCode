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
    let firstInstanceIndex = 999999;
    let lastInstanceIndex = -1;
    if (str) {
      Object.keys(numberStringPairs).forEach((numberAsString) => {
        const firstOccurrence = str.indexOf(numberAsString);
        const lastOccurrence = str.lastIndexOf(numberAsString);

        if (firstOccurrence >= 0 && firstOccurrence < firstInstanceIndex) {
          firstInstanceIndex = firstOccurrence;
          firstNumber = numberStringPairs[numberAsString];
        }

        if (lastOccurrence >= 0 && lastOccurrence > lastInstanceIndex) {
          lastInstanceIndex = lastOccurrence;
          lastNumber = numberStringPairs[numberAsString];
        }
      });

      for (let index = 1; index <= 9; index++) {
        const reverseIndex = 10 - index;
        const firstOccurrence = str.indexOf(index);
        const lastOccurrence = str.lastIndexOf(reverseIndex);

        if (firstOccurrence >= 0 && firstOccurrence < firstInstanceIndex) {
          firstInstanceIndex = firstOccurrence;
          firstNumber = index;
        }

        if (lastOccurrence >= 0 && lastOccurrence > lastInstanceIndex) {
          lastInstanceIndex = lastOccurrence;
          lastNumber = reverseIndex;
        }
      }
    }

    let combined;
    if (firstNumber && lastNumber) {
      combined = `${firstNumber}${lastNumber}`;
    }

    if (combined) {
      parsedNumbers.push(Number(combined));
    }
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
