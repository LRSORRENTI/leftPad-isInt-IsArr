/**
 * Pads a string on the left with a specified character until it reaches a certain length
 *
 * @param str - The string to pad
 * @param len - The desired length of the padded string
 * @param char - The character to use for padding (default: ' ')
 * @returns The padded string
 */
function leftPad(str, len, char) {
    if (char === void 0){ 
        char = ' '; 
    }
    while (str.length < len) {
        str = char + str;
    }
    console.log(str)
    return str;
}

leftPad("Luke", 14, "h")
leftPad("S", 16)