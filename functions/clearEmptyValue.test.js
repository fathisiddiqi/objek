const clearEmptyValue = require("./clearEmptyValue");

const exampleObj = {
  a: null,
  b: "",
  c: {},
  d: 0,
  e: [
    {
      a: "",
      b: "Test 2",
    },
  ],
  f: {
    fa: "",
    fb: {},
    fc: [
      {
        fca: "",
        fcb: {},
      },
      {
        fcc: "",
        fcd: {},
      },
    ],
    fd: 0,
    fe: undefined,
  },
};

test("Clear empty value in an object with recursive", () => {
  const objectCleared = clearEmptyValue({
    object: exampleObj,
    isRecursive: true,
  });

  expect(objectCleared).toEqual({
    e: [{ b: "Test 2" }],
  });
});

test('Clear empty value in an object with recursive and ignore "null"', () => {
  const objectCleared = clearEmptyValue({
    object: exampleObj,
    isRecursive: true,
    isIgnoreNull: true,
  });

  expect(objectCleared).toEqual({
    a: null,
    e: [{ b: "Test 2" }],
  });
});
