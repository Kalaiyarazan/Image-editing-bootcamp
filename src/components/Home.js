import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
      <h2>Welcome to Image Editing BootCamp</h2>
      <button className='btn'>
        {' '}
        <Link to='/create-task'>Getting Started</Link>
      </button>
    </div>
  );
};

export default Home;
