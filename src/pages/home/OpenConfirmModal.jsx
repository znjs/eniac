import React from "react";
import { toast } from "react-toastify";
import { useAuth, useConfirmModal, useInterview } from "../../context";
import { addAndUpdateSchedule, sendMail } from "../../services";

function OpenConfirmModal({ schedule }) {
  const { confirmModal, setConfirmModal } = useConfirmModal();
  const { userInfo } = useAuth();
  const { dispatch } = useInterview();
  const confirmHandler = async () => {
    await addAndUpdateSchedule(
      userInfo,
      schedule.interviewDate,
      userInfo.name,
      schedule.topics,
      schedule.uid,
      userInfo.email,
    );
    // sendMail(
    //   schedule.username,
    //   schedule.date,
    //   schedule.interviewee,
    //   userInfo.email,
    // );
    // sendMail(
    //   schedule.interviewee,
    //   schedule.date,
    //   schedule.username,
    //   schedule.intervieweeEmail,
    // );
    dispatch({ type: "BOOK_SCHEDULE", payload: { schedule } });
    setConfirmModal(false);
    toast.success(`Your interview is now Scheduled!`);
  };
  return (
    <>
      <div
        className={`modal-container justify-center items-center fixed ${
          confirmModal ? "flex" : "hidden"
        }`}
        onClick={() => setConfirmModal(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal-container-main flex flex-col relative  gap-4 py-6 px-8 rounded-xl w-96  bg-nav-background "
        >
          <p className="text-lg border-l-4 border-red-600 rounded-lg px-2 py-1">
            Are you sure want schedule this interview ?
          </p>

          <div className="flex items-end">
            <button
              className="px-4 py-1 rounded-lg bg-red-500 text-white font-bold hover:bg-red-400 max-w-xs mx-auto"
              onClick={() => setConfirmModal(false)}
            >
              Later
            </button>
            <button
              className="px-4 py-1 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400 max-w-xs mx-auto"
              onClick={() => {
                confirmHandler();
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { OpenConfirmModal };
