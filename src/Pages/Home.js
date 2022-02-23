import React from 'react';
import '../styles/Home.css';
import Form from '../component/form';

function Home() {
  return (
    <div>
      <div className='content-box'>
        <p className='form-head'>Aromatic Bar</p>
        <p className='fomr-sub-head'>we are commited to providing you with the best dinig experience possible, so we welcome your comments. Please fill out this quationnaire. Thank you</p>
        <Form />
      </div>
    </div>
  );
};
export default Home;