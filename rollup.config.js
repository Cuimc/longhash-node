import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from "rollup-plugin-uglify"
import babel from "@rollup/plugin-babel"

export default {
    input: "./index.js",
    output: [
        {
            file: "dist/index-es.js",
            format: "es",
            name: 'index-esm'
        },{
            file: "dist/index.js",
            format: "cjs",
            name: 'index-cjs'
        }
    ],
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        uglify(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        })
    ],
}
