const tseslint = require('typescript-eslint');

module.exports = [
  { ignores: ['**/*.tsx'] },

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  {
    files: ['**/*.ts'],
    ...tseslint.configs.eslintRecommended,
  },

  ...tseslint.configs.recommendedTypeChecked.map(cfg => ({
    ...cfg,
    files: [...(cfg.files || []), '**/*.ts'],
  })),
  ...tseslint.configs.stylisticTypeChecked.map(cfg => ({
    ...cfg,
    files: [...(cfg.files || []), '**/*.ts'],
  })),
];