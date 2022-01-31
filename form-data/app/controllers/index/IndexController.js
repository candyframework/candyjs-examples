'use strict';

const Controller = require('candyjs/web/Controller');

class IndexController extends Controller {

    run(req, res) {
        this.render('index');
    }

}

module.exports = IndexController;
