import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginUser, token } = useAuth();

  const loginHandler = async () => {
    if (email !== "" && password !== "") {
      await loginUser(email, password);
    }
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <div className="bg-background w-full h-screen px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="w-1/4 xl:w-2/5 py-3 sm:max-w-xl mx-auto text-center md:w-3/4">
        <div className="mt-4 bg-secondary-background shadow-md sm:rounded-lg text-left rounded-lg">
          <div className="h-2 bg-primary rounded-t-lg"></div>

          <div className="px-12 py-4 pb-8">
            <div className="flex-col justify-evenly items-center border-b-2 border-blue-400 py-2">
              <img
                className="h-16 mx-auto"
                src="https://res.cloudinary.com/donqbxlnc/image/upload/v1651952778/NeoPortal_logo_sw-modified_hxba46.png"
                alt="logo"
              />
              <span className="text-2xl flex justify-center font-semibold  pb-2">
                Sign In
              </span>
            </div>
            <div className="pt-8">
              <label className="block font-semibold">Username or Email</label>
              <input
                type="text"
                placeholder="Email"
                className="bg-gray-900 placeholder:text-gray-300 w-full h-5 px-3 py-5 mt-2 outline:none hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md placeholder:select-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="  bg-gray-900 placeholder:text-gray-300 w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md placeholder:select-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div>
                <button
                  className="font-semibold w-full my-6 bg-primary text-white py-2 px-6 rounded-lg"
                  onClick={() => loginHandler()}
                >
                  Sign In
                </button>
              </div>
              <div className="text-center font-semibold">
                <Link to="/sign-up">
                  <p className="cursor-pointer hover:underline">
                    Create New Account
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
