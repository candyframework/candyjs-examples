'use strict';

const Controller = require('candyjs/web/Controller');
const TimeHelper = require('candyjs/helpers/TimeHelper');
const NewsService = require('../../services/NewsService');

class IndexController extends Controller {

    async run(req, res) {
        const list = await new NewsService().getList();
        this.processList(list);

        // 启用布局文件
        this.getView().enableLayout = true;
        this.getView().title = '文章列表';

        this.render('index', {
            data: list
        });
    }

    processList(list) {
        for(let i=0; i<list.length; i++) {
            list[i].time = TimeHelper.format('y-m-d h:i', list[i].time * 1000);
        }
    }

}

module.exports = IndexController;
