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

  useEffect(() => {
    if (state.schedules)
      setFilteredSchedules(
        [
          ...state.schedules.filter(
            (ele) =>
              ele.email === userInfo.email ||
              ele.intervieweeEmail === userInfo.email,
          ),
        ].sort((a, b) => new Date(a.date) - new Date(b.date)),
      );
  }, [state.schedules]);
  console.log(filteredSchedules);
  return (
    <div className="w-screen userProfile flex-col items-center">
      {userInfo && (
        <div className="flex justify-center items-start mt-16">
          <div className="bg-gray-900 p-4 rounded-lg w-80">
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
              <p className="pr-2 w-20">Name: </p>
              <p className="px-2 grow">{userInfo.name}</p>
            </div>
            <div className="flex py-1 flex-wrap">
              <p className="pr-2 w-20">Email: </p>
              <p className="px-2 grow">{userInfo.email}</p>
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
            <button
              onClick={logoutHandler}
              className="bg-red-600 px-2 py-1 rounded-lg mt-4"
            >
              Logout
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center  overflow-auto">
        <div>
          <h1 className="text-center font-bold text-xl py-4">
            Interview Details
          </h1>
          <p className="text-center italic">Scheduled by You:</p>
          <div className="flex justify-center gap-x-1 w-screen overflow-x-auto">
            {filteredSchedules
              .filter((item) => item.email === userInfo.email)
              .map((schedule) => (
                <InterviewInfo key={schedule.uid} schedule={schedule} />
              ))}
          </div>
          <p className="text-center italic">Accepted by You:</p>
          <div className="flex justify-center gap-x-1 w-screen overflow-x-auto">
            {filteredSchedules
              .filter((item) => item.intervieweeEmail === userInfo.email)
              .map((schedule) => (
                <InterviewInfo key={schedule.uid} schedule={schedule} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { UserProfile };
