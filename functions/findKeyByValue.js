/**
 * Find an object field by value
 * @function findKeyByValue
 * @since 1.3.0
 * @param {object} object - object of input
 * @param {string} value - value to be found
 * @returns {string} key of the value
 * @example findKeyByValue({a: 1, b: 2, c: 3}, 2) // "b"
 */

module.exports = function (object, value) {
  return Object.keys(object).find((key) => object[key] === value);
};
