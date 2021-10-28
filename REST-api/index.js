const fs = require('fs');

const CandyJs = require('candyjs');
const Candy = require('candyjs/Candy');
const App = require('candyjs/rest/Application');

const app = new App({
    id: 1,
    appPath: __dirname + '/app',
    debug: true
});

// index page
app.get('/', (req, res) => {
    fs.readFile('./app/template.html', Candy.app.encoding, (err, str) => {
        res.end(str);
    });
});


// 获取某位用户
app.get('/user/{id}', 'app/api/User@index');

// 修改用户
app.put('/user/{id}', 'app/api/User@update');

// 删除用户
app.delete('/user/{id}', 'app/api/User@delete');

const candyJs = new CandyJs(app);
candyJs.listen('2333', () => {
    console.log('listen on 2333')
});
