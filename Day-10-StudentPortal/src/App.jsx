import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import ViewStudent from "./pages/ViewStudent";
import TakeAttendance from "./pages/TakeAttendance";
import ViewAttendance from "./pages/ViewAttendance";

const App = () => {
  const [student, setStudent] = useState({});
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list") || "[]");
    setList(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (student.id) {
      let newList = list.map((std) => {
        if (std.id == student.id) {
          navigate("/viewStudent");
          return student;
        }
        return std;
      });

      setList(newList);
    } else {
      const updatedList = [...list, { ...student, id: Date.now() }];
      setList(updatedList);
      navigate("/viewStudent");
    }
    setStudent({});
  };

  const handleDelete = (id) => {
    let newList = list.filter((s) => s.id !== id);
    setList(newList);
  };

  const handleEdit = (id) => {
    const found = list.find((s) => s.id === id);
    if (found) {
      setStudent(found);
      navigate("/addStudent");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({ ...student, [name]: value });
  };

  console.log(list);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home list={list} />} />
        <Route
          path="/addStudent"
          element={
            <AddStudent
              student={student}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/viewStudent"
          element={
            <ViewStudent
              list={list}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
        <Route
          path="/takeAttendance"
          element={<TakeAttendance list={list} setList={setList} />}
        />
        <Route
          path="/viewAttendance"
          element={<ViewAttendance list={list} />}
        />
      </Routes>
    </div>
  );
};

export default App;
