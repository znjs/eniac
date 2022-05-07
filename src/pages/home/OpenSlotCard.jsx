import React from 'react';

function OpenSlotCard() {
	return (
		<div className='flex flex-col my-4 bg-secondary-background p-4 rounded border-2 border-nav-background  w-96 sm:w-screens justify-center items-center'>
			<div className='flex flex-col w-full gap-2'>
				<div className='flex justify-between w-100%'>
					<span>John Doe</span>
					<button className='bg-primary p-1 rounded'>Schedule</button>
				</div>
				<div className='flex flex-col justify-center gap-2'>
					<p>Time - 11 May 2022, Time : 5:30pm</p>
					<p>Topics - JS, HTML, CSS</p>
				</div>
			</div>
		</div>
	);
}

export { OpenSlotCard };
