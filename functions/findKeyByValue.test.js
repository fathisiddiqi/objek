const findKeyByValue = require("./findKeyByValue");

test("Find an object field by value", () => {
  expect(findKeyByValue({ a: 1, b: 2, c: 3 }, 2)).toBe("b");
});
