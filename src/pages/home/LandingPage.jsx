import React from 'react';
import { useInterviewModal } from '../../context';
import { InterviewScheduleModal } from './InterviewScheduleModal';
import { OpenSlotCard } from './OpenSlotCard';

function LandingPage() {
	const { setInterviewModal } = useInterviewModal();
	return (
		<>
			<div className='flex flex-col items-center bg-background h-screen text-txt-color'>
				<button
					className='bg-primary my-2 p-2 font-bold rounded'
					onClick={() => setInterviewModal(true)}
				>
					Schedule
				</button>
				<h3 className='text-lg font-bold'>Open Slots</h3>
				<OpenSlotCard />
				<OpenSlotCard />
				<OpenSlotCard />
			</div>
			<InterviewScheduleModal />
		</>
	);
}

export { LandingPage };
