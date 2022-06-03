const { isFunction, isPlainObject, isArray, fromPairs } = require("lodash");

/**
 *
 * @param {object} object
 * @param {string} targetField
 * @param {string} newField
 * @param {boolean} isRecursive
 * @returns
 */
module.exports = function ({ object, targetField, newField, isRecursive }) {
  const replaceObjectKey = (o) => {
    if (isFunction(o) || !isPlainObject(o)) return o;

    if (isArray(o)) return o.map(replaceObjectKey);

    const res = fromPairs(
      Object.entries(o).map(([k, v]) => {
        if (isRecursive) {
          if (isArray(v)) {
            return [k, v.map(replaceObjectKey)];
          }

          if (isPlainObject(v)) {
            return [k, replaceObjectKey(v)];
          }
        }

        let key = k;
        if (key === targetField) {
          key = newField;
        }
        return [key, replaceObjectKey(v)];
      })
    );

    return res;
  };

  return replaceObjectKey(object);
};
