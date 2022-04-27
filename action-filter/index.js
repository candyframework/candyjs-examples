const CandyJs = require('candyjs');
const App = require('candyjs/web/Application');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',

    // 国际化配置
    translator: {
        // 定义一个 mytype 类型的国际化
        mytype: {
            // 翻译器类路径
            classPath: 'candy/i18n/file/Translator',
            // 国际化配置文件目录
            basePath: __dirname + '/app/i18n'
        }
    }

})).listen(2333, function(){
    console.log('listen on 2333');
});
