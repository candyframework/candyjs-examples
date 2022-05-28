const Controller = require('@candyjs/decorators/dist/Controller');

@Controller
class IndexController {

    run(req, res) {
        this.getView().getViewContent('index', (err, data) => {
            res.write(data);
            res.end();
        });
    }

}

module.exports = IndexController;

