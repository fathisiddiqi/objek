const { fromPairs } = require("lodash");

/**
 *
 * @param {Object} object
 * @param  {...string} fields
 * @returns {Object}
 *
 */
module.exports = function (object, ...fields) {
  const result = Object.entries(object)
    .map(([key, value]) => {
      if (fields.includes(key)) {
        return null;
      }

      return [key, value];
    })
    .filter((res) => res !== null)
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  return result;
};
