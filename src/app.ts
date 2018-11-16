import path from 'path';
import {createServer, Server} from 'http';
import socketIo, {Socket} from 'socket.io';
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const server = createServer(app);
const io = socketIo(server);

io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    })
});

const port = process.env.PORT || 5000;

// app.use((req: Request, res: Response, next: NextFunction) => {
//     console.log(req.baseUrl);
//     console.log(req.path);
//     next();
// });

app.use(express.static(path.join(__dirname, 'public'), {maxAge: 31557600000}));

app.get('/greeting', (req: Request, res: Response) => {
    res.json({
        greeting: 'Hello world'
    });
});

server.listen(port, () => {
        console.log(`App started on port ${port}...`);
    }
);