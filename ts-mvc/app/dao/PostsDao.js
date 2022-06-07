import IDao from './IDao';

export default class PostsDao extends IDao {
    constructor() {
        super();

        this.table = 't_posts';
    }
}
