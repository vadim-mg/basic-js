const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const levels = {}
  domains.forEach((domain) => {
    const subDomains = domain.split(".")
    subDomains.reverse().forEach((sub, index, array) => {
      str = "." + array.slice(0, index + 1).join(".")
      if (!levels[str]) {
        levels[str] = 0
      }
      levels[str] += 1
    })
  })
  return levels
}

module.exports = {
  getDNSStats,
}
