const clearEmptyValue = require("./clearEmptyValue");

test("Clear empty value in an object", () => {
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
      ],
      fd: 0,
      fe: undefined,
    },
  };

  const objectCleared = clearEmptyValue({ object: exampleObj });
});
