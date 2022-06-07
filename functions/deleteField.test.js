const deleteField = require("./deleteField");

test("Delete one field", () => {
  const exampleObject = {
    name: "John",
    age: 30,
    city: "New York",
  };

  const result = deleteField(exampleObject, "age");

  expect(result).toEqual({
    name: "John",
    city: "New York",
  });
});
