import { createContext, useContext, useReducer, useState } from "react";
import { initialState, reducer } from "../../reducer";

const InterviewContext = createContext();

const InterviewContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <InterviewContext.Provider value={{ state, dispatch, initialState }}>
      {children}
    </InterviewContext.Provider>
  );
};

const useInterview = () => useContext(InterviewContext);

export { useInterview, InterviewContextProvider };
