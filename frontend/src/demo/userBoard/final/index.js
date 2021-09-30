import React from 'react';
import Student from './Student';

function UserBoard() {
  return (
    <>
      <section>
        <form className='form' onSubmit={''}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input type='text' id='firstName' name='firstName' onChange={''} />
          </div>
          <div className='form-control'>
            <label htmlFor='program'>Program : </label>
            <input type='text' id='program' name='program' onChange={''} />
          </div>
          <button className='btn' type='submit'>
            Add Student
          </button>
        </form>
      </section>
      <section>
        <div className='items'>
          <Student />
          <Student />
          <Student />
          <Student />
          <Student />
          <Student />
          <Student />
        </div>
      </section>
    </>
  );
}

export default UserBoard;
