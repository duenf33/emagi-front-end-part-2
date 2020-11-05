const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');

const command = process.argv[2];

switch(command){
    case command === 'translate':
        const words = process.argv.slice(3);
        const translation = words.map(translateWord);
        console.log(translation.join(' '));
        break;

    case command === 'encode':
        const encoding = words.map(encodeWord);
        console.log(encoding.join(' '));
        break;

}