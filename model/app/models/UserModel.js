'use strict';

const Model = require('candyjs/model/Model');

module.exports = class UserModel extends Model {
    constructor() {
        super();

        this.attributes = {
            user_name: '',
            password: '',
            confirming: '',
            email: ''
        };
    }

    rules() {
        return [
            {
                rule: 'candy/model/RequiredValidator',
                attributes: ['user_name', 'password', 'email'],
                messages: ['用户名不能为空', '密码不能为空', '邮箱不能为空']
            },
            {
                rule: 'candy/model/EqualValidator',
                attributes: ['password', 'confirming'],
                messages: ['两次密码不一致']
            },
            {
                rule: 'candy/model/EmailValidator',
                attributes: ['email'],
                messages: ['邮箱格式不正确']
            }
        ];
    }
}
