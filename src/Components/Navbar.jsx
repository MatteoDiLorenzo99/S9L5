import React from 'react';

const Navbar = ({toggleProfile}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-secondary">
      <div className="container">
        {/* Logo Netflix */}
        <a href="/" className="navbar-brand text-danger fw-bold">NETFLIX</a>

        {/* Toggler per schermi piccoli */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/tv-shows" className="nav-link">TV Shows</a>
            </li>
            <li className="nav-item">
              <a href="/movies" className="nav-link">Movies</a>
            </li>
            <li className="nav-item">
              <a href="/new" className="nav-link">New & Popular</a>
            </li>
            <li className="nav-item">
              <a href="/my-list" className="nav-link">My List</a>
            </li>
          </ul>

          {/* Icone a destra per la ricerca, notifiche e profilo */}
          <div className="d-flex gap-3">
            <button className="btn btn-dark rounded-circle">
              <span className="h-5 w-5">🔍</span> {/* Icona di ricerca */}
            </button>
            <button className="btn btn-dark rounded-circle">
              <span className="h-5 w-5">🔔</span> {/* Icona di notifiche */}
            </button>
            <button className="btn btn-dark rounded-circle" onClick={toggleProfile}>
              <span className="h-5 w-5">👤</span> {/* Icona del profilo */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
