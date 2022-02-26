const crypt = require('crypto');

const secretWord = 'secretWord';

const hash = crypt.createHmac('sha256', secretWord).update('I love you').digest('hex');

console.log(hash);