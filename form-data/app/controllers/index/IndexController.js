'use strict';

const Controller = require('candyjs/web/Controller');

class IndexController extends Controller {

    run(req, res) {
        this.getView().getViewContent('index', (err, data) => {
            res.write(data);
            res.end();
        });
    }

}

module.exports = IndexController;
