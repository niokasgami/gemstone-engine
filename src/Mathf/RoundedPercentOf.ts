import {PercentOf} from '.';

/**
 * Convert a value to a rounded percent.
 *
 * @param {number} a The value to convert
 * @param {number} b The target max value
 * @param {boolean} large convert the percent to a small value (0 ~ 1) or a large value (0 ~ 100)
 * @return {number}
 */
function RoundedPercentOf(a: number, b: number, large = false): number
{
    return Math.round(PercentOf(a,b,large));
}

export {RoundedPercentOf}