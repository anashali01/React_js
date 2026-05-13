import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

const Login = () => {
  const [formData, setFormData] = useState({email : "" , password : ""});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await signInWithEmailAndPassword(auth , formData.email , formData.password);
        alert('Welcome Back !')
    } catch (error) {
        setError(error.message);
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <div className="card px-3 py-5 rounded-4">
            <div className="card-title text-center">
              <h1>Login User</h1>
            </div>
            <div className="card-body">
              {error && <p style={{ color: "red" }}>{error}</p>}
              <form action="" method="post" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
