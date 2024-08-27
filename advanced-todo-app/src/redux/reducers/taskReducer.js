import {
    SET_CURRENT_DATE,
    ADD_TASK,
    TOGGLE_COMPLETE_TASK,
    TOGGLE_IMPORTANT_TASK,
    DELETE_TASK,
  } from '../actions/taskActions';
  
  const initialState = {
    currentDate: '',
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_DATE:
        return {
          ...state,
          currentDate: action.payload,
        };
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case TOGGLE_COMPLETE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, completed: !task.completed }
              : task
          ),
        };
      case TOGGLE_IMPORTANT_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, important: !task.important }
              : task
          ),
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  