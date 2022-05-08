import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ConfirmModalProvider,
  InterviewContextProvider,
  InterViewModalProvider,
} from "./context";
import { AuthProvider } from "./context/auth/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <InterviewContextProvider>
          <InterViewModalProvider>
            <ConfirmModalProvider>
              <App />
            </ConfirmModalProvider>
          </InterViewModalProvider>
        </InterviewContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);
