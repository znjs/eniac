import { Routes, Route } from "react-router-dom";
import "./App.css";

import { NavBar } from "./components";
import { Login, SignUp } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-background h-screen text-gray-50">
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
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
