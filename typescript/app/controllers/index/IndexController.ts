import Controller from 'candyjs/web/Controller';

export default class IndexController extends Controller {

    run(req, res) {
        this.getView().getViewContent('index', (err, data) => {
            res.write(data);
            res.end();
        });
    }

}
