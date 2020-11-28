const CandyJs = require('candyjs');
const Candy = require('candyjs/Candy');
const App = require('candyjs/web/Application');

Candy.setPathAlias('@template', __dirname + '/node_modules');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',

    'defaultView': 'template/@candyjs/template-hbs/index'

})).listen(2333, function(){
    console.log('listen on 2333');
});
