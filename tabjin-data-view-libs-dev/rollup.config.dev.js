/**
 * tabjin-data-view-libs-dev
 * rollup.config.dev
 * Created by Tabjin
 * 2020-12-11-17-06
 */
const path = require('path')
const resolve = require('rollup-plugin-node-resolve')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/tab.data.view.js')
const outputEsPath = path.resolve(__dirname, './dist/tab.data.view.es.js')

module.exports = {
    input: inputPath,
    output: [{
        file: outputUmdPath,
        format: 'umd', // 导出umd模块
        name: 'TabDataView' // 必须指定名字
    }, {
        file: outputEsPath,
        format: 'es', // 导出umd模块
        name: 'TabDataView' // 必须指定名字}]
    }],
    plugins: [
        resolve()
    ]
}
