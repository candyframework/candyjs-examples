import '@candyjs/tswrapper';

import CandyJs from 'candyjs';
import App from 'candyjs/web/Application';

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app'

})).listen(2333, () => {
    console.log('listen on 2333');
});
