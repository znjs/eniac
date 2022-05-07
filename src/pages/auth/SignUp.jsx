import React, { useState } from "react";
import { useAuth } from "../../context";
import { useNavigate, Link } from "react-router-dom";

export function SignUp() {
  const { token, signUpUser } = useAuth();
  const navigate = useNavigate();
  const signUpFields = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    github: "https://github.com/",
  };
  const [signUpForm, setSignUpForm] = useState(signUpFields);

  const signUpHandler = async () => {
    const { email, password, firstName, lastName, github } = signUpForm;
    if (email && password && firstName && lastName !== "") {
      await signUpUser(`${firstName} ${lastName}`, email, password, github);
    }
    setSignUpForm(signUpFields);
  };

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setSignUpForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  if (token) {
    navigate("/");
  }

  return (
    <div className="bg-background w-full h-screen   px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="w-1/4 xl:w-2/5 py-3 sm:max-w-xl mx-auto text-center md:w-3/4">
        <div className="mt-4 bg-secondary-background shadow-md sm:rounded-lg text-left rounded-lg">
          <div className="h-2 bg-primary rounded-t-lg"></div>
          <div className="px-12 py-4 pb-8 ">
            <span className="text-2xl flex justify-center font-semibold border-b-2 border-blue-400 pb-2">
              Sign Up
            </span>
            <div className="pt-8">
              <div className="flex gap-4 sm:flex-col mb-4">
                <div>
                  <label className="block font-semibold">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className=" border bg-nav-background w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                    value={signUpForm.firstName}
                    onChange={(e) => fillFormValue(e, "firstName")}
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" border bg-nav-background w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                    value={signUpForm.lastName}
                    onChange={(e) => fillFormValue(e, "lastName")}
                    required
                  />
                </div>
              </div>
              <label className="block font-semibold">Github Id</label>
              <input
                type="text"
                placeholder="https://github.com/"
                className=" border bg-nav-background w-full h-5 px-3 py-5 mt-2 mb-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                value={signUpForm.github}
                onChange={(e) => fillFormValue(e, "github")}
                required
              />
              <label className="block font-semibold">Email</label>
              <input
                type="text"
                placeholder="Email"
                className=" border bg-nav-background w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                value={signUpForm.email}
                onChange={(e) => fillFormValue(e, "email")}
                required
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className=" border bg-nav-background w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                value={signUpForm.password}
                onChange={(e) => fillFormValue(e, "password")}
                required
              />
              <div>
                <button
                  className="font-semibold w-full my-6 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary"
                  onClick={() => signUpHandler()}
                >
                  Create Account
                </button>
              </div>
              <div className="text-center  font-semibold">
                <Link to="/sign-in">
                  <p className="cursor-pointer hover:underline">
                    Already Have An Account ?
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
