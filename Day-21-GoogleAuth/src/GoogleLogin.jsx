import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "./firebase";

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error.message)
    }
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleGoogleLogin}>Sign In With Google</button>
    </div>
  );
};

export default GoogleLogin;
