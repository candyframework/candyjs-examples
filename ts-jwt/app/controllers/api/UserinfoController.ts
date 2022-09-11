import * as jwt from 'jsonwebtoken';
import Candy from 'candyjs/Candy';
import Request from 'candyjs/http/Request';
import Tools from '../../utils/Tools';

export default class UserinfoController {

    run(req: any, res: any) {
        let r = new Request(req);
        let code = Candy.app.tokenCode;
        let token = r.getHeaders().get('Authorization', '');

        let payload: any = null;

        try {
            payload = jwt.verify(token.replace('Bearer ', ''), code);
        } catch(e) {}


        if(!payload || payload.uid !== 1) {
            Tools.toJson(res, null, 1, '用户登录态失效');
            return;
        }

        Tools.toJson(res, {
            uid: payload.uid,
            name: payload.uname,
            gender: 'M'
        });
    }

}
