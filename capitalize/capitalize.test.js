const capitalize = require("./capitalize.js");

test("Exists", () => expect(capitalize).toBeDefined());
test("Capitalize words", () => {
  for (word in ["Jolenne", "Pedro", "Someone"]) {
    expect(capitalize(word.toLowerCase())).toBe(word);
  }
});
