import Request from 'candyjs/http/Request';
import Controller from 'candyjs/web/Controller';

import PostsDao from '../../dao/PostsDao';

export default class IndexController extends Controller {
    async run(req, res) {
        let id = new Request(req).getQueryString('id', 0);
        let data = null;

        try {
            data = await new PostsDao().getOne('*', id);
        } catch(e) {
            // todo log
            console.log(e);
        }

        this.getView().title = '详情';
        this.getView().enableLayout = true;
        this.render('index', {
            data: data || {}
        });
    }
}
