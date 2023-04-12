/**
 * Pads a string on the left with a specified character until it reaches a certain length
 *
 * @param str - The string to pad
 * @param len - The desired length of the padded string
 * @param char - The character to use for padding (default: ' ')
 * @returns The padded string
 */
function leftPad(str: string, len: number, char: string = ' '): string {
    while (str.length < len) {
      str = char + str;
    }
    return str;
  }
  