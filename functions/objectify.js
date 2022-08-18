/**
 * Parse string to object
 *
 * @function objectify
 * @since 1.0.0
 * @param {string} string - string to be parsed
 * @returns {string} string from object
 * @example objectify('{"name": "John"}') // {name: "John"}
 */
module.exports = function (string) {
  return JSON.parse(string);
};
