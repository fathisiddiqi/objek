const stringify = require("./stringify");

test("Stringify object", () => {
  const exampleObject = {
    name: "John",
    age: 30,
    isAdmin: true,
  };

  expect(stringify(exampleObject)).toBe(JSON.stringify(exampleObject));
});
