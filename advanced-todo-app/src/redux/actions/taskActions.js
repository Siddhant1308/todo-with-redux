// Action Types
export const FETCH_CURRENT_DATE = 'FETCH_CURRENT_DATE';
export const SET_CURRENT_DATE = 'SET_CURRENT_DATE';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETE_TASK = 'TOGGLE_COMPLETE_TASK';
export const TOGGLE_IMPORTANT_TASK = 'TOGGLE_IMPORTANT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action Creators
export const fetchCurrentDate = () => ({
  type: FETCH_CURRENT_DATE,
});

export const setCurrentDate = (date) => ({
  type: SET_CURRENT_DATE,
  payload: date,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleCompleteTask = (taskId) => ({
  type: TOGGLE_COMPLETE_TASK,
  payload: taskId,
});

export const toggleImportantTask = (taskId) => ({
  type: TOGGLE_IMPORTANT_TASK,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
