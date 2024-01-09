module.exports = {
  singleQuote: true,
  printWidth: 100,
  endOfLine: 'lf',
  tabWidth: 2,
  singleAttributePerLine: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'strict',
  importOrder: [
    '^@angular/(.*)$',
    '^rxjs(.*)$',
    '(.*)module',
    '(.*)service',
    '(.*)helper|pipe$',
    '(.*)component',
    '<THIRD_PARTY_MODULES>',
  ],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  overrides: [
    {
      files: ['*.container.html'],
      options: {
        parser: 'angular',
      },
    },
    {
      files: ['**/*.css', '**/*.scss', '**/*.sass', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
