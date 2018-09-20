import {IPlugin} from "fbl/dist/src/interfaces";
import {PluginActionHandler} from "./src/handlers";

const packageJson = require('../package.json');

module.exports = <IPlugin> {
  name: 'Plugin Name',

  description: `Plugin human readable description.`,

  tags: [],

  version: packageJson.version,

  requires: {
    fbl: '~0.2.2',
    plugins: {
      //pluginId: '<0.0.1'
    }
  },

  reporters: [],

  actionHandlers: [
    new PluginActionHandler()
  ],

  templateUtils: []
};
