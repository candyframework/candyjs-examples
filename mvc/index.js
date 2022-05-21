const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const CandyJs = require('candyjs');
const Candy = require('candyjs/Candy');
const App = require('candyjs/web/Application');
const Hook = require('candyjs/core/Hook');
const R = require('candyjs/midwares/Resource');

Hook.addHook(bodyParser.urlencoded({ extended: false }));
Hook.addHook(R.serve(__dirname + '/public'));
Candy.setPathAlias('@template', __dirname + '/node_modules');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',

    'defaultView': 'template/@candyjs/template-hbs/index',

    // sqlite 配置
    db: new sqlite3.Database('./testdb.s3db')

})).listen(2333, () => {
    console.log('listen on 2333');
});
