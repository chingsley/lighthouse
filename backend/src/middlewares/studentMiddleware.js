export const validateStudentStatus = (req, res, next) => {
  const { status } = req.body;
  const validStatus = ['alumni', 'student'];

  if (status && !validStatus.includes(status)) {
    return res
      .status(400)
      .json({ error: 'status must be one of "student" or "alumni"' });
  }

  return next();
};

export const validateStudent = (req, res, next) => {
  const requiredFields = ['name', 'country', 'program', 'status'];
  for (let field of requiredFields) {
    if (!(field in req.body)) {
      return res
        .status(400)
        .json({ error: `missing field ${field} in request body` });
    }
  }

  return next();
};
