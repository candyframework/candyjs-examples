const Ajax = require('./Ajax');

/**
 * user
 */
module.exports = class User {
    index(req, res, params) {
        // todo search user

        Ajax.toString(res, null, 200, 'user ' + params.id + ' find');
    }

    update(req, res, params) {
        // todo edit user

        Ajax.toString(res, null, 200, 'user ' + params.id + ' updated');
    }

    delete(req, res, params) {
        // todo delete user

        Ajax.toString(res, null, 200, 'user ' + params.id + ' deleted');
    }
};
