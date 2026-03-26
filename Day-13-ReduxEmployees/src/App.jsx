import React from "react";
import Header from "./componnets/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Add_Emp from "./pages/Add_Emp";
import View_Emp from "./pages/View_Emp";
import Home from "./pages/Home";
import AssignTask from "./pages/AssignTask";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import MyTask from "./pages/MyTask";

const App = () => {
  const { user, isAuth } = useSelector((state) => state.auth);

  return (
    <div>
      {/* Header OUTSIDE */}
      {isAuth && user?.role === "admin" && <Header />}

      <Routes>
        {/* Login is only for guests */}
        <Route
          path="/login"
          element={
            isAuth ? (
              <Navigate to={user?.role === "admin" ? "/" : "/myTask"} replace />
            ) : (
              <Login />
            )
          }
        />

        {!isAuth ? (
          // ❌ Not logged in → redirect all to login
          <Route path="*" element={<Navigate to="/login" />} />
        ) : user?.role === "admin" ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/add-emp" element={<Add_Emp />} />
            <Route path="/assign-task" element={<AssignTask />} />
            <Route path="/view-emp" element={<View_Emp />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/myTask" element={<MyTask />} />
            <Route path="*" element={<Navigate to="/myTask" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
