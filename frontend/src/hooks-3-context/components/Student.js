import axios from "axios";
import React, { useContext } from "react";
import flags from "../../data/countryFlags";
import { UPDATE_STUDENT } from "../state/types";
import { StudentContext } from "../contexts/StoreContext";

function Student(props) {
  const { dispatch } = useContext(StudentContext);
  console.log("dispatch = ", dispatch);
  const { student } = props;
  const { program, name, status, country, id } = student;

  const imgUrl =
    flags[country.toLowerCase()] ||
    "https://www.careersinafrica.com/wp-content/uploads/2020/05/placeholder.png";

  const granduateStudent = async () => {
    const url = `http://localhost:4000/students/${id}`;
    const updates = { status: "alumni" };
    const response = await axios.patch(url, updates);
    dispatch({ type: UPDATE_STUDENT, student: response.data.data });
    console.log(response.data.data);
  };

  return (
    <div className="item">
      <div className="item-header">
        <p>Lighthouse Labs</p>
        <span>{program}</span>
        <br />
        <span className="student-status">{status}</span>
      </div>
      <div className="item-body">
        <div className="img-container">
          <img
            className="img"
            src="https://cdn4.vectorstock.com/i/thumb-large/46/78/person-gray-photo-placeholder-girl-material-design-vector-23804678.jpg"
            alt=""
          />
          <span
            className="country-flag"
            style={{
              background: `url(${imgUrl})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></span>
        </div>
      </div>
      <h4 className="student-name">{name}</h4>
      <p className="student-country">{country}</p>
      {status.toLowerCase() === "alumni" ? (
        <span className="span-info">{program}</span>
      ) : (
        <button className="btn" onClick={granduateStudent}>
          Graduate
        </button>
      )}

      <p className="bio">Stacks: Nodejs, React, React Native, PostgreSQL</p>
    </div>
  );
}

export default Student;
