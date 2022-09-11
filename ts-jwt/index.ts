import '@candyjs/tswrapper';
import CandyJs from 'candyjs';
import Candy from 'candyjs/Candy';
import App from 'candyjs/web/Application';

Candy.setPathAlias('@template', __dirname + '/node_modules');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',

    'defaultView': 'template/@candyjs/template-hbs/index',

    // 加密用私钥 可以放到配置文件中
    'tokenCode': 'some code'

})).listen(2333, () => {
    console.log('listen on 2333');
});
