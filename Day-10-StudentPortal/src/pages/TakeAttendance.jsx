import React, { useState } from "react";
import Header from "../components/Header";

const TakeAttendance = ({ list , setList}) => {

  const [date , setDate] = useState("");
  const [attendance , setAttendance] = useState({});

  const handleAttendanceChange = (e , id) => {
    const {value} = e.target;
    setAttendance({...attendance , [id] : value })
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleSubmit = () => {
    if(!date){
      alert("Please Select Date");
    }
    const attendanceData = list.map((student) => {
      let status = attendance[student.id];

      if(!status) return student || "Attendance not marked";

      return {
        ...student,
        attendance : {
          ...student.attendance,
          [date] : status
        }
      }
      
    })

    setList(attendanceData);
    setAttendance({});
  }
  console.log(list);
  
  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Header />
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
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <h1 className="table-caption">Student Attendance</h1>
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control w-25"
                      value={date || ""}
                      onChange={handleDateChange}
                    />
                  </div>

                  <table className="table table-bordered table-striped text-center">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Student Name</th>
                        <th>Course</th>
                        <th>Attendance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((student , idx) => {
                        return (
                          <tr>
                            <td>{idx+1}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td className="text-center">
                              <select name="attendance" id="" value={attendance[student.id] || ""} onChange={(e) => handleAttendanceChange(e,student.id)}>
                                <option value="">Select Status</option>
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                              </select>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot className="text-end" >
                      <tr>
                        <td colSpan={4}><button className="btn btn-primary" onClick={handleSubmit}>Mark Attendance</button></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeAttendance;
