import Model = require('candyjs/model/Model');

class UserModel extends Model {
    constructor() {
        super();

        this.attributes = {
            user_name: '',
            password: '',
            confirming: '',
            email: ''
        };
    }
}

export = UserModel;
