const { execSync } = require('child_process');
const { merge } = require('webpack-merge');
const chalk = require('chalk');

class WatchRunPlugin {
  apply(compiler) {
    compiler.hooks.afterCompile.tapAsync('WatchRunPlugin', (compilation, callback) => {
      if (!compiler.modifiedFiles || Array.from(compiler.modifiedFiles).some(f => f.includes('typeDefs.ts'))) {
        console.log(`${chalk.magentaBright.bgBlack('[GraphQL]')} Start converting typeDefs TypeScript types`);
        execSync('npm run generate-gql-types -s');
        console.log(`${chalk.magentaBright.bgBlack('[GraphQL]')} Done converting typeDefs TypeScript types`);
      }

      callback();
    })
  }
}

module.exports = (config, context) => {
  return merge(config, {
    plugins: [
      new WatchRunPlugin()
    ]
  });
};
