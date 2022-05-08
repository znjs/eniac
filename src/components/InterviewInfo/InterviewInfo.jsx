import React from "react";

function InterviewInfo({ schedule }) {
  return (
    <div className="bg-gray-900 p-4 my-3 rounded-lg">
      {schedule.interviewee === "" ? (
        <>
          <div className="flex py-1">Not Yet Scheduled</div>
          <div className="flex py-1">
            <p className="pr-2 w-20">Time:</p>
            <p className="px-2 grow">
              {`${new Date(schedule.date).toDateString()}, ${new Date(
                schedule.date,
              ).toLocaleTimeString()}`}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex py-1">
            <p className="pr-2 w-20">Name:</p>
            <p className="px-2 grow">{schedule.intervieweeName}</p>
          </div>
          <div className="flex py-1">
            <p className="pr-2 w-20">Email:</p>
            <p className="px-2 grow">{schedule.intervieweeEmail}</p>
          </div>
          <div className="flex py-1">
            <p className="pr-2 w-20">Time:</p>
            <p className="px-2 grow">
              {new Date(schedule.date).toDateString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export { InterviewInfo };
