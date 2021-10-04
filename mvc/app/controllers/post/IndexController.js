const Controller = require('candyjs/web/Controller');
const Request = require('candyjs/http/Request');

const NewsService = require('../../services/NewsService');

module.exports = class IndexController extends Controller {
    async run(req, res) {
        let id = new Request(req).getQueryString('id', 0);
        let data = await new NewsService().getPostById(id);

        this.getView().title = '详情';
        this.getView().enableLayout = true;
        this.render('index', {
            data: data || {}
        });
    }
}
