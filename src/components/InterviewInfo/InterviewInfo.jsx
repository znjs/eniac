import React from "react";

function InterviewInfo() {
  return (
    <div className="bg-gray-900 p-4 my-3 rounded-lg">
      <div className="flex py-1">
        <p className="pr-2 w-20">Name:</p>
        <p className="px-2 grow">Sam</p>
      </div>
      <div className="flex py-1">
        <p className="pr-2 w-20">Email:</p>
        <p className="px-2 grow">Sam.sam@gmail.com</p>
      </div>
      <div className="flex py-1">
        <p className="pr-2 w-20">Time:</p>
        <p className="px-2 grow">22-05-2022 : 15:45</p>
      </div>
    </div>
  );
}

export { InterviewInfo };
