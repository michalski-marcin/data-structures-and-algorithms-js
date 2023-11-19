function countOccurrences(word, letter) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            counter++;
        }
    }
    return counter
}

module.exports = countOccurrences;
