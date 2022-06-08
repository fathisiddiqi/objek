const {
  isFunction,
  isObject,
  isEmpty,
  isArray,
  isPlainObject,
  fromPairs,
} = require("lodash");

/**
 * Clear field that have null, undefined, empty string, empty array, empty object, zero
 *
 * @param {Object} object
 * @param {Boolean} isRecursive
 * @param {Boolean} isIgnoreFunction
 * @param {}
 * @returns object with cleared empty values
 *
 */
module.exports = function ({
  object,
  isIgnoreNull,
  isIgnoreUndefined,
  isIgnoreEmptyString,
  isIgnoreEmptyArray,
  isIgnoreEmptyObject,
  isIgnoreZero,
}) {
  const removeEmptyValue = (o) => {
    if (isFunction(o) || !isPlainObject(o)) return o;

    if (isArray(o)) return o.map(removeEmptyValue);

    console.log(o);
    return fromPairs(
      Object.entries(o)
        .map(([k, v]) => {
          return [k, removeEmptyValue(v)];
        })
        .filter(([k, v]) => {
          return !(
            v === null ||
            v === undefined ||
            v === "" ||
            v === 0 ||
            (isArray(v) && v.length < 1) ||
            (isObject(v) && isEmpty(v))
          );
        })
    );
  };

  return removeEmptyValue(object);
};
