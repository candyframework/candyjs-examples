'use strict';

const Controller = require('candyjs/web/Controller');

class IndexController extends Controller {

    run(req, res) {
        let session = req.session;

        let views = session.getAttribute('views');
        if(undefined === views) {
            views = 1;
        } else {
            views += 1;
        }

        session.setAttribute('views', views);

        this.getView().getViewContent('index', (err, data) => {
            res.write(data.replace('{views}', views));
            res.end();
        });
    }

}

module.exports = IndexController;
