import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth, useInterview, useInterviewModal } from "../../context";
import { db } from "../../firebase/firebase.config";
import { InterviewScheduleModal } from "./InterviewScheduleModal";
import { OpenSlotCard } from "./OpenSlotCard";
import date from "date-and-time";
import "./landingPage.css";
import { OpenConfirmModal } from "./OpenConfirmModal";

function LandingPage() {
  const { setInterviewModal } = useInterviewModal();
  const { state } = useInterview();
  const { userInfo } = useAuth();
  const [filteredSchedules, setFilteredSchedules] = useState([]);

  useEffect(() => {
    setFilteredSchedules(
      state.schedules.filter(
        (ele) =>
          ele?.email !== userInfo?.email &&
          new Date(ele.date) > new Date() &&
          ele.intervieweeEmail === "",
      ),
    );
  }, [state.schedules]);

  return (
    <div className="main-container">
      <div className="flex flex-col items-center bg-background h-screen text-txt-color ">
        <div>
          <button
            className="bg-primary my-8 p-2 font-bold rounded"
            onClick={() => setInterviewModal(true)}
          >
            Create Slot
          </button>
        </div>

        {filteredSchedules.length > 0 ? (
          <>
            <h3 className="text-3xl font-bold flex items-center mt-8 mb-4">
              Available Slots for Interview
            </h3>
            {filteredSchedules.map((schedule) => (
              <OpenSlotCard key={schedule.uid} schedule={schedule} />
            ))}
          </>
        ) : (
          <h3 className="text-3xl font-bold flex items-center mt-8">
            Sorry , Slots not available at the moment !
          </h3>
        )}
      </div>
      <OpenConfirmModal />
      <InterviewScheduleModal />
    </div>
  );
}

export { LandingPage };
