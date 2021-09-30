import React from 'react';

function Student() {
  return (
    <div className='item'>
      <div className='item-header'>
        <p>Lighthouse Labs</p>
        <span>Software Engineer</span>
        <br />
        <span className='student-status'>Alumni</span>
      </div>
      <div className='item-body'>
        <div className='img-container'>
          <img
            className='img'
            src='https://cdn4.vectorstock.com/i/thumb-large/46/78/person-gray-photo-placeholder-girl-material-design-vector-23804678.jpg'
            alt=''
          />
          <span className='country-flag'></span>
        </div>
      </div>
      <h4 className='student-name'>Student Name</h4>
      <p>Vancouver</p>
      <button className='btn'>Graduate</button>
      {/* <span className='span-info'>Software engineering</span> */}
      <p className='bio'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non modi,
        dignissimos maiores alias accusantium reiciendis, iusto quisquam
        numquam, beatae fugiat dolores. Delectus dolorum quas eligendi iste sint
        sequi officiis accusamus?
      </p>
    </div>
  );
}

export default Student;
