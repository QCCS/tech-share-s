import http from 'http';
import testApi from './test-api';

const server = http.createServer((req, res) => {
    testApi(req, res);
});
server.listen(8080);
