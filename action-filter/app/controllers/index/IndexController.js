'use strict';

const CandyJs = require('candyjs');
const Controller = require('candyjs/web/Controller');

module.exports = class IndexController extends Controller {

    // 定义动作执行前的 filter
    behaviors() {
        return [
            ['languageFilter', 'app/filters/LanguageFilter']
        ];
    }

    run(req, res) {
        this.getView().getViewContent('index', (err, str) => {
            let data = CandyJs.getI18N().translate('mytype', 'action filter test');

            str = str.replace('{data}', data);

            res.write(str);
            res.end();
        });
    }

}
