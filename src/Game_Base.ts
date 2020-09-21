/**
 * The super class of the Gemstones GameObject.
 * It inherit some abstract method and function useful for Game_Object plugin dev.
 * It follow the Rpg Maker MZ coding standard.
 */
abstract class Game_Base
{

    protected abstract _data: unknown;

    protected constructor()
    {
        this.fetchData();
    }

    /**
     * Fetch the plugin data and assign it.
     * The implementation is left at the user conveniences.
     * @protected
     */
    protected abstract fetchData(): void;
}
export {Game_Base}