const clearEmptyValue = require("./clearEmptyValue");

test("Clear empty value in an object with recursive", () => {
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

  const objectCleared = clearEmptyValue({
    object: exampleObj,
    isRecursive: true,
  });

  expect(objectCleared).toEqual({
    e: [{ b: "Test 2" }],
  });
});
