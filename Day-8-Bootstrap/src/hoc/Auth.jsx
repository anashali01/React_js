import React, { useState } from "react";
import Login from "../components/Login";

const Auth = (WrappedComponent) => {
  return function EnhanceComponent(props) {
    const [isLogin, setLogin] = useState(false);

    if (!isLogin) return <Login />;

    return <WrappedComponent {...props} />;
  };
};

export default Auth;
