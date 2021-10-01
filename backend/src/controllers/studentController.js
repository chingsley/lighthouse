import db from "../db/models";
import logger from "../../file-logger";

export const addNewStudent = async (req, res) => {
  const data = await db.Student.create(req.body);
  return res.status(201).json({ message: "successfully added new user", data });
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await db.Student.findAll({
      order: [["createdAt", "DESC"]],
    });
    logger.write("GET /students SUCCESSFUL");
    return res.status(200).json({ data: students });
  } catch (error) {
    logger.write("GET /students ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateStudent = (req, res) => {
  const { studentId: id } = req.params;

  db.Student.findOne({ where: { id } })
    .then((student) => {
      // if (!student) {
      //   throw new Error('Student not found');
      // }
      return student.update(req.body);
    })
    .then((student) => {
      return res.status(200).json({ data: student });
    })
    .catch((error) => {
      logger.write("PATCH /students/:studentId ", error.message);
      return res.status(500).json({ error: "Internal server error" });
    });
};

export const deleteStudent = async (req, res) => {
  try {
    const { studentId: id } = req.params;
    const student = await db.Student.findOne({ where: { id } });
    if (!student) {
      return res.status(404).json({
        error: `No record matches the student id provided`,
      });
    }

    await student.destroy();
    return res.status(200).json({ message: "Record deleted" });
  } catch (error) {
    logger.write("DELETE /students/:studentId ", error.message);
    return res.status(500).json({ error: "internal server error" });
  }
};

// export const deleteStudent = async (req, res) => {
//   const { studentId: id } = req.params;
//   db.Student.findOne({ where: { id } })
//     .then((student) => {
//       if (!student) {
//         return res.status(404).json({
//           error: `No record matches the student id provided`,
//         });
//       }
//       return student.destroy();
//     })
//     .then((student) => {
//       console.log(student);
//       return res.status(200).json({ message: 'Record deleted' });
//     })
//     .catch((error) => {
//       logger.write('DELETE /students/:studentId ', error.message);
//       return res.status(500).json({ error: 'internal server error' });
//     });
// };
