import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InterviewInfo } from "../../components";
import { useAuth, useInterview } from "../../context";
import "./userProfile.css";
function UserProfile() {
  const navigate = useNavigate();
  const { logoutHandler, userInfo } = useAuth();
  const [filteredSchedules, setFilteredSchedules] = useState([]);
  const { state } = useInterview();

  useEffect(
    () =>
      setFilteredSchedules(
        state.schedules.filter((ele) => ele.email === userInfo.email),
      ),
    [state.schedules],
  );

  return (
    <div className="w-screen userProfile flex justify-center items-center">
      {userInfo && (
        <div className="userProfile flex justify-center items-start mt-40 w-1/2">
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="flex justify-between items-center flex-wrap">
              <h1 className="text-2xl ">Profile</h1>
              <button
                onClick={logoutHandler}
                className="bg-red-600 px-2 py-1 rounded-lg"
              >
                Logout
              </button>
            </div>
            <div className="flex py-1 flex-wrap">
              <p className="pr-2 w-20">Name: {userInfo.username}</p>
              <p className="px-2 grow"></p>
            </div>
            <div className="flex py-1 flex-wrap">
              <p className="pr-2 w-20">Email: {userInfo.email}</p>
              <p className="px-2 grow"></p>
            </div>

            <div className="flex flex-wrap">
              <p className="pr-2 w-20">Github:</p>
              <p className="px-2 grow ease-out duration-300 hover:scale-150 hover:translate-x-8 hover:bg-gray-800 hover:grow-0">
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href={userInfo.githubId}
                  className="italic"
                >
                  {userInfo.githubId.split("/")[3]}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="userProfile flex justify-center items-center w-1/2 overflow-auto">
        <div className="userProfile">
          <h1 className="text-center font-bold text-xl py-4">
            Interview Details
          </h1>
          {filteredSchedules.map((schedule) => (
            <InterviewInfo key={schedule.uid} schedule={schedule} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { UserProfile };
