const http = require('http');
const app = require('../app');
require('dotenv').config();

const port = parseInt(process.env.PORT);
app.set('port',port);

const server = http.createServer(app);
server.listen(port);
