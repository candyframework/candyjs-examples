import Model from 'candyjs/model/Model';

export default class PostsModel extends Model {
    constructor() {
        super();

        this.attributes = {
            title: '',
            content: ''
        };
    }

    rules() {
        return [
            {
                rule: 'candy/model/validators/RequiredValidator',
                attributes: ['title', 'content'],
                messages: ['标题不能为空', '内容不能为空']
            },
            {
                rule: {
                    classPath: 'candy/model/validators/StringValidator',
                    minLength: 2,
                    maxLength: 20
                },
                attributes: ['title'],
                messages: ['标题长度为 2-20']
            }
        ];
    }
}
