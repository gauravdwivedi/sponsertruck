import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

      <nav className="nav">
        <div className="left-nav">
          <Link to="/">
            <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="logo" /></Link>
        </div>
        <div className="search-container">
          <img className="search-icon" src="https://image.flaticon.com/icons/svg/483/483356.svg" alt="search-icon" />
          <input placeholder="Search" />
          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-dp" />
              </li>
              <span>John Doe</span>
            </ul>

          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="user-dp"
              id="user-dp" />
            <span>John Doe</span>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/login">Login</Link></li>
              <li> <Link to="/logout">Login</Link>Logout</li>
              <li> <Link to="/signup">SignUp</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;