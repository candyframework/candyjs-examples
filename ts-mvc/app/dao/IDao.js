import * as sqlite3 from 'sqlite3';
import Candy from 'candyjs/Candy';

export default class IDao {
    constructor() {
        this.table = '';
    }

    /**
     * @returns {sqlite3.Database}
     * @protected
     */
    getDb() {
        return Candy.app.db;
    }

    /**
     * get one record
     *
     * @returns {Promise<any>}
     */
    getOne(fields, pkid) {
        return new Promise((resolve, reject) => {
            let db = this.getDb();
            let sql = 'SELECT ' + fields + ' FROM ' + this.table + ' WHERE id=?';
            let stmt = db.prepare(sql);

            stmt.get(pkid, (err, row) => {
                if(row) {
                    resolve(row);
                    return;
                }

                reject(err);
            });
            stmt.finalize();

        }).catch((e) => {
            // todo log
            console.log(e);
        });
    }

    /**
     * get all data
     *
     * @returns {Promise<any>}
     */
    getAll(fields) {
        return new Promise((resolve, reject) => {
            let db = this.getDb();
            let sql = 'SELECT ' + fields + ' FROM ' + this.table + ' ORDER BY id DESC';
            let stmt = db.prepare(sql);

            stmt.all((err, rows) => {
                if(err) {
                    reject(err);
                    return;
                }

                resolve(rows);
            });
            stmt.finalize();

        }).catch((e) => {
            // todo log
            console.log(e);
        });
    }

    /**
     * insert one record
     *
     * @returns {Promise<any>}
     */
    insert(data) {
        return new Promise((resolve, reject) => {
            let db = this.getDb();
            let time = Math.floor( Date.now() / 1000 );
            let sql = 'INSERT INTO t_posts(title, content, post_time) values(?, ?, ?)';
            let stmt = db.prepare(sql);

            stmt.run([ data.title, data.content, time ], function(err) {
                if(err) {
                    reject(err);
                    return;
                }

                resolve(null);
            });
            stmt.finalize();

        }).catch((e) => {
            // todo log
            console.log(e);
        });
    }
}
