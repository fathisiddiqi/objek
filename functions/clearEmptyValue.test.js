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
    ff: [],
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

test('Clear empty value in an object with recursive and ignore "undefined"', () => {
  const objectCleared = clearEmptyValue({
    object: exampleObj,
    isRecursive: true,
    isIgnoreUndefined: true,
  });

  expect(objectCleared).toEqual({
    e: [{ b: "Test 2" }],
    f: {
      fe: undefined,
    },
  });
});

test('Clear empty value in an object with recursive and ignore "empty string"', () => {
  const objectCleared = clearEmptyValue({
    object: exampleObj,
    isRecursive: true,
    isIgnoreEmptyString: true,
  });

  expect(objectCleared).toEqual({
    b: "",
    e: [
      {
        a: "",
        b: "Test 2",
      },
    ],
    f: {
      fa: "",
      fc: [
        {
          fca: "",
        },
        {
          fcc: "",
        },
      ],
    },
  });
});

test('Clear empty value in an object with recursive and ignore "empty object"', () => {
  const objectCleared = clearEmptyValue({
    object: exampleObj,
    isRecursive: true,
    isIgnoreEmptyObject: true,
  });

  expect(objectCleared).toEqual({
    c: {},
    e: [
      {
        b: "Test 2",
      },
    ],
    f: {
      fb: {},
      fc: [
        {
          fcb: {},
        },
        {
          fcd: {},
        },
      ],
      ff: [],
    },
  });
});

test('Clear empty value in an object with recursive and ignore "zero"', () => {
  const objectCleared = clearEmptyValue({
    object: exampleObj,
    isRecursive: true,
    isIgnoreZero: true,
  });

  expect(objectCleared).toEqual({
    d: 0,
    e: [
      {
        b: "Test 2",
      },
    ],
    f: {
      fd: 0,
    },
  });
});
