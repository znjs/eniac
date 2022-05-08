import React, { useEffect } from "react";
import { useAuth, useConfirmModal, useInterview } from "../../context";
import { addAndUpdateSchedule } from "../../services";
import { toast } from "react-toastify";

function OpenSlotCard({ schedule }) {
  const { setConfirmModal, setIsConfirm, isConfirm } = useConfirmModal();
  const { userInfo } = useAuth();
  const { dispatch } = useInterview();
  useEffect(() => {
    if (isConfirm) {
      (async () => {
        await addAndUpdateSchedule(
          userInfo,
          schedule.interviewDate,
          userInfo.name,
          schedule.topics,
          schedule.uid,
          userInfo.email,
        );
        dispatch({ type: "BOOK_SCHEDULE", payload: { schedule } });
        setIsConfirm(false);
        setConfirmModal(false);
        toast.success(`Your interview is now Scheduled!`);
      })();
    }
  }, [isConfirm]);
  return (
    <>
      {schedule && (
        <div className="flex flex-col my-4 bg-secondary-background p-4 rounded border-2 border-nav-background  w-96 sm:w-screens justify-center items-center">
          <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between w-100%">
              <span>Name : {schedule.username}</span>
              <button
                className="bg-primary p-1 rounded"
                onClick={() => {
                  setConfirmModal(true);
                }}
              >
                Schedule
              </button>
            </div>
            <div className="flex flex-col justify-center gap-2">
              {`${new Date(schedule.date).toDateString()}, ${new Date(
                schedule.date,
              ).toLocaleTimeString()}`}
              <p>Topics - {schedule.topics}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { OpenSlotCard };
