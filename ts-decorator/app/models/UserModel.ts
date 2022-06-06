import Model from 'candyjs/model/Model';

export default class UserModel extends Model {
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
