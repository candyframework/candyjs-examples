import PostsModel from '../../models/PostsModel';
import PostsDao from '../../dao/PostsDao';
import Tools from '../../utils/Tools';

export default class PostController {

    run(req, res) {
        let model = new PostsModel();
        model.fill(req);

        let valid = model.validate();
        let errors = model.getErrors();

        if(valid) {
            this.insert(res, model);
            return;
        }

        Tools.toJson(res, 1, errors.toString());
    }

    async insert(res, model) {
        let dao = new PostsDao();

        try {
            await dao.insert( model.getAttributes() );
        } catch(e) {
            Tools.toJson(res, 2, e.message);
            return;
        }

        Tools.toJson(res, 0);
    }

}
