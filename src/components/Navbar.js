import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <p>
          <Link to='/'>Image Editing BootCamp</Link>
        </p>
        <ul className='nav-menu'>
          <li>
            <Link to='/create-task'>Create Task</Link>
          </li>
          <li>
            <Link to='/score-task'>Score Task</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
