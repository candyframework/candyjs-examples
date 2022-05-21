const IDao = require('./IDao');

module.exports = class PostsDao extends IDao {
    constructor() {
        super();
        
        this.table = 't_posts';
    }
};