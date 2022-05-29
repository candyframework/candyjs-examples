import Controller = require('@candyjs/decorators');

@Controller
class IndexController {

    run(req, res) {
        let that: any = this;
        that.getView().getViewContent('index', (err, data) => {
            res.write(data);
            res.end();
        });
    }

};

export = IndexController;
