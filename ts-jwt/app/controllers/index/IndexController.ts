import Controller from 'candyjs/web/Controller';

export default class IndexController extends Controller {

    run() {
        this.getView().enableLayout = true;

        this.render('index');
    }

}
