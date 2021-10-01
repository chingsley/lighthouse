import React, { useState, useEffect } from "react";
import axios from "axios";
import Student from "./Student";

function StudentsBoard() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    country: "",
    program: "",
  });

  const updateInput = (e) => {
    e.persist();
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const fetchAllStudents = async () => {
    const { data } = await axios.get("http://localhost:4000/students");
    setStudents(data.data);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:4000/students", {
        ...newStudent,
        status: "student",
      });
      // console.log("response.data.data: ", response.data.data);
      // setStudents(response.data.data);
      fetchAllStudents();
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };

  useEffect(() => {
    fetchAllStudents();
    // axios
    //   .get("http://localhost:4000/students")
    //   .then((response) => {
    //     // console.log(response.data);
    //     setStudents(response.data.data);
    //   })
    //   .catch((error) => {
    //     console.log("error => ", error);
    //   });
  }, []);

  console.log(students);

  return (
    <>
      <section>
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => updateInput(e)}
              value={newStudent.name}
            />
          </div>
          <div className="form-control">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              onChange={(e) => updateInput(e)}
              value={newStudent.country}
            />
          </div>
          <div className="form-control">
            <label htmlFor="program">Program</label>
            <input
              type="text"
              id="program"
              name="program"
              onChange={(e) => updateInput(e)}
              value={newStudent.program}
            />
          </div>
          <button className="btn" type="submit">
            Add Student
          </button>
        </form>
      </section>
      <section>
        <div className="items">
          {students.map((student) => (
            <div key={student.id}>
              <Student student={student} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default StudentsBoard;
