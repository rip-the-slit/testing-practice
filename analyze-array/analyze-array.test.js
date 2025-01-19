const analyzeArray = require("./analyze-array.js")

test("Exists", () => expect(analyzeArray).toBeDefined());
test("Returns object", () =>
  expect(Object.getPrototypeOf(analyzeArray())).toBe(
    Object.prototype
  ));
test("Average prop exists", () => expect(analyzeArray().average).toBeDefined())
test("Average of [2, 5]", () => expect(analyzeArray([2, 5]).average).toBeCloseTo(3.5))
test("Min prop exists", () => expect(analyzeArray().min).toBeDefined())
test("Min of [12, 8, 3]", () => expect(analyzeArray([12, 8, 3]).min).toBe(3))
test("Max prop exists", () => expect(analyzeArray().max).toBeDefined())
test("Max of [12, 8, 3]", () => expect(analyzeArray([12, 8, 3]).max).toBe(12))
test("Length prop exists", () => expect(analyzeArray().length).toBeDefined())
test("Length of [12, 8, 3]", () => expect(analyzeArray([12, 8, 3]).length).toBe(3))
