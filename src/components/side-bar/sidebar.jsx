import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { MainDashboard } from "../main-dashboard/main-dashboard";
import { Users } from "../Users/users";
import { Categories } from "../Categories/categories";
import { Pages } from "../Pages/pages";

export function Sidebar() {
  const [content, setContent] = useState(<MainDashboard/>);
  const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768); // Sidebar visible on large screens by default

  // Monitor window resizing to adjust sidebar visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarVisible(true); // Show sidebar for larger screens
      } else {
        setSidebarVisible(false); // Hide sidebar for smaller screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handlers for content changes and sidebar behavior
  const handleDashboard = () => {
    setContent(<MainDashboard />);
    closeSidebarOnSmallScreen();
  };

  const handleUsers = () => {
    setContent(<Users />);
    closeSidebarOnSmallScreen();
  };

  const handleCategory = () => {
    setContent(<Categories />);
    closeSidebarOnSmallScreen();
  };

  const handlePages = () => {
    setContent(<Pages />);
    closeSidebarOnSmallScreen();
  };

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  const closeSidebarOnSmallScreen = () => {
    if (window.innerWidth <= 768) setSidebarVisible(false); // Hide sidebar for smaller screens
  };
  function handleClose(){
    setSidebarVisible(false);

  }
  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className={`left-container ${sidebarVisible ? "visible" : ""}`}>
        <div className="d-flex">
          <h3>List</h3>
          <button className="btn-close" onClick={handleClose}></button>
        </div>
        <div className="icons">
          <div>
            <span className="bi bi-house me-2"></span>
            <span onClick={handleDashboard}>Dashboard</span>
          </div>
          <div>
            <span className="bi bi-list me-2"></span>
            <span onClick={handleUsers}>Users</span>
          </div>
          <div>
            <span className="bi bi-image me-2"></span>
            <span onClick={handleCategory}>Categories</span>
          </div>
          <div>
            <span className="bi bi-paperclip me-2"></span>
            <span onClick={handlePages}>Pages</span>
          </div>
          <div>
            <span className="bi bi-envelope me-2"></span>Comments
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="right-container">
        {/* Navbar */}
        <div className="nav-container">
          {/* Sidebar toggle button for small screens */}
          <button
            className="btn bi bi-list nav-list"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          ></button>

          <div className="nav-input input-group input-group-sm w-50">
            <input
              type="text"
              placeholder="Enter your Keywords"
              className="form-control form-control-sm "
            />
            <label className="bi bi-search input-group-text "></label>
          </div>

          <div className="nav-icons">
            <span className="dropdown me-4">
              <span
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </span>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    French
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Uzbek
                  </a>
                </li>
              </ul>
            </span>
            <span className="bi bi-sun me-4"></span>
            <span className="dropdown">
              <span
                className="bi bi-bell me-4"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></span>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    System just updated
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    The cache is full
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New subscriber here
                  </a>
                </li>
              </ul>
            </span>
            <span className="dropdown">
              <span
                className="bi bi-person-fill"
                title="My Profile"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></span>
              <ul className="dropdown-menu p-2">
                <li className="dropdown-item bi bi-person">Profile</li>
                <li className="dropdown-item bi bi-gear">Account settings</li>
                <li className="dropdown-item bi bi-box-arrow-right">Logout</li>
              </ul>
            </span>
          </div>
        </div>

        {/* Render selected content */}
        <div className="mt-4">{content}</div>
      </main>
    </div>
  );
}
