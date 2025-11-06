const base = require('./base.config.js');
const tseslint = require('@typescript-eslint/eslint-plugin');

module.exports = async () => {
  return [
    ...base,
    {
      name: 'isy-eslint/recommended',
      files: ['**/*.ts'],
      plugins: {
        '@typescript-eslint': tseslint,
      },
        rules: {
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/only-throw-error': ['error'],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/dot-notation': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            { accessibility: 'no-public' }
        ],
        '@typescript-eslint/no-dupe-class-members': ['error'],
        '@typescript-eslint/no-loop-func': ['error'],
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
            ignore: [0, 1],
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true
            }
        ],
        '@typescript-eslint/no-redeclare': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
        '@typescript-eslint/no-unnecessary-qualifier': ['error'],
        '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/prefer-for-of': ['error'],
        '@typescript-eslint/prefer-includes': ['error'],
        '@typescript-eslint/prefer-literal-enum-member': ['error'],
        '@typescript-eslint/prefer-nullish-coalescing': ['error'],
        '@typescript-eslint/prefer-optional-chain': ['error'],
        '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
        '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
        '@typescript-eslint/promise-function-async': ['error'],
        '@typescript-eslint/return-await': ['error'],
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        'default-param-last': 'off',
        'dot-notation': 'off',
        'no-dupe-class-members': 'off',
        'no-loop-func': 'off',
        'no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        'no-redeclare': 'off',
        'no-return-await': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'space-before-function-paren': 'off',

      }
    }
  ];
};

