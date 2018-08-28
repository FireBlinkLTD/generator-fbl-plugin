'use strict';
const Generator = require('yeoman-generator');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        required: true,
        message: `What is the name of the plugin?`,
        default: this.appname
      },
      {
        type: 'input',
        name: 'author',
        required: true,
        message: 'What is the name of the author?'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        `Your plugin should be in folder named ${
          this.props.name
        }. If not exists yet - it will be created.`
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }

    // Copy without template processing
    [
      'src',
      'test',
      '.gitignore',
      '.npmignore',
      'index.ts',
      'tsconfig.json',
      'tslint.json'
    ].forEach(p => {
      this.fs.copy(this.templatePath(p), this.destinationPath(p));
    });

    // Copy with template processing
    ['package.json', 'LICENSE'].forEach(p => {
      this.fs.copyTpl(this.templatePath(p), this.destinationPath(p), this.props);
    });
  }

  install() {
    this.yarnInstall([], { 'dev': true });
  }
};
