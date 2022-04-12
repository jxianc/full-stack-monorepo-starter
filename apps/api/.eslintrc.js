module.exports = {
  ...require("config/eslint-nest"),
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  root: true,
}
