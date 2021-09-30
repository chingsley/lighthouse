export const validateStudentStatus = (req, res, next) => {
  const { status } = req.body;
  const validStatus = ['alumni', 'student'];
  if (!status) {
    return res
      .status(400)
      .json({ error: 'Missing "status" field in request body' });
  }

  if (!validStatus.includes(status)) {
    return res
      .status(400)
      .json({ error: 'status must be one of "student" or "alumni"' });
  }

  return next();
};
