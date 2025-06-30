function findMatching(drivers, name) {
  if (!Array.isArray(drivers) || typeof name !== 'string' || name.trim() === '') {
    return [];
  }

  const lowerCaseName = name.toLowerCase();

  return drivers.filter(driverName => {
    return typeof driverName === 'string' && driverName.toLowerCase() === lowerCaseName;
  });
}

/**

 *
 * @param {Array<string>} drivers.
 * @param {string} letters
 * @returns {Array<string>}
 */
function fuzzyMatch(drivers, letters) {
  if (!Array.isArray(drivers) || typeof letters !== 'string' || letters.trim() === '') {
    return [];
  }

  const lowerCaseLetters = letters.toLowerCase();

  return drivers.filter(driverName => {
    if (typeof driverName !== 'string') {
      return false;
    }
    return driverName.toLowerCase().startsWith(lowerCaseLetters);
  });
}

/**

 *
 * @param {Array<object>} drivers
 * @param {string} searchName
 * @returns {Array<object>}
 */
function matchName(drivers, searchName) {
  if (!Array.isArray(drivers) || typeof searchName !== 'string' || searchName.trim() === '') {
    return [];
  }

  const lowerCaseSearchName = searchName.toLowerCase();

  return drivers.filter(driver => {

    return driver && typeof driver.name === 'string' && driver.name.toLowerCase() === lowerCaseSearchName;
  });
}

module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
