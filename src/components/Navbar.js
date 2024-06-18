import React from 'react';

function Navbar({ title, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="#">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li> */}
          </ul>
          <form className="d-flex">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
