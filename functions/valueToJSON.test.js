const valueToJSON = require("./valueToJSON");

test("Convert value of object to json", () => {
  const exampleObject = {
    name: "John",
    age: 30,
    isAdmin: true,
  };

  const result = valueToJSON(exampleObject);

  expect(result).toEqual({
    name: "John",
    age: "30",
    isAdmin: "true",
  });
});
