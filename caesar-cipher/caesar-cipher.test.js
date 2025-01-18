const caesarCipher = require("./caesar-cipher.js");

test("Exists", () => expect(caesarCipher).toBeDefined());
test("Shifts 'a' by 3", () => expect(caesarCipher("a", 3)).toBe("d"));
test("Shifts 'f' by 5", () => expect(caesarCipher("f", 5)).toBe("k"));
test("Shifts multiple characters", () =>
  expect(caesarCipher("abc", 1)).toBe("bcd"));
test("Shifts characters at the end of the alphabet", () =>
  expect(caesarCipher("xyz", 3)).toBe("abc"));
test("Big shift factor", () => expect(caesarCipher("efg", 60)).toBe("mno"));
test("Preserves case", () => expect(caesarCipher("aBc", 1)).toBe("bCd"));
test("Ignores non letters", () =>
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));
test("Ignores non letters #2", () =>
  expect(caesarCipher("two ÷ two", 15)).toBe("ild ÷ ild"));
