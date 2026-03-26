import { ToastContainer } from "react-toastify";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Form />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
