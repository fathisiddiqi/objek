const { isFunction, isPlainObject, isArray, fromPairs } = require("lodash");

/**
 * Replace object key/field from a given object
 *
 * @function replaceObjectField
 * @since 1.0.0
 * @param {object} object - object of input
 * @param {string} targetField - field/key to be replaced
 * @param {string} newField - new field/key to be replaced
 * @param {boolean} isRecursive - if true, replace all nested fields
 * @returns {object} object with replaced fields
 *
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

        return isRecursive ? [key, replaceObjectKey(v)] : [key, v];
      })
    );

    return res;
  };

  return replaceObjectKey(object);
};
