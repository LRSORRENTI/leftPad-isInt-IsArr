/**
 * Checks if a given value is an array
 *
 * @param val - The value to check
 * @returns Whether or not the value is an array
 */
let myArr = [1, 2, 3]

function isArray(val) {
    console.log(Array.isArray(val))
    return Array.isArray(val);
}

isArray(myArr)