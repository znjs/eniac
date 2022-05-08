import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth, useInterview, useInterviewModal } from "../../context";
import { db } from "../../firebase/firebase.config";
import { InterviewScheduleModal } from "./InterviewScheduleModal";
import { OpenSlotCard } from "./OpenSlotCard";
import date from "date-and-time";
function LandingPage() {
  const { setInterviewModal } = useInterviewModal();
  const { state, dispatch } = useInterview();
  const { userInfo } = useAuth();
  const [filteredSchedules, setFilteredSchedules] = useState(state.schedules);
  useEffect(() => {
    (async () => {
      try {
        const res = await getDocs(collection(db, "scheduleBoard"));
        console.log(res);
        const q = query(
          collection(db, "scheduleBoard"),
          where("interviewee", "==", ""),
        );

        const querySnapshot = await getDocs(q);
        const newSchedules = [];
        querySnapshot.forEach((doc) => newSchedules.push(doc.data()));
        dispatch({
          type: "SET_ALL_SCHEDULES",
          payload: {
            schedules: newSchedules,
          },
        });
      } catch (err) {
        console.error(err);
      }
    })();
    console.log(state.schedules);
  }, []);

  // consol
  useEffect(() => {
    setFilteredSchedules(
      state.schedules.filter(
        (ele) =>
          ele.email !== userInfo.email && new Date(ele.date) > new Date(),
      ),
    );
  }, [state.schedules]);

  return (
    <>
      <div className="flex flex-col items-center bg-background min-h-screen text-txt-color">
        <button
          className="bg-primary my-2 p-2 font-bold rounded"
          onClick={() => setInterviewModal(true)}
        >
          Create Slot
        </button>

        {filteredSchedules.length > 0 ? (
          <>
            <h3 className="text-lg font-bold">Open Slots</h3>
            {filteredSchedules.map((schedule) => (
              <OpenSlotCard key={schedule.uid} schedule={schedule} />
            ))}
          </>
        ) : (
          <h3 className="text-lg font-bold">No Open Slots</h3>
        )}
      </div>
      <InterviewScheduleModal />
    </>
  );
}

export { LandingPage };
