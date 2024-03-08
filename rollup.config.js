/* eslint-disable import/no-anonymous-default-export */
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const image = require("@rollup/plugin-image");

const packageJson = require("./package.json");

module.exports = {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    image(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css"],
    }),
  ],
};
