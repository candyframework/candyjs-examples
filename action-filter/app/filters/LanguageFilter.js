const CandyJs = require('candyjs');
const Candy = require('candyjs/Candy');
const ActionFilter = require('candyjs/core/ActionFilter');
const Request = require('candyjs/http/Request');

module.exports = class LanguageFilter extends ActionFilter {
    constructor() {
        super();
    }

    /**
     * 实现语言切换
     * 语言标识获取策略很多 可以从 http header 或者其他地方
     * 这里为了简单 就从 get 参数获取
     */
    beforeAction(actionEvent) {
        let req = actionEvent.request;
        let q = new Request(req);
        let lang = q.getQueryString('lang', '');

        let i18n = CandyJs.getI18N();
        i18n.getTranslator('mytype').setLanguage(lang === 'en' ? 'en-US' : 'zh-CN');
    }
}
