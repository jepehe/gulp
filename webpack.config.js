var webpack = require('webpack');
var path = require("path");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common2.js');

module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: './assets-dev/src/js/page/test.js',
    // entry: {
    //     index : './assets-dev/src/js/page/test.js'
    // },
    //入口文件输出配置
    output: {
    	//path: path.join(__dirname, "./assets-dev/js/page/test.js"),
        path: './assets-dev/js/page/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
       		{test: /\.css$/, loader: "style-loader!css-loader" },
            {test: /\.html$/, loader: "html-loader" },
            {test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    // resolve: {
    //     root: 'E:/work/framework/assets-dev/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.css','.png', '.jpg','.gif'],
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // }
};