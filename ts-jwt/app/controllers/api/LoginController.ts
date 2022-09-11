import * as jwt from 'jsonwebtoken';
import Candy from 'candyjs/Candy';
import Tools from '../../utils/Tools';

export default class LoginController {

    run(req: any, res: any) {
        let code = Candy.app.tokenCode;

        let payload = {
            ctime: Date.now(),
            uid: 1,
            uname: 'afu'
        };

        let token = jwt.sign(payload, code);

        Tools.toJson(res, token);
    }

}
