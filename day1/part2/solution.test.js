import { parseValues, sumValues } from "./solution";

const sampleValues = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];
const sampleParsedValues = [29, 83, 13, 24, 42, 14, 76];

describe("parseValues", () => {
  test("test1", () => {
    expect(parseValues(["two1nine"])).toEqual([29]);
  });
  test("test2", () => {
    expect(parseValues(["eightwothree"])).toEqual([83]);
  });
  test("test3", () => {
    expect(parseValues(["abcone2threexyz"])).toEqual([13]);
  });
  test("test4", () => {
    expect(parseValues(["xtwone3four"])).toEqual([24]);
  });
  test("test5", () => {
    expect(parseValues(["4nineeightseven2"])).toEqual([42]);
  });
  test("test7", () => {
    expect(parseValues(["zoneight234"])).toEqual([14]);
  });
  test("test8", () => {
    expect(parseValues(["7pqrstsixteen"])).toEqual([76]);
  });
  test("custom test 1", () => {
    expect(parseValues(["oneight"])).toEqual([18]);
  });
  test("custom test 2", () => {
    expect(parseValues(["oneight"])).toEqual([18]);
  });
  test("test9", () => {
    expect(parseValues([""])).toEqual([]);
  });
  test("test10", () => {
    expect(parseValues(["111111"])).toEqual([11]);
  });
});

describe("sumValues", () => {
  test("test1", () => {
    expect(sumValues(sampleParsedValues)).toEqual(281);
  });
});
