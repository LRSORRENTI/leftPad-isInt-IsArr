/**
 * Checks if a given value is an array
 *
 * @param val - The value to check
 * @returns Whether or not the value is an array
 */
function isArray(val: any): val is any[] {
    return Array.isArray(val);
  }