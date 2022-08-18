/**
 * Convert object to string
 *
 * @function stringify
 * @since 1.0.0
 * @param {Object} object - object to be converted
 * @returns {string} string from object
 * @example stringify({name: "John"}) // '{"name": "John"}'
 *
 */
module.exports = function (object) {
  return JSON.stringify(object);
};
