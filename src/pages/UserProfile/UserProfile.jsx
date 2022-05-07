import React from "react";
import { InterviewInfo } from "../../components";
import "./userProfile.css";
function UserProfile() {
  return (
    <div className="w-screen userProfile flex justify-center items-center">
      <div className="userProfile flex justify-center items-center w-1/2">
        <div className="bg-gray-900 p-4 rounded-lg max-w-sm">
          <h1 className="text-2xl ">Profile</h1>
          <div className="flex py-1">
            <p className="pr-2 w-20">Name:</p>
            <p className="px-2 grow">Lindsay R. Schall</p>
          </div>
          <div className="flex py-1">
            <p className="pr-2 w-20">Email:</p>
            <p className="px-2 grow">LindsayR.Schall@gmail.com</p>
          </div>
          <div className="flex">
            <p className="pr-2 w-20">DiscordID:</p>
            <p className="px-2 grow">Lindy#5127</p>
          </div>
          <div className="flex">
            <p className="pr-2 w-20">LinkedIn:</p>
            <p className="px-2 grow ease-out duration-300 hover:scale-150 hover:translate-x-8 hover:bg-gray-800 hover:grow-0">
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href="https://linkedin.com"
                className="italic"
              >
                Lindsay
              </a>
            </p>
          </div>
          <div className="flex">
            <p className="pr-2 w-20">Github:</p>
            <p className="px-2 grow ease-out duration-300 hover:scale-150 hover:translate-x-8 hover:bg-gray-800 hover:grow-0">
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href="https://github.com"
                className="italic"
              >
                Lindy
              </a>
            </p>
          </div>
          <div className="flex">
            <p className="pr-2 w-20">Portfolio:</p>
            <p className="px-2 grow ease-out duration-300 hover:scale-150 hover:translate-x-8 hover:bg-gray-800 hover:grow-0 ">
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href="https://netflix.com"
                className="italic"
              >
                my Portfolio
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="userProfile flex justify-center items-center w-1/2 overflow-auto">
        <div className="userProfile">
          <h1 className="text-center font-bold text-xl py-4">
            Interview Details
          </h1>
          <InterviewInfo />
          <InterviewInfo />
          <InterviewInfo />
          <InterviewInfo />
          <InterviewInfo />
          <InterviewInfo />
          <InterviewInfo />
        </div>
      </div>
    </div>
  );
}

export { UserProfile };
