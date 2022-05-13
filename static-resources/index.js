const CandyJs = require('candyjs');
const App = require('candyjs/web/Application');
const Hook = require('candyjs/core/Hook');
const R = require('candyjs/midwares/Resource');

// 配置静态资源目录
Hook.addHook(R.serve(__dirname + '/public'));

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app'

})).listen(2333, function(){
    console.log('listen on 2333');
});
