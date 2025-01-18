const reverseString = require("./reverse-string.js");

test("Exists", () => expect(reverseString).toBeDefined());
test("First test", () => expect(reverseString("auto")).toBe("otua"));
test("Second test", () => expect(reverseString("toddler")).toBe("relddot"));
test("Third test", () => expect(reverseString("spine")).toBe("enips"));
