/**
 * Create an extendable Index signature dictionnary interface.
 * Mainly used for create dictionnary from arrays.
 */

export interface ParamDictionary<T> {
    [index: string]: T;
}
