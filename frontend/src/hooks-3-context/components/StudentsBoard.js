import React, { useState, useEffect, useReducer, useRef } from "react";
import axios from "axios";
import Student from "./Student";
import { reducer, initialState } from "../state/reducer";
import { FETCH_STUDENTS } from "../state/types";
import { StudentContext } from "../contexts/StoreContext";

function StudentsBoard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newStudent, setNewStudent] = useState({
    name: "",
    country: "",
    program: "",
  });

  const refNameInputField = useRef(null);

  const updateInput = (e) => {
    e.persist();
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const fetchAllStudents = async () => {
    const { data } = await axios.get("http://localhost:4000/students");
    dispatch({ type: FETCH_STUDENTS, students: data.data });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:4000/students", {
        ...newStudent,
        status: "student",
      });
      fetchAllStudents();
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };

  useEffect(() => {
    fetchAllStudents();
    console.log(refNameInputField.current);
    refNameInputField.current.focus();

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

  console.log(state.students);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
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
              ref={refNameInputField}
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
          {state.students.map((student) => (
            <div key={student.id}>
              <Student student={student} />
            </div>
          ))}
        </div>
      </section>
    </StudentContext.Provider>
  );
}

export default StudentsBoard;
