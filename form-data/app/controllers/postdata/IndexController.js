'use strict';

const Controller = require('candyjs/web/Controller');
const Request = require('candyjs/http/Request');

class IndexController extends Controller {

    run(req, res) {
        let r = new Request(req);

        // form data 的值是由 body-parser 解析的
        let name = r.getParameter('user_name');
        let height = r.getParameter('height');
        let weight = r.getParameter('weight');
        let gender = r.getParameter('gender');

        this.getView().getViewContent('index', (err, data) => {
            let html = data.replace('{name}', name);
            html = html.replace('{height}', height);
            html = html.replace('{weight}', weight);
            html = html.replace('{gender}', gender);

            res.write(html);
            res.end();
        });
    }

}

module.exports = IndexController;
