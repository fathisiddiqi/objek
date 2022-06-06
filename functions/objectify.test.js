const objectify = require("./objectify");

test("Convert JSON to object", () => {
  expect(objectify('{"name": "John"}')).toEqual({ name: "John" });
});
