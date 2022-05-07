import React from "react";
import { useInterviewModal } from "../../context";
import { InterviewScheduleModal } from "./InterviewScheduleModal";
import { OpenSlotCard } from "./OpenSlotCard";
import "./landingPage.css";

function LandingPage() {
  const { setInterviewModal } = useInterviewModal();
  return (
    <div className="main-container overflow-auto">
      <div className="flex flex-col items-center bg-background text-txt-color ">
        <button
          className="bg-primary my-2 p-2 font-bold rounded"
          onClick={() => setInterviewModal(true)}
        >
          Schedule
        </button>
        <h3 className="text-lg font-bold italic">Open Slots</h3>
        <OpenSlotCard />
        <OpenSlotCard />
        <OpenSlotCard />
        <OpenSlotCard />
        <OpenSlotCard />
        <OpenSlotCard />
      </div>
      <InterviewScheduleModal />
    </div>
  );
}

export { LandingPage };
