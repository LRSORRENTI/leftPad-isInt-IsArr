/**
 * Checks if a given number is a positive integer
 *
 * @param num - The number to check
 * @returns Whether or not the number is a positive integer
 */

let myInt = 23;

function isPositiveInteger(num) {
    console.log(Number.isInteger(num) && num > 0);
    return Number.isInteger(num) && num > 0;
}

isPositiveInteger(myInt)