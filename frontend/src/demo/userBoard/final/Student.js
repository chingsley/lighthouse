import React from 'react';
import flags from '../../../data/countryFlags';

function Student(props) {
  console.log('props: ', props);
  const { program, name, status } = props.student;
  const imgUrl = flags['France'.toLowerCase()];
  console.log(imgUrl, flags);
  return (
    <div className='item'>
      <div className='item-header'>
        <p>Lighthouse Labs</p>
        <span>{program}</span>
        <br />
        <span className='student-status'>{status}</span>
      </div>
      <div className='item-body'>
        <div className='img-container'>
          <img
            className='img'
            src='https://cdn4.vectorstock.com/i/thumb-large/46/78/person-gray-photo-placeholder-girl-material-design-vector-23804678.jpg'
            alt=''
          />
          <span
            className='country-flag'
            style={{
              background: `url(${imgUrl})`,
            }}
          ></span>
        </div>
      </div>
      <h4 className='student-name'>{name}</h4>
      <p>Vancouver</p>
      {status.toLowerCase() === 'alumni' ? (
        <span className='span-info'>Software engineering</span>
      ) : (
        <button className='btn'>Graduate</button>
      )}

      <p className='bio'>Stacks: Nodejs, React, React Native, PostgreSQL</p>
    </div>
  );
}

export default Student;
