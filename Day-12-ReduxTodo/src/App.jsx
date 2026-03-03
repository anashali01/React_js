import React, { useState } from "react";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { createTodo } from "./feature/todo/TodoSlice";
import Table from "./components/Table";

const App = () => {
  const [todo, setTodo] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo(todo));

    setTodo({});
  };
  return (
    <div>
      <Form
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Table />
    </div>
  );
};

export default App;
