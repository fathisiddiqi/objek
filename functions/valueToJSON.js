const { fromPairs } = require("lodash");

/**
 * Represent an object to be a stringified JSON
 *
 * @function valueToJSON
 * @since 1.0.0
 * @param {object} object - object of input
 * @returns {object} object with stringified values
 */

module.exports = function (object) {
  return fromPairs(
    Object.entries(object).map(([key, value]) => [
      key,
      typeof value === "string" ? value : JSON.stringify(value),
    ])
  );
};
