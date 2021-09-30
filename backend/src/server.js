import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('server is up and running');
});

server.use(function (req, res) {
  res.status(404).json({ error: 'route not found' });
});

export default server;
