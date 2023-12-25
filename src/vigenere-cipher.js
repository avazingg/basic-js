const { NotImplementedError } = require('../extensions/index.js');

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
const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {

  constructor(direct = true) {
      this.direct = direct;
  }
  
  encrypt(message, key) {
    if (arguments.length < 2 || !message || !key) {
      throw new Error('Incorrect arguments!');
    }
      let result = '';
      message = message.toUpperCase();
      key = key.toUpperCase();
      for (let i = 0; i < message.length; i++) {
          if (key.length < message.length) {
              key += key[i];
          }
      }
      let j = 0;
      for (let i = 0; i < message.length; i++) {
          let index = (symbols.length + symbols.indexOf(message[i]) + symbols.indexOf(key[j])) % symbols.length;
          if (symbols.includes(message[i])) {
              result += symbols[index];
              j++;
          } else {
              result += message[i];
          }
      }
      if (this.direct){
        return result;
      }
      return result.split('').reverse().join('');
      
  }

  decrypt(result, key) {
    if (arguments.length < 2 || !result || !key) {
      throw new Error('Incorrect arguments!');
    }
    let message = '';
    result = result.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < result.length; i++) {
        if (key.length < result.length) {
            key += key[i];
        }
    }
    let j = 0;
      for (let i = 0; i < result.length; i++) {
          let index = (symbols.length + symbols.indexOf(result[i]) - symbols.indexOf(key[j])) % symbols.length;
          if (symbols.includes(result[i])) {
              message += symbols[index];
              j++;
          } else {
              message += result[i];
          }
      }
      if (this.direct){
        return message;
      }
      return message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
