import {NumberOf} from ".";

/**
 * Convert a percent to a rounded number
 *
 * @export
 * @param {number} a The value to convert
 * @param {number} b The target max value
 * @param {boolean} large convert the percent to a small value (0 ~ 1) or a large value (0 ~ 100)
 * @return {number}
 */
function RoundedNumberOf(a: number, b: number, large = true): number
{
    if (a > 1 && !large || b > 1 && !large)
    {
        throw new Error("value out of range! (0~1) please enable large mode if you want to use integer!");
    }
    return Math.round(NumberOf(a, b));
}
export {RoundedNumberOf}