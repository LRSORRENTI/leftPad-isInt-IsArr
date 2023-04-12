/**
 * Checks if a given number is a positive integer
 *
 * @param num - The number to check
 * @returns Whether or not the number is a positive integer
 */
function isPositiveInteger(num: number): boolean {
    return Number.isInteger(num) && num > 0;
  }
  