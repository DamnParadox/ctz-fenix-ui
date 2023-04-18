// Adapt to vscode.
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:vue/vue3-essential", "standard", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    // 关闭声明变量未使用的错误校验
    'no-unused-vars': 'off',
    quotes: [1, "single"],
    semi: 0
  }
};