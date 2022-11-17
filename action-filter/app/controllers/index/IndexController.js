'use strict';

const Controller = require('candyjs/web/Controller');
const I18N = require('candyjs/i18n/I18N');

module.exports = class IndexController extends Controller {

    // 定义动作执行前的 filter
    behaviors() {
        return [
            ['languageFilter', 'app/filters/LanguageFilter']
        ];
    }

    run(req, res) {
        this.getView().getViewContent('index', (err, str) => {
            let data = I18N.getTranslator('fileBased').translate('file', 'title');

            str = str.replace('{data}', data);

            res.write(str);
            res.end();
        });
    }

}
