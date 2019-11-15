module.exports = {
  root: true,
  globals: {
    document: true,
    localStorage: true,
    window: true,
    resolve: true
  },
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', 'html'],
  // 对vue文件取消了缩进检查
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true,
        skipTemplates: true
      }
    ],
    'no-unused-vars': ['warn'],
    'space-before-function-paren': [2, 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': 'error'
  }
}
