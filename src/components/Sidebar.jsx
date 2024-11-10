import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ setTab }) {
  const [home, setHome] = useState();

  const handleHomeClick = () => {
    setHome("Home");
    setTab("Home");
  };
  const handleAddClick = () => {
    setHome("Add");
    setTab("Add");
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{
        width: "20vw",
        position: "fixed",
        top: "0",
        height: "100vh",
        zIndex: "100",
      }}
      data-bs-theme="dark"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span className="fs-4">Instakilogram</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/home"
            className={`nav-link link-body-emphasis ${
              home === "Home" && "active"
            }`}
            aria-current="page"
            onClick={handleHomeClick}
            style={{ width: "100%" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/addpost"
            className={`nav-link link-body-emphasis ${
              home === "Add" && "active"
            }`}
            onClick={handleAddClick}
            style={{ width: "100%" }}
          >
            Add-Post
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
