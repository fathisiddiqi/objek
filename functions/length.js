/**
 * Calculate length of object fields
 * @function length
 * @since 1.2.0
 * @param {Object} object - object of input
 * @returns {number} length of object fields
 * @example length({a: 1, b: 2, c: 3}) // 3
 */

module.exports = function (object) {
  return Object.keys(object).length;
};
