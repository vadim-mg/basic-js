const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const alphabit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
class VigenereCipheringMachine {
  method
  table
  indexes

  constructor(method = true) {
    this.method = method
    this.indexes = {}
    this.table = {}
    for (let i = 0; i < alphabit.length; i++) {
      this.indexes[alphabit[i]] = i
      this.table[alphabit[i]] = {}
      for (let j = 0; j < alphabit.length; j++) {
        this.table[alphabit[i]][alphabit[j]] = {
          char : alphabit[(i + j) % alphabit.length],
          index : j
        }
      }
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!")
    }
    const inMessage = message.toUpperCase()
    key = key.toUpperCase()
    let result = ""
    let indexInKey = 0
    for (let i = 0; i < inMessage.length; i++) {
      const letter = inMessage[i]
      let resultChar = letter
      if (typeof this.indexes[letter] === "number") {
        resultChar = this.table[letter][key[indexInKey % key.length]].char
        indexInKey++
      } 
      result = this.method ? result + resultChar : resultChar + result
    }
    return result
  }

  decrypt(encryptedMessage, keyDecript) {
    if (!encryptedMessage || !keyDecript) {
      throw new Error("Incorrect arguments!")
    }
    let result = ""
    let indexInKey = 0
    for (let i = 0; i < encryptedMessage.length; i++) {
      const letter = encryptedMessage[i]
      let resultChar = letter
      if (typeof this.indexes[letter] === "number") {
        const keyLetter = keyDecript[indexInKey % keyDecript.length].toUpperCase()
        const str = this.table[keyLetter]

        for (let key in str) {
          if (str[key].char === letter) {
            resultChar= alphabit[str[key].index]
          }
        }
        indexInKey++
      } 
      result = this.method ? result + resultChar : resultChar + result
    }
    return result
  }
}

module.exports = {
  VigenereCipheringMachine,
}
