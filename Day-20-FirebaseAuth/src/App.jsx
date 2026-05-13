import React, { useEffect, useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div>
        {isNewUser ? <SignUp /> : <Login />}
        <p className="text-center">
          {isNewUser ? "Already have an account ? " : "Don't have any account?"}
          <button className="bg-transparent border-0 text-decoration-underline text-primary" onClick={() => setIsNewUser(!isNewUser)}>
            {isNewUser ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    );
  }
  return (
    <div>
      <p>Welcome , {user.email}</p>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
};

export default App;
