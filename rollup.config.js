const typescript = require("@rollup/plugin-typescript");
const pkg = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: {
      name: "acvm",
      file: pkg.browser,
      format: "umd",
    },
    plugins: [
      typescript(),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [typescript()],
  },
];
