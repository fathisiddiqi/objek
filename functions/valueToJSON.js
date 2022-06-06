const { fromPairs } = require("lodash");

/**
 * Represent an object to be a stringified JSON
 * @param {object} object - object of input
 * @returns
 */

module.exports = function (object) {
  return fromPairs(
    Object.entries(object).map(([key, value]) => [
      key,
      typeof value === "string" ? value : JSON.stringify(value),
    ])
  );
};
