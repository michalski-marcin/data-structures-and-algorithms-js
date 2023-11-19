function findMaxNumber(array) {
    let highestNumer = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > highestNumer) {
            highestNumer = array[i];
        }
    }
    return highestNumer;


    
    // return Math.max(...array)
}

module.exports = findMaxNumber;
