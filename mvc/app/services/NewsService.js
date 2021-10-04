module.exports = class NewsService {
    constructor() {
        this.data = [
            {
                id: 1,
                title: '这是第一条新闻',
                time: 1577844000,
                content: '这是第一条新闻的内容 这是第一条新闻的内容 这是第一条新闻的内容'
            },
            {
                id: 2,
                title: '这是第二条新闻',
                time: 1580522400,
                content: '这是第二条新闻的内容 这是第二条新闻的内容 这是第二条新闻的内容'
            },
            {
                id: 3,
                title: '这是第三条新闻',
                time: 1583028000,
                content: '这是第三条新闻的内容 这是第三条新闻的内容 这是第三条新闻的内容'
            },
            {
                id: 4,
                title: '这是第四条新闻',
                time: 1585706400,
                content: '这是第四条新闻的内容 这是第四条新闻的内容 这是第四条新闻的内容'
            },
            {
                id: 5,
                title: '这是第五条新闻',
                time: 1588298400,
                content: '这是第五条新闻的内容 这是第五条新闻的内容 这是第五条新闻的内容'
            },
            {
                id: 6,
                title: '这是第六条新闻',
                time: 1590976800,
                content: '这是第六条新闻的内容 这是第六条新闻的内容 这是第六条新闻的内容'
            },
            {
                id: 7,
                title: '这是第七条新闻',
                time: 1593568800,
                content: '这是第七条新闻的内容 这是第七条新闻的内容 这是第七条新闻的内容'
            },
            {
                id: 8,
                title: '这是第八条新闻',
                time: 1596247200,
                content: '这是第八条新闻的内容 这是第八条新闻的内容 这是第八条新闻的内容'
            },
            {
                id: 9,
                title: '这是第九条新闻',
                time: 1598925600,
                content: '这是第九条新闻的内容 这是第九条新闻的内容 这是第九条新闻的内容'
            },
            {
                id: 10,
                title: '这是第十条新闻',
                time: 1601517600,
                content: '这是第十条新闻的内容 这是第十条新闻的内容 这是第十条新闻的内容'
            }
        ];
    }

    async getList() {
        return Promise.resolve(this.data);
    }

    async getPostById(id) {
        let numberId = Number(id);
        let ret = null;

        for(let i=0; i<this.data.length; i++) {
            if(numberId === this.data[i].id) {
                ret = this.data[i];
                break;
            }
        }

        return Promise.resolve(ret);
    }
}
