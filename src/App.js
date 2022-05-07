import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, SignUp } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <ToastContainer
        position="top-right"
        style={{ top: "4.5em", right: "0em" }}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <Routes>
        {" "}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
