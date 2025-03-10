/*
 * @Author: your name
 * @Date: 2021-11-28 01:41:11
 * @LastEditTime: 2022-04-06 11:42:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3ts\vue3\vue.config.js
 */
const path = require('path')
//数字孪生智慧xx管理平台
const Common_config = require('./public/aircity/Config')
const title = Common_config.title || '智能站场运行管理系统'

module.exports = {
    lintOnSave: false,

    publicPath: '/',
    devServer: {
        // 配置服务器
        open: true,
        // 项目运行时候的端口号
        port: 8080,
        // https: false,
        disableHostCheck: true,

        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8200/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/WeatherId': {
                target: 'https://geoapi.qweather.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/WeatherId': ''
                }
            },
            '/WeatherData': {
                target: 'https://devapi.qweather.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/WeatherData': ''
                }
            }
        }
    },
    css: {
        sourceMap: true, // 开启 CSS source maps
        loaderOptions: {
            sass: {
                // prependData: "@import '@/styles/common.scss';"
                additionalData: "@import '@/styles/common.scss';"
            }
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = title
            return args
        })
        if (process.env.NODE_ENV === 'production') {
            //生产包取消console debugger打印
            config.optimization.minimizer('terser').tap(args => {
                args[0].terserOptions.compress.drop_console = true
                args[0].terserOptions.compress.drop_debugger = true
                args[0].terserOptions.compress.pure_funcs = ['console.log']
                args[0].terserOptions.output = {
                    comments: false
                }
                return args
            })
        }
        // 分析打包大小
        if (process.env.npm_config_report) {
            config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin).end()
        }
    },
    configureWebpack: {
        resolve: {
            // extensions: ['.js', '.vue', '.json', '.ts', '.tsx'] // 加入ts 和 tsx
            extensions: ['.js', '.vue', '.json', '.ts', '.tsx'], // 加入ts 和 tsx
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
}
