'use strict';

const Controller = require('candyjs/web/Controller');

class IndexController extends Controller {

    run(req, res) {
        res.end('custom router page');
    }

}

module.exports = IndexController;
