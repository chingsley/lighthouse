import db from '../db/models';

export const addNewStudent = async (req, res) => {
  try {
    const students = await db.Student.findAll();
    return res.status(200).json({ data: students });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const graduateStudent = (req, res) => {
  const { studentId: id } = req.params;
  db.Student.findOne({ where: { id } })
    .then((student) => {
      return student.update({ status: 'student', name: 'Eneja CKingsley C.' });
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
