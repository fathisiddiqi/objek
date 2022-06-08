const {
  isFunction,
  isObject,
  isEmpty,
  isArray,
  isPlainObject,
  fromPairs,
  isDate,
} = require("lodash");

/**
 *
 * @param {Object} object
 * @returns
 */
module.exports = function (object) {
  const removeEmtpyObjects = (o) => {
    return fromPairs(
      Object.entries(o)
        .map(([k, v]) => {
          return [k, removeEmtpyObjects(v)];
        })
        .filter(([k, v]) => {
          return !(v == null || (isObject(v) && isEmpty(v)));
        })
    );
  };

  return removeEmtpyObjects(object);
};
