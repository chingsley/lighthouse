import db from '../db/models';
import logger from '../../file-logger';

export const addNewStudent = async (req, res) => {
  const data = await db.Student.create(req.body);
  return res.status(201).json({ message: 'successfully added new user', data });
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await db.Student.findAll({
      order: [
        ['updatedAt', 'DESC'],
        ['createdAt', 'DESC'],
      ],
    });
    logger.write('GET /students SUCCESSFUL');
    return res.status(200).json({ data: students });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateStudent = (req, res) => {
  const { studentId: id } = req.params;

  db.Student.findOne({ where: { id } })
    .then((student) => {
      return student.update(req.body);
    })
    .then((result) => {
      console.log({ result });
      return db.Student.findAll({ order: [['updatedAt', 'DESC']] });
    })
    .then((students) => {
      return res.status(200).json({ data: students });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    });
};
