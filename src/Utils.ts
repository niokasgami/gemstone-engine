import {ParamDictionary} from "./Struct";

export class Utils
{

    constructor()
    {
        throw new Error("This is a static class");
    }

    /**
     * Create an dictionnary from an MZ array parameters
     * @param {any[]} object The parameter object containing an Key value
     * @returns {ParamDictionary<T>} the dictionnary.
     */
    public static createDictionary<T>(object: any[]): ParamDictionary<T>
    {
        const params = {};
        for (let i = 0; i < object.length; i++)
        {
            params[object[i].key] = object[i];
            delete params[object[i].key].key;
        }
        return params;
    }

    /**

     * Does a simple args splitting using an separator then trim any white space.
     * It will then convert it into an array.
     * for typescript user it is preferable to use tuple to get proper array definition.
     *
     * @example Utility.simpleSeparatorParse<[string,number]>('1', ",");
     * @param {string} args
     * @param {string} separator
     * @returns {T}
     */
    public static separate<T>(args: string, separator: string): T
    {
        const array = args.split(separator);
        let parsed;
        for (let i = 0; i < array.length; i++)
        {
            array[i].trim();
            parsed = JSON.parse(array[i]);
        }
        return parsed;
    }

    /**
     * Convert the parameters to an JSON object
     * @author Waynee95
     * @param {string} parameters
     * @returns {T} The parsed parameters typing.
     */
    public static convertParameters<T>(parameters: any): T
    {
        function parseParameters(object: string)
        {
            try
            {
                return JSON.parse(object, (key, value) =>
                {
                    try
                    {
                        return parseParameters(value)
                    }
                    catch (e)
                    {
                        return value
                    }
                })
            }
            catch (e)
            {
                return object
            }
        }

        return parseParameters(JSON.stringify(parameters))
    }
}