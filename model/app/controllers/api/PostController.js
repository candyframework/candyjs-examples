'use strict';

const UserModel = require('../../models/UserModel');

module.exports = class PostController {

    run(req, res) {
        let model = new UserModel();
        model.fill(req);

        let valid = model.validate();
        let errors = model.getErrors();

        let data = JSON.stringify({
            status_code: valid ? 0 : 1,
            messages: errors
        });

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(data);
    }

}
