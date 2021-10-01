import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Student from './Student';

function UserBoard() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/students')
      .then((response) => {
        // console.log(response.data);
        setStudents(response.data.data);
      })
      .catch((error) => {
        console.log('error => ', error);
      });
  }, []);

  const updateInput = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log('students: ', students);

  return (
    <>
      <section>
        <form className='form' onSubmit={handleSubmit} autoComplete='off'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              onChange={updateInput}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='country'>Country : </label>
            <input
              type='text'
              id='country'
              name='country'
              onChange={updateInput}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='program'>Program : </label>
            <input
              type='text'
              id='program'
              name='program'
              onChange={updateInput}
            />
          </div>
          <button className='btn' type='submit'>
            Add Student
          </button>
        </form>
      </section>
      <section>
        <div className='items'>
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

export default UserBoard;
