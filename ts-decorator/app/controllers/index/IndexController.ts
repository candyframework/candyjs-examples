import { Controller, Model } from '@candyjs/decorators';

@Controller
class IndexController {

    @Model()
    userModel;

    run(req, res) {
        let attributes = JSON.stringify(this.userModel.attributes);

        let that: any = this;
        that.getView().getViewContent('index', (err, data) => {
            res.write(data + ' ' + attributes);
            res.end();
        });
    }

};

export = IndexController;
