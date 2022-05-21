'use strict';

const Controller = require('candyjs/web/Controller');
const TimeHelper = require('candyjs/helpers/TimeHelper');

const PostsDao = require('../../dao/PostsDao');

module.exports = class IndexController extends Controller {

    async run(req, res) {
        let list = null;

        try {
            list = await new PostsDao().getAll('*');
        } catch(e) {
            // todo log
            console.log(e);
        }

        this.processList(list);

        // 启用布局文件
        this.getView().enableLayout = true;
        this.getView().title = '文章列表';

        this.render('index', {
            data: list
        });
    }

    processList(list) {
        if(!list) {
            return;
        }
        for(let i=0; i<list.length; i++) {
            list[i].post_time = TimeHelper.format('y-m-d h:i', list[i].post_time * 1000);
        }
    }

}
