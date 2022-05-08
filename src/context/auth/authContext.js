import { createContext, useContext, useEffect, useState } from "react";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../services/auth-service";
import { toast } from "react-toastify";
import {
  auth,
  collection,
  db,
  signOut,
  getDocs,
  query,
  where,
} from "../../firebase/firebase.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = localStorage.getItem("token");
  const [token, setToken] = useState(localStorageToken);
  const localStorageUser = localStorage.getItem("user");
  const [user, setUser] = useState(localStorageUser);
  const [userInfo, setUserInfo] = useState();
  console.log(userInfo);
  useEffect(() => {
    if (token && user) {
      (async () => {
        const q = query(collection(db, "users"), where("uid", "==", user));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const userObj = doc.data();
          setUserInfo(userObj);
        });
      })();
    }
  }, [token, user]);

  const loginUser = async (email, password) => {
    if (email && password !== "") {
      try {
        const authRes = await logInWithEmailAndPassword(email, password);
        const user = authRes?.user;
        if (user) {
          localStorage.setItem("token", user.accessToken);
          localStorage.setItem("user", user.uid);
          setToken(user.accessToken);
          setUser(user.uid);
          toast.success(`Logged In Successfully!`);
        }
      } catch (error) {
        const msg = error.message
          .match(/\/(\S+)[)]./i)[1]
          .replace(/-/g, " ")
          .toUpperCase();
        toast.error(`${msg} !`);
        console.log(error.message);
      }
    }
  };

  const signUpUser = async (name, email, password, github) => {
    try {
      const authRes = await registerWithEmailAndPassword(
        name,
        email,
        password,
        github,
      );
      const user = authRes?.user;
      if (user) {
        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("user", user.uid);
        setToken(user.accessToken);
        setUser(user.uid);
        toast.success(`Account Created Successfully!`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        loginUser,
        signUpUser,
        userInfo,
        setUserInfo,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
