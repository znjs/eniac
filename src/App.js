import { ErrorPage } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import { NavBar, PrivateRoute } from "./components";
import { LandingPage, Login, SignUp, UserListing, UserProfile } from "./pages";
import { ToastContainer, toast } from "react-toastify";
import { useInterview } from "./context";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase.config";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();
  const { state, dispatch } = useInterview();
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await getDocs(collection(db, "scheduleBoard"));

        const newSchedules = [];
        res.docs.forEach((doc) => newSchedules.push(doc.data()));
        dispatch({
          type: "SET_ALL_SCHEDULES",
          payload: {
            schedules: newSchedules,
          },
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [location.pathname]);

  return (
    <div className="bg-background h-screen text-txt-color">
      <NavBar search={search} setSearch={setSearch} />
      <ToastContainer
        position="top-right"
        autoClose="2000"
        limit="1"
        style={{ top: "4.5em", right: "0em" }}
        theme="dark"
      />
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
          path="/userListing"
          element={
            <PrivateRoute>
              <UserListing search={search} setSearch={setSearch} />
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
