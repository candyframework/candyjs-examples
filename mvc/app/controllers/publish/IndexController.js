'use strict';

const Controller = require('candyjs/web/Controller');

module.exports = class IndexController extends Controller {

    run(req, res) {
        // 启用布局文件
        this.getView().enableLayout = true;
        this.getView().title = '发布文章';

        this.render('index');
    }

}
