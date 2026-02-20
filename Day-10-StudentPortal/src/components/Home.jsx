import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = ({list}) => {
  return (
    <div>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Header/>

        {/* Sidebar Start */}
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xl-none">
                  <a
                    className="nav-link sidebartoggler nav-icon-hover"
                    id="headerCollapse"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-menu-2" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-icon-hover"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-bell-ringing" />
                    <div className="notification bg-primary rounded-circle" />
                  </a>
                </li>
              </ul>
              <div
                className="navbar-collapse justify-content-end px-0"
                id="navbarNav"
              >
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <a
                    href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Download Free
                  </a>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link nav-icon-hover"
                      href="javascript:void(0)"
                      id="drop2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="../assets/images/profile/user-1.jpg"
                        alt
                        width={35}
                        height={35}
                        className="rounded-circle"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-user fs-6" />
                          <p className="mb-0 fs-3">My Profile</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-mail fs-6" />
                          <p className="mb-0 fs-3">My Account</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-list-check fs-6" />
                          <p className="mb-0 fs-3">My Task</p>
                        </a>
                        <a
                          href="./authentication-login.html"
                          className="btn btn-outline-primary mx-3 mt-2 d-block"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {/*  Header End */}
          <div className="container-fluid">
            {/*  Row 1 */}
            <div className="row">
              <div className="col-lg-8 d-flex align-items-strech">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                      <div className="mb-3 mb-sm-0">
                        <h5 className="card-title fw-semibold">
                          Sales Overview
                        </h5>
                      </div>
                      <div>
                        <select className="form-select">
                          <option value={1}>March 2023</option>
                          <option value={2}>April 2023</option>
                          <option value={3}>May 2023</option>
                          <option value={4}>June 2023</option>
                        </select>
                      </div>
                    </div>
                    <div id="chart" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Yearly Breakup */}
                    <div className="card overflow-hidden">
                      <div className="card-body p-4">
                        <h5 className="card-title mb-9 fw-semibold">
                          Total Students
                        </h5>
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h4 className="fw-semibold mb-3">{list.length}</h4>
                            <div className="d-flex align-items-center mb-3">
                              <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                <i className="ti ti-arrow-up-left text-success" />
                              </span>
                              <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                              <p className="fs-3 mb-0">last year</p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="me-4">
                                <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                                <span className="fs-2">2026</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="d-flex justify-content-center">
                              <div id="breakup" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {/* Monthly Earnings */}
                    <div className="card">
                      <div className="card-body">
                        <div className="row alig n-items-start">
                          <div className="col-8">
                            <h5 className="card-title mb-9 fw-semibold">
                              {" "}
                              Monthly Earnings{" "}
                            </h5>
                            <h4 className="fw-semibold mb-3">$6,820</h4>
                            <div className="d-flex align-items-center pb-1">
                              <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                <i className="ti ti-arrow-down-right text-danger" />
                              </span>
                              <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                              <p className="fs-3 mb-0">last year</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="d-flex justify-content-end">
                              <div className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                                <i className="ti ti-currency-dollar fs-6" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="earning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-semibold mb-4">
                      Recent Students
                    </h5>
                    <div className="table-responsive">
                      <table className="table text-nowrap mb-0 align-middle">
                        <thead className="text-dark fs-4">
                          <tr>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">No.</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Name</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Course</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Email</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">View</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {list.length > 0 ? (
                            list.map((student , idx)=> {
                              return(
                                <tr>
                                  <td>{idx+1}</td>
                                  <td>{student.name}</td>
                                  <td>{student.course}</td>
                                  <td>{student.email}</td>
                                  <td>
                                    <Link className="btn btn-info" to={`/viewStudent`}>View</Link>
                                  </td>
                                </tr>
                              )
                            })
                          ):(
                            <p>No Student Data Available</p>
                          )  }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
