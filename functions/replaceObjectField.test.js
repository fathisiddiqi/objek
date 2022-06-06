const replaceObjectField = require("./replaceObjectField");

test("Replace object property that contains _id", () => {
  const obj = {
    _id: "123",
    name: "John",
  };

  const result = replaceObjectField({
    object: obj,
    targetField: "_id",
    newField: "id",
    isRecursive: true,
  });
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      id: "123",
      name: "John",
    })
  );
});

test("Replace object property that contains array of object with _id", () => {
  const obj = {
    _id: "123",
    name: "John",
    friends: [
      {
        _id: "456",
        name: "Jane",
      },
      {
        _id: "789",
        name: "Jack",
      },
    ],
  };

  const result = replaceObjectField({
    object: obj,
    targetField: "_id",
    newField: "id",
    isRecursive: true,
  });
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      id: "123",
      name: "John",
      friends: [
        {
          id: "456",
          name: "Jane",
        },
        {
          id: "789",
          name: "Jack",
        },
      ],
    })
  );
});

test("Replace object property that contains object with _id", () => {
  const obj = {
    _id: "123",
    name: "John",
    friend: {
      _id: "456",
      name: "Jane",
    },
  };

  const result = replaceObjectField({
    object: obj,
    targetField: "_id",
    newField: "id",
    isRecursive: true,
  });
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      id: "123",
      name: "John",
      friend: {
        id: "456",
        name: "Jane",
      },
    })
  );
});

test("Replace object property that contains array of object contains object with _id", () => {
  const obj = {
    _id: "123",
    name: "John",
    friends: [
      {
        _id: "456",
        name: "Jane",
        friend: {
          _id: "789",
          name: "Jack",
        },
      },
    ],
  };

  const result = replaceObjectField({
    object: obj,
    targetField: "_id",
    newField: "id",
    isRecursive: true,
  });
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      id: "123",
      name: "John",
      friends: [
        {
          id: "456",
          name: "Jane",
          friend: {
            id: "789",
            name: "Jack",
          },
        },
      ],
    })
  );
});
