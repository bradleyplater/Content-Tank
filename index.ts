import { Server } from './app/Server';
import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import { UserRouter } from './app/Routers/UsersRouter';

const app = express();
const port = 8080;

app.use(json());
app.use(UserRouter);

mongoose.connect('mongodb://localhost:27017/Content-Tank', () => {
    console.log('connected to db');
});

const server = new Server(app);
server.start(port);
