import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useInterview, useInterviewModal } from "../../context";
import { db } from "../../firebase/firebase.config";
import { InterviewScheduleModal } from "./InterviewScheduleModal";
import { OpenSlotCard } from "./OpenSlotCard";

function LandingPage() {
  const { setInterviewModal } = useInterviewModal();
  const { state, dispatch } = useInterview();

  useEffect(() => {
    (async () => {
      try {
        const res = await getDocs(collection(db, "scheduleBoard"));
        console.log(res);
        dispatch({
          type: "SET_ALL_SCHEDULES",
          payload: {
            schedules: res.docs.map((item) => ({ ...item.data() })),
          },
        });
      } catch (err) {
        console.log(err);
      }
    })();
    console.log(state.schedules);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center bg-background h-screen text-txt-color">
        <button
          className="bg-primary my-2 p-2 font-bold rounded"
          onClick={() => setInterviewModal(true)}
        >
          Schedule
        </button>

        <h3 className="text-lg font-bold">Open Slots</h3>
        {state.schedules &&
          state.schedules.map((schedule) => (
            <OpenSlotCard schedule={schedule} key={schedule.uid} />
          ))}
      </div>
      <InterviewScheduleModal />
    </>
  );
}

export { LandingPage };
