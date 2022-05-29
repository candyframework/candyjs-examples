import Candy = require('candyjs/Candy')
import CandyJs = require('candyjs');
import App = require('candyjs/web/Application');

Candy.defaultExtension = '';

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app'

})).listen(2333, function(){
    console.log('listen on 2333');
});
