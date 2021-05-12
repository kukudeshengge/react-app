const path = require('path');
const CracoLessPlugin = require("craco-less");
const Webpackbar = require('webpackbar');

module.exports = {
    webpack: {
        alias: {
            "@": path.join(__dirname, 'src')
        },
        plugins:{
            add:[
                new Webpackbar()
            ]
        }
    },
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: "es", style: true }],
            ["@babel/plugin-proposal-decorators", { legacy: true }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#1DA57A" },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}