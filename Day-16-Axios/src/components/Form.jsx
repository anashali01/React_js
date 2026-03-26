import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user);
    setUser({});
  };

  const createUser = async (user) => {
    try {
      if(user.id){
        updateUser(user);
      }else{
        await axios.post("http://localhost:3000/user", user);
        toast.success("User Created !");
      }
      getAllUser()
      
    } catch (error) {
      toast.error("Something Wrong !");
    }
  };

  const getAllUser = async () => {
    try {
      let res = await fetch("http://localhost:3000/user");
      let data = await res.json();
      setList(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      getAllUser();
      toast.success("Deleted !");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = (id) => {
    let user = list.find(item => item.id == id);
    setUser(user);
  }

  const updateUser = async(user) => {
    try {
      let id = user.id;
      delete user.id;

      let res = await axios.patch(`http://localhost:3000/user/${id}`,user)

      toast.success(`${res.data.username} updated !`)
    } catch (error) {
      toast.error('Something Wrong');
    }
  }
  useEffect(() => {
    getAllUser();
    console.log(list);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-md-4">
            <form className="form" method="post" onSubmit={handleSubmit}>
              <span className="title">Add User</span>
              <p className="description">Add Your Task</p>
              <div>
                <input
                  placeholder="Enter your name"
                  type="text"
                  name="username"
                  value={user.username || ""}
                  onChange={handleChange}
                />
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={user.email || ""}
                  onChange={handleChange}
                />
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  value={user.password || ""}
                  onChange={handleChange}
                />
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-md-5">
            <table className="table table-bordered table-hover table-info caption-top">
              <caption>
                <h2 className="text-center">Todo List</h2>
              </caption>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((val, idx) => {
                  return (
                    <tr key={val.id}>
                      <td>{idx + 1}</td>
                      <td>{val.username}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(val.id)}
                        >
                          Remove
                        </button>
                        <button
                          className="btn btn-outline-info"
                          onClick={() => handleEdit(val.id)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
