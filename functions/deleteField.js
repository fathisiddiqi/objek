const { fromPairs } = require("lodash");

/**
 * Delete some field from a given object
 * @function deleteField
 * @since 1.1.0
 * @param {Object} object - object of input
 * @param  {...string} fields - fields/key to be deleted
 * @returns {Object} object with deleted fields
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
