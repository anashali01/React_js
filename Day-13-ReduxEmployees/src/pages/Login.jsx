import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../feature/auth/authSlicer";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(loginData));
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form className="form " method="post" onSubmit={handleSubmit}>
            <div className="title">
              Welcome,
              <br />
              <span>sign up to continue</span>
            </div>
            <input
              className="input"
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={loginData.email || ''}
            />
            <input
              className="input "
              name="pin"
              placeholder="PIN"
              type="password"
              onChange={handleChange}
              value={loginData.pin || ''}
            />
            <button  type="submit">
              Let`s go →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
