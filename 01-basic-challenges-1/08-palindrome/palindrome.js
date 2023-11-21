function isPalindrome(string) {
    let reversedString = "";
    for (let i = 1; i <= string.length; i++) {
        reversedString += string[string.length - i]
    }
    if (string.toLowerCase() === reversedString.toLowerCase()) {
        return true;
    } else {
        return false
    }
    
}

module.exports = isPalindrome;
