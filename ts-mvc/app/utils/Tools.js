export default class Tools {
    static toJson(res, code, msg = '') {
        let data = JSON.stringify({
            status_code: code,
            messages: msg
        });

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(data);
    }
}
