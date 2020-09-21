
/**
 * Convert a value to a percent.
 *
 * @param {number} a The value to convert
 * @param {number} b The target max value
 * @param {boolean} large convert the percent to a small value (0 ~ 1) or a large value (0 ~ 100)
 * @return {number}
 */
function PercentOf(a: number, b: number, large = false): number
{
    return a / b * (large ? 100 : 1);
}

export {PercentOf}