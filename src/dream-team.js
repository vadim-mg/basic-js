const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  const result = members.reduce((acc, val) => {
    if (typeof val === "string") {
      const name = val.trim()
      const firstLetter = name[0]
      if (firstLetter * 0 !== 0) {
        return [...acc, firstLetter.toUpperCase()]
      }
    }
    return acc
  }, []).sort((a, b) => a.localeCompare(b)).join("")
  if (!result.length) return false
  return result
}

module.exports = {
  createDreamTeam,
}
