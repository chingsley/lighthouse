import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import db from './db/models';
import { getAllStudents, updateStudent } from './controllers/studentController';
import { validateStudentStatus } from './middlewares/studentMiddleware';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('server is up and running');
});

server.get('/students', getAllStudents);
server.patch('/students/:studentId', validateStudentStatus, updateStudent);

server.use(function (req, res) {
  res.status(404).json({ error: 'route not found' });
});

export { server, db };
