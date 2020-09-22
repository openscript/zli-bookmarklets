import { readFile } from 'fs';
import webpack, { Plugin } from 'webpack';

interface Configuration {
  template: string;
}

class BookmarkletPagePlugin implements Plugin {
  public constructor(protected configuration: Configuration) { }

  public apply(compiler: webpack.Compiler) {
    compiler.hooks.emit.tapAsync('BookmarkletPagePlugin', (compilation, _callback) => {
      readFile(this.configuration.template, 'utf8', (_err, data) => {
        console.log(data);
      })
      console.log(this.configuration);
      console.log(compilation.assets);
    });
  }
}

export = BookmarkletPagePlugin;
