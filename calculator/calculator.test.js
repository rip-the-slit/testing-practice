const calculator = require("./calculator.js");

test("Exists", () => expect(calculator).toBeDefined());
test("Is object", () =>
  expect(Object.getPrototypeOf(calculator)).toBe(Object.prototype));
test("Has add method", () => expect(calculator.add).toBeDefined());
test("Has subtract method", () => expect(calculator.subtract).toBeDefined());
test("Has divide method", () => expect(calculator.divide).toBeDefined());
test("Has multiply method", () => expect(calculator.multiply).toBeDefined());
test("Adds 1 + 1", () => expect(calculator.add(1, 1)).toBe(2));
test("Adds 2 + 3", () => expect(calculator.add(2, 3)).toBe(5));
test("Subtracts 1 - 1", () => expect(calculator.subtract(1, 1)).toBe(0));
test("Subtracts 5 - 4", () => expect(calculator.subtract(5, 4)).toBe(1));
test("Divides 1 / 1", () => expect(calculator.divide(1, 1)).toBe(1));
test("Divides 4 / 2", () => expect(calculator.divide(4, 2)).toBe(2));
test("Multiplies 1 * 2", () => expect(calculator.multiply(1, 2)).toBe(2));
test("Multiplies 2 * 3", () => expect(calculator.multiply(2, 3)).toBe(6));
