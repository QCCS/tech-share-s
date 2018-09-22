/**
 * Created by zhouli on 18/9/22
 */
export default function testApi(req, res) {
    // console.log(req)
    // console.log(req.url)
    if (req.url === "/test/json") {
        let data = {
            "name": "test",
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
    res.write("404");
    res.end();

}

