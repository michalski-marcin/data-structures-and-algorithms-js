function isPalindrome(string) {
    const formattedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedString = "";
    for (let i = 1; i <= formattedString.length; i++) {
        reversedString += formattedString[formattedString.length - i]
    }
    if (formattedString === reversedString) {
        return true;
    } else {
        return false
    }
    
}

module.exports = isPalindrome;
