/**
 * Created by zhouli on 18/9/22
 */

import mysql from 'mysql';
export default function testApi(req, res) {
    // console.log(req)
    // console.log(req.url)
    console.log("enter api")
    if (req.url === "/test/json") {
        let data = {
            "name": "test1",
            "age": "qccs"
        }
        res.write(JSON.stringify(data));
        res.end();
        return;
    }
    if (req.url === "/test/index.html") {
        let data = '<!DOCTYPE html>\n' +
            '<html lang="en">\n' +
            '<head>\n' +
            '    <meta charset="UTF-8">\n' +
            '    <title>Title</title>\n' +
            '</head>\n' +
            '<body>\n' +
            'test response html\n' +
            '</body>\n' +
            '</html>';
        res.write(data);
        res.end();
        return;
    }
    if (req.url === "/test/db") {
        //测试一个默认的数据库
        let db = mysql.createConnection({host: '127.0.0.1', user: 'root', password: 'mac123', database: 'information_schema'});
        db.query("SELECT * FROM `USER_PRIVILEGES`;", (err, data)=>{
            if(err){
                console.log('err', err);
            } else {
                res.write(JSON.stringify(data));
                res.end();
            }
        });
        return;
    }

    res.write("404");
    res.end();

}

