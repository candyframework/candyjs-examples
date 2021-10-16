const CandyJs = require('candyjs');
const App = require('candyjs/web/Application');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',

    // 自定义路由
    routesMap: {
        'custom-router': 'app/controllers/custom/IndexController'
    }

})).listen(2333, function(){
    console.log('listen on 2333');
});
