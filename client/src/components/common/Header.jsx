import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=' bg-blue-gray-400 p-3'>
      <nav>
        <ul className='flex gap-4 justify-center'>
          <li className='hover:bg-blue-gray-600'>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
