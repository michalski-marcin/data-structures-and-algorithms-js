function fizzBuzzArray(number) {
    const arr = [];
    for (let i = 1; i <= number; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            arr.push(i)
        } else if (i % 3 == 0 && i % 5 != 0) {
            arr.push('Fizz')
        } else if (i % 3 != 0 && i % 5 == 0) {
            arr.push('Buzz') 
        } else {
            arr.push('FizzBuzz')
        }
    }
    return arr
}
// fizzBuzzArray(102)
module.exports = fizzBuzzArray;
