import React from "react";
import { useAuth, useInterview } from "../../context";
import { addAndUpdateSchedule } from "../../services";
import date from "date-and-time";

function OpenSlotCard({ schedule }) {
  const { userInfo } = useAuth();
  const { dispatch, state } = useInterview();
  // let d = ;
  const joinHandler = async () => {
    await addAndUpdateSchedule(
      userInfo,
      schedule.interviewDate,
      userInfo.name,
      schedule.topics,
      schedule.uid,
    );
    dispatch({ type: "BOOK_SCHEDULE", payload: { schedule } });
  };
  // console.log(schedule.date.split("T")[0]);
  return (
    <>
      {schedule && (
        <div className="flex flex-col my-4 bg-secondary-background p-4 rounded border-2 border-nav-background  w-96 sm:w-screens justify-center items-center">
          <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between w-100%">
              <span>{schedule.username}</span>
              <button className="bg-primary p-1 rounded" onClick={joinHandler}>
                Schedule
              </button>
            </div>
            <div className="flex flex-col justify-center gap-2">
              {new Date(schedule.date).toDateString()}
              <p>Topics - {schedule.topics}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { OpenSlotCard };
