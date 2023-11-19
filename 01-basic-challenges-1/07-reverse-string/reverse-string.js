function reverseString(string) {
    let reversedString = "";
    for (let i = 1; i <= string.length; i++) {
        reversedString += string[string.length - i]
    }
    return reversedString;
}

module.exports = reverseString;




