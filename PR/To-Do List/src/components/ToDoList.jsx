import React, { useRef, useState } from 'react'

const ToDoList = () => {
   const [list, setList] = useState([]);
  const inputRef = useRef();

  const handleForm = (dets) => {
    dets.preventDefault();
    let text = inputRef.current.value;
    inputRef.current.value = ''
    console.log(text);
    let newList = [...list];
    newList.push(text);
    setList(newList);
  };
  console.log(list);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h1 className="heading">To Do List </h1>
          <form action="" method="post" onSubmit={handleForm}>
            <label htmlFor="">Task :</label>
            <input type="text" ref={inputRef} className="input" />

            <div className="btn">
              <button type="submit">Assign</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
            <h2 className="todo-title">Task List</h2>
          <div className="todo-list">

          <ul className="list ">
            {list.map((value, index) => {
              return (
                <li className="todo-item" key={index}>
                  {value}
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
