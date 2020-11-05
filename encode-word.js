const emojis = require('./emojis.js');


// string-building version
const encodeWord = function(word) {
    let result = '';
    for (const char of word) {
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                found = true;
                result += emoji.symbol;//?
            }
        }
        if(found === false){
            result += char;//?
        }
    }
    return result;//?
}

// mapping it
const encodeWordAlt = function(word){
    word; //'dog'
    const letters = word.split('');
    letters // ['d', 'o', 'g']
    const symbols = letters.map(function(char){
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                return emoji.symbol;
            }
        }
        return char;//?
    });
    symbols; 
    return symbols.join('')//?
}

encodeWord('dog')//?

module.exports = encodeWord;