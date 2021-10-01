import { FETCH_STUDENTS, UPDATE_STUDENT } from "./types";

export const initialState = {
  students: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_STUDENTS:
      console.log("reducer called", state);
      return {
        ...state,
        students: action.students,
      };
    case UPDATE_STUDENT:
      console.log("reducer called", state);
      return {
        ...state,
        students: state.students.map((student) => {
          if (student.id === action.student.id) {
            return action.student;
          } else {
            return student;
          }
        }),
      };
    default:
      return state;
  }
}
