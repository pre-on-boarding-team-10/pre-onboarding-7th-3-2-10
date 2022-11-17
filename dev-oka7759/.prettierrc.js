module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 160,
  tabWidth: 2,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // 해당 플러그인의 권장 규칙을 사용합니다.
    "plugin:prettier/recommended", // plugin과 eslint-config-prettier 설정을 한번에 합니다.
  ],
};
