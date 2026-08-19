const tseslint = require('typescript-eslint');
const typescriptFiles = ['**/*.ts'];

module.exports = [
  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: typescriptFiles,
  })),
];