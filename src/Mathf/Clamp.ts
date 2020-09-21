
/**
 * Clamp a number into a min and max range.
 *
 * @param {number} value the value to clamp
 * @param {number} min the minimal value
 * @param {number} max the maximum value
 * @returns {number} returns the clamped value
 */
function Clamp(value: number, min: number,max: number): number
{
    return value <= min ? min : value >= max ? max : value;
}

export {Clamp}