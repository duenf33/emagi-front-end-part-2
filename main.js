const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');

const command = process.argv[2];
const words = process.argv.slice(3);

// if(command === 'translate'){
//     const translation = words.map(translateWord);
//     console.log(translation.join(' '));
// } else if(command === 'encode'){
//     const encoding = words.map(encodeWord);
//     console.log(encoding.join(' '));
// }


// switch is perfect if ALL of the below is true:
// 1. you're ony checking the status of ONE value
// 2. you're checking if it EXACTLY is one of a set of values

switch(command){
    case 'translate':
        const translation = words.map(translateWord);
        console.log(translation.join(' '));
        break;

    case 'encode':
        const encoding = words.map(encodeWord);
        console.log(encoding.join(' '));
        break;

}