import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <Link to="/" className="text-nowrap logo-img">
              <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
            </Link>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8" />
            </div>
          </div>
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar>
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Home</span>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/" aria-expanded="false">
                  <span>
                    <i className="ti ti-layout-dashboard" />
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </Link>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Students</span>
              </li>

              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/addStudent"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-file-description" />
                  </span>
                  <span className="hide-menu">Add Student</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/takeAttendance"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-file-description" />
                  </span>
                  <span className="hide-menu">Take Attendance</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/viewStudent"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-cards" />
                  </span>
                  <span className="hide-menu">View Student</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/viewAttendance"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-cards" />
                  </span>
                  <span className="hide-menu">View Attendance</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="./authentication-login.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-login" />
                  </span>
                  <span className="hide-menu">Login</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="./authentication-register.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-user-plus" />
                  </span>
                  <span className="hide-menu">Register</span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </>
  );
};

export default Header;
