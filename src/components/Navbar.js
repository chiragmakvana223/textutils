import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ title, mode, toggleMode }) {
  const labelStyle = {
    color: mode === 'dark' ? 'white' : 'black'
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={labelStyle}>
                {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
