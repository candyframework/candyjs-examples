// 由于 candyjs 本身主要为 commonjs 规范设计 使用时需要注意以下问题
//
// 主框架代码的使用 import require 语法
// candyjs 提供的扩展包则依照对应说明进行使用

import Candy = require('candyjs/Candy');
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
