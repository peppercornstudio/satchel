import css from '@atomico/rollup-plugin-import-css';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@wessberg/rollup-plugin-ts';
import peerDeps from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.ts'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: 'umd',
      sourcemap: true
    },
    {
      file: pkg.module,
      name: pkg.name,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDeps(),
    resolve({ extensions, browser: true }),
    commonjs(),
    css({
      minimize: true
    }),
    typescript({
      transpiler: 'babel'
    }),
    terser()
  ]
};
