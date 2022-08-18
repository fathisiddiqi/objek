const length = require("./length");

test("Calculate length for the object", () => {
  expect(length({ a: 1, b: 2, c: 3 })).toBe(3);
});
