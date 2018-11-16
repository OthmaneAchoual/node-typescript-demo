"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const http_1 = require("http");
const socket_io_1 = __importDefault(require("socket.io"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const server = http_1.createServer(app);
const io = socket_io_1.default(server);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});
const port = process.env.PORT || 5000;
// app.use((req: Request, res: Response, next: NextFunction) => {
//     console.log(req.baseUrl);
//     console.log(req.path);
//     next();
// });
app.use(express_1.default.static(path_1.default.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.get('/greeting', (req, res) => {
    res.json({
        greeting: 'Hello world'
    });
});
server.listen(port, () => {
    console.log(`App started on port ${port}...`);
});
//# sourceMappingURL=app.js.map