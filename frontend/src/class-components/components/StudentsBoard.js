import React from "react";
import axios from "axios";
import Student from "./Student";

class StudentsBoard extends React.Component {
  state = {
    students: [],
    formData: {
      name: "",
      country: "",
      program: "",
    },
  };

  updateInput = (e) => {
    e.persist();
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  fetchAllStudents = async () => {
    const { data } = await axios.get("http://localhost:4000/students");
    this.setState({ students: data.data });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:4000/students", {
        ...this.state.formData,
        status: "student",
      });
      this.fetchAllStudents();
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };

  componentDidMount() {
    this.fetchAllStudents();
  }

  render() {
    return (
      <>
        <section>
          <form
            className="form"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => this.updateInput(e)}
                value={this.state.formData.name}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                onChange={(e) => this.updateInput(e)}
                value={this.state.formData.country}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="program">Program</label>
              <input
                type="text"
                id="program"
                name="program"
                onChange={(e) => this.updateInput(e)}
                value={this.state.formData.program}
                required
              />
            </div>
            <button className="btn" type="submit">
              Add Student
            </button>
          </form>
        </section>
        <section>
          <div className="items">
            {this.state.students.map((student) => (
              <div key={student.id}>
                <Student student={student} />
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default StudentsBoard;
