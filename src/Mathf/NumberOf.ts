/**
 * Convert a percent to a number
 * @param {number} a the value to convert
 * @param {number} b the target max value
 * @param {boolean} large convert the number to a small percent (0 ~ 1) or a large percent (0 ~ 100)
 * @returns {number}
 * @constructor
 */
function NumberOf(a: number, b: number, large = true): number
{
    if(a > 1 && !large || b > 1 && !large)
    {
        throw new Error("value out of range! (0~1) please enable large mode if you want to use integer!");
    }
    return a * b / (large? 100: 1);
}
export {NumberOf}