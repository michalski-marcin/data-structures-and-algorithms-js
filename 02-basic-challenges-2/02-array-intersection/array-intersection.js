/* eslint-disable no-undef */
function arrayIntersection(array1, array2) {
    const intersection = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !intersection.includes(array1[i])) {
            intersection.push(array1[i])
        }
    }
    return intersection
}


module.exports = arrayIntersection;

