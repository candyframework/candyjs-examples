const ActionFilter = require('candyjs/core/ActionFilter');
const Request = require('candyjs/http/Request');
const I18N = require('candyjs/i18n/I18N');

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

        let t = I18N.getTranslator('fileBased');
        t.setLanguage(lang === 'en' ? 'en-US' : 'zh-CN');
    }
}
