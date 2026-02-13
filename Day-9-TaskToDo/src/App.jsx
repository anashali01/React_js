import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Form from "./pages/Form.jsx";
import Table from "./pages/Table.jsx";

const App = () => {
  const [task, setTask] = useState({});
  const [list, setList] = useState([]);

  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      let newList = list.map((item) => {
        if (item.id == task.id) {
          return task
        }
        return item;
      });
      setList(newList)

    } else {
      setList([...list, { ...task, id: Date.now() }]);
    }
    navigator('/table')
    setTask({});
  };

  console.log(list);
  
  const handleDelete = (id) => {
    let newList = list.filter((item) => item.id != id);

    setList(newList);
  };

  const handleEdit = (id) => {
    let data = list.find((item) => item.id == id);

    navigator('/')
    setTask(data);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Form task={task} handleChange={handleChange} handleSubmit={handleSubmit} />} />
        <Route path="/table" element={<Table list={list} handleDelete={handleDelete} handleEdit={handleEdit} />} />
      </Routes>
    </>
  );
};

export default App;
