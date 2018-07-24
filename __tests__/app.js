'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-fbl-plugin:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: 'fbl-super-plugin', author: 'Fire Blink' });
  });

  it('creates files', () => {
    assert.file([
      'src/handlers/index.ts',
      'src/handlers/PluginActionHandler.ts',
      'test/mocha.opts',
      'test/before.ts',
      'test/unit/handlers/PluginActionHandlerTestSuite.ts',
      'package.json',
      '.gitignore',
      '.npmignore',
      'index.ts',
      'LICENSE',
      'tsconfig.json',
      'tslint.json'
    ]);
  });
});
