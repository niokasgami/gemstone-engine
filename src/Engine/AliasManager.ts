interface AliasStruct
{
    [index: string]: {
        code: string;
        self: ObjectConstructor;
        contents: any;
    }
}

/**
 * The static class who handle alias overriding.
 */
class AliasManager
{

    private static _alias: AliasStruct;

    constructor()
    {
        throw new Error("This is a static class!");
    }

    /**
     * Store the alias into the Alias Object.
     * @example  AliasManager.store(Scene_Base,"myNamespace", "A_01",Scene_Base.prototype.foo);
     * @param {ObjectConstructor} classes the class object to bind the alias too.
     * @param {string} namespace the namespace the alias is stored in.
     * @param {string} alias the alias name
     * @param value the function to alias.
     */
    public static store(classes: ObjectConstructor, namespace: string, alias: string, value: any): void
    {
        if (this._alias[namespace].code === alias)
        {
            throw new Error(alias + " already exist and will provoke unwanted bug.");
        }
        this._alias[namespace] = {
            code: alias,
            self: classes,
            contents: value
        }
    }

    /**
     * Apply the alias to the function.
     * @example AliasManager.apply("myNamespace","A_01",SomeArgs);
     * @param {string} namespace the namespace the alias is stored in.
     * @param {string} alias the alias name
     * @param [args] the function arguments (if it apply)
     */
    public static apply(namespace: string, alias: string, args?: any): void
    {
        let func;
        let self;
        for (const content in this._alias)
        {
            if (this._alias.hasOwnProperty(content))
            {
                if (this._alias[content].code === alias)
                {
                    func = this._alias[content].contents;
                    self = this._alias[content].self;
                    break;
                } else
                {
                    throw new Error(namespace + " is undefined!");
                }
            }
        }
        func.call(self)(args);
    }

}

export {AliasManager}
