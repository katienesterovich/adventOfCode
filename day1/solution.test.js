import { parseValues, sumValues } from "./solution";

const sampleValues = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
const sampleParsedValues = [12, 38, 15, 77];

describe("parseValues", () => {
  test("test1", () => {
    expect(parseValues(["1abc2"])).toEqual([12]);
  });
  test("test2", () => {
    expect(parseValues(["pqr3stu8vwx"])).toEqual([38]);
  });
  test("test3", () => {
    expect(parseValues(["a1b2c3d4e5f"])).toEqual([15]);
  });
  test("test4", () => {
    expect(parseValues(["treb7uchet"])).toEqual([77]);
  });
  test("test5", () => {
    expect(parseValues(["test"])).toEqual([]);
  });
  test("test6", () => {
    expect(parseValues([""])).toEqual([]);
  });
  test("test7", () => {
    expect(parseValues(["111111"])).toEqual([11]);
  });
});

describe("sumValues", () => {
  test("test1", () => {
    expect(sumValues(sampleParsedValues)).toEqual(142);
  });
});
