import { Routes, Route } from "react-router-dom";
import "./App.css";

import { NavBar, PrivateRoute } from "./components";
import { LandingPage, Login, SignUp, UserProfile } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-background h-screen text-txt-color">
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
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
