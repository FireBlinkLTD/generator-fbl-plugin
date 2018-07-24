import {IPlugin} from "fbl/dist/src/interfaces";
import {ActionHandler} from "fbl/dist/src/models";
import {PluginActionHandler} from "./src/handlers";

class ContextPlugin implements IPlugin {
    getActionHandlers(): ActionHandler[] {
        return [
            // Register all your action handlers below
            new PluginActionHandler(),
        ];
    }
}

module.exports = new ContextPlugin();