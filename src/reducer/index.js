export const initialState = {
  schedules: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_SCHEDULES":
      console.log(action.payload);
      return {
        ...state,
        schedules: action.payload.schedules,
      };
    case "ADD_SCHEDULE":
      return {
        ...state,
        schedules: [...state.schedules, action.payload.schedule],
      };
    case "BOOK_SCHEDULE":
      const newSchedules = state.schedules.filter(
        (schedule) => schedule.uid !== action.payload.schedule.uid,
      );
      return {
        ...state,
        schedules: newSchedules,
      };
    default:
      return state;
  }
};
