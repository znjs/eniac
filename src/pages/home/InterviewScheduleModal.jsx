import React, { useState } from 'react';
import { useInterviewModal } from '../../context';
import './modal.css';
import './calendar.css';

function InterviewScheduleModal() {
	const [input, setInput] = useState('');
	const { interviewModal, setInterviewModal } = useInterviewModal();
	const [date, setDate] = useState();

	return (
		<div
			className={`modal-container justify-center items-center fixed ${
				interviewModal ? 'flex' : 'hidden'
			}`}
		>
			<div className='modal-container-main flex flex-col justify-center relative text-center gap-4 p-4 rounded-xl w-1/4 md:w-4/5 bg-nav-background'>
				<i
					className='text-2xl fa-solid fa-angle-left cursor-pointer left-6 top-0 justify-self-start text-left'
					style={{ color: '#FFF' }}
					onClick={() => setInterviewModal(false)}
				/>

				<div className='flex flex-row text-txt-color justify-around'>
					<label>Enter Slot</label>
					<input
						type='datetime-local'
						className='bg-nav-background text-txt-color'
					/>
				</div>
				<div className='flex flex-row text-txt-color justify-around'>
					<label>Enter Topics</label>
					<textarea className='bg-gray-800 resize-none outline-none rounded px-4 py-2 text-gray-50 placeholder:text-gray-300' />
				</div>
				<button className='px-4 py-1 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400 max-w-xs mx-auto'>
					Schedule
				</button>
			</div>
		</div>
	);
}

export { InterviewScheduleModal };
