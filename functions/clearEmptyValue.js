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
 * @function clearEmptyValue
 * @since 1.2.0
 * @param {Object} object source of object
 * @returns object with cleared empty values
 * @example clearEmptyValue({a: 1, b: 2, c: null}) // {a: 1, b: 2}
 */
module.exports = function ({
  object,
  isRecursive,
  isIgnoreNull,
  isIgnoreUndefined,
  isIgnoreEmptyString,
  isIgnoreEmptyObject,
  isIgnoreZero,
}) {
  const removeEmptyValue = (o) => {
    if (isFunction(o) || !isPlainObject(o)) return o;

    if (isArray(o) && o.length > 0) return o.map(removeEmptyValue);

    return fromPairs(
      Object.entries(o)
        .map(([k, v]) => {
          if (!isRecursive) {
            return [k, v];
          }

          if (isArray(v) && v.length > 0) {
            return [
              k,
              v
                .map(removeEmptyValue)
                .filter((value) => !(isObject(value) && isEmpty(value))),
            ];
          }

          if (isPlainObject(v)) {
            return [k, removeEmptyValue(v)];
          }

          return [k, removeEmptyValue(v)];
        })
        .filter(([k, v]) => {
          return !(
            (!isIgnoreNull && v === null) ||
            (!isIgnoreUndefined && v === undefined) ||
            (!isIgnoreEmptyString && v === "") ||
            (!isIgnoreZero && v === 0) ||
            (!isIgnoreEmptyObject && isObject(v) && isEmpty(v))
          );
        })
    );
  };

  return removeEmptyValue(object);
};
