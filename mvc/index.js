const CandyJs = require('candyjs');
const Candy = require('candyjs/Candy');
const App = require('candyjs/web/Application');
const Hook = require('candyjs/core/Hook');
const R = require('candyjs/midwares/Resource');

Hook.addHook(new R(__dirname + '/public').serve());
Candy.setPathAlias('@template', __dirname + '/node_modules');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',

    'defaultView': 'template/@candyjs/template-hbs/index'

})).listen(2333, () => {
    console.log('listen on 2333');
});
