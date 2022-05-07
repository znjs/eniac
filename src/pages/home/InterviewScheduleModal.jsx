import React, { useState, useEffect } from "react";
import { useAuth, useInterview, useInterviewModal } from "../../context";
import date from "date-and-time";
import "./modal.css";
import "./calendar.css";
import { addAndUpdateSchedule } from "../../services";

function InterviewScheduleModal() {
  const [input, setInput] = useState({ date: "", topics: "" });
  const { interviewModal, setInterviewModal } = useInterviewModal();
  const [now, setNow] = useState(new Date());
  const { userInfo } = useAuth();
  const { dispatch } = useInterview();
  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 60000);
  }, []);
  const scheduleInterview = () => {
    if (input.topics.trim().length === 0 || input.date.trim().length === 0)
      console.error("Please fill all fields");
    else {
      dispatch({
        type: "ADD_SCHEDULE",
        payload: {
          schedule: {
            topics: input.topics,
            email: userInfo.email,
            interviewDate: input.date.replace("T", " "),
          },
        },
      });
      setInterviewModal(false);
      addAndUpdateSchedule(userInfo, input.date, "", input.topics);
    }
  };
  return (
    <div
      className={`modal-container justify-center items-center fixed ${
        interviewModal ? "flex" : "hidden"
      }`}
      onClick={() => setInterviewModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-container-main flex flex-col justify-center relative text-center gap-4 p-4 rounded-xl w-96  bg-nav-background pt-12"
      >
        <i
          className="text-2xl fa-solid absolute fa-angle-left cursor-pointer top-4"
          style={{ color: "#FFF" }}
          onClick={() => setInterviewModal(false)}
        ></i>

        <div className="flex items-center text-txt-color justify-around">
          <label>Enter Slot</label>
          <input
            type="datetime-local"
            min={date.format(now, "YYYY-MM-DDTHH:MM")}
            className="bg-gray-800 p-2 rounded-lg text-txt-color outline-none"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
        <div className="flex items-start text-txt-color justify-around">
          <label>Enter Topics</label>
          <textarea
            className="bg-gray-800 resize-none outline-none rounded-lg px-4 py-2 text-gray-50 placeholder:text-gray-300"
            value={input.topics}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, topics: e.target.value }))
            }
          />
        </div>
        <button
          className="px-4 py-1 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400 max-w-xs mx-auto"
          onClick={scheduleInterview}
        >
          Schedule
        </button>
      </div>
    </div>
  );
}

export { InterviewScheduleModal };
