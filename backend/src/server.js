import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import db from './db/models';
import {
  addNewStudent,
  graduateStudent,
} from './controllers/studentController';
import { validateStudentStatus } from './middlewares/studentMiddleware';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('server is up and running');
});

server.get('/students', addNewStudent);
server.patch(
  '/students/:studentId/graduate',
  validateStudentStatus,
  graduateStudent
);

server.use(function (req, res) {
  res.status(404).json({ error: 'route not found' });
});

export { server, db };
