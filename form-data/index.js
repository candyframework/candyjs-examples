const CandyJs = require('candyjs');
const App = require('candyjs/web/Application');
const Hook = require('candyjs/core/Hook');
const bodyParser = require('body-parser');

Hook.addHook(bodyParser.urlencoded({ extended: false }));

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app'

})).listen(2333, function(){
    console.log('listen on 2333');
});
