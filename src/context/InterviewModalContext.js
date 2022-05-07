import { createContext, useContext, useState } from 'react';

const InterviewModalContext = createContext();

const InterViewModalProvider = ({ children }) => {
	const [interviewModal, setInterviewModal] = useState(false);
	return (
		<InterviewModalContext.Provider
			value={{ interviewModal, setInterviewModal }}
		>
			{children}
		</InterviewModalContext.Provider>
	);
};

const useInterviewModal = () => useContext(InterviewModalContext);

export { useInterviewModal, InterViewModalProvider };
