/**
 * The static class who handles register and handles parameters
 * This method allow to keep cleanliness and avoid globals in your code.
 * @static
 */
class ParamManager
{
    private static _params: Record<string, any> = {};
    
    constructor()
    {
        throw new Error("This is a static class!");
    }

    /**
     * Register the parameters under a 'namespace' (every plugins should keep their own name)
     * @static
     * @example ParamManager.registerParams("myplugin", parsedParameters);
     * @param {string} namespace the plugin namespace
     * @param {any} params the parameters to store.
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public static register(namespace: string, params: any): void
    {
        if (this._params.hasOwnProperty(namespace))
        {
            throw new Error("The plugin is already registered!")
        }
        this._params[namespace] = params;
    }

    /**
     * Get the parameters from the library and return typing
     * @param {string} namespace the plugin namespace
     * @returns {T} return the type assigned.
     */
    public static fetch<T>(namespace: string): T
    {
        if(!this._params.hasOwnProperty(namespace))
        {
            throw new Error("Unidentified plugin!");
        }
        return this._params[namespace];
    }
}
export {ParamManager}