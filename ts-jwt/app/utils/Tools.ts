export default class Tools {
    static toJson(res: any, data: any, code = 0, msg = '') {
        let str = JSON.stringify({
            data: data,
            status_code: code,
            messages: msg
        });

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(str);
    }
}
