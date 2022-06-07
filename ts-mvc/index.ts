import * as sqlite3 from 'sqlite3';
import * as bodyParser from 'body-parser';

import '@candyjs/tswrapper';
import CandyJs from 'candyjs';
import Candy from 'candyjs/Candy';
import App from 'candyjs/web/Application';
import Hook from 'candyjs/core/Hook';
import R from 'candyjs/midwares/Resource';

Hook.addHook(bodyParser.urlencoded({ extended: false }));
Hook.addHook(R.serve(__dirname + '/public'));
Candy.setPathAlias('@template', __dirname + '/node_modules');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',

    'defaultView': 'template/@candyjs/template-hbs/index',

    // sqlite 配置
    // 这里的 db 配置也可以写到数据库相关操作文件中，此处配置到 app 中只是为了简便
    db: new sqlite3.Database('./testdb.s3db')

})).listen(2333, () => {
    console.log('listen on 2333');
});
