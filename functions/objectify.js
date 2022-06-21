/**
 * Parse string to object
 *
 * @function objectify
 * @since 1.0.0
 * @param {string} string - string to be parsed
 * @returns {string} string from object
 *
 */
module.exports = function (string) {
  return JSON.parse(string);
};
