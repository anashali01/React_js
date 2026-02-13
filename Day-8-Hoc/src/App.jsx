import React from "react";
import Count from "./Components/Count.jsx";
import NewCount from "./Components/NewCount.jsx";

const App = () => {
  return (
    <>
      <Count />
      <NewCount increase={2} />
    </>
  );
};

export default App;
