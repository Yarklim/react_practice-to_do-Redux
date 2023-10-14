import { statusFilters } from './constants';
import { combineReducers } from 'redux';

const tasksInitialState = [
  { id: 1, text: 'Learn HTML and CSS', completed: true },
  { id: 2, text: 'Learn JavaScript', completed: true },
  { id: 3, text: 'Learn React', completed: true },
  { id: 4, text: 'Learn Node JS', completed: true },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];
    case 'tasks/deleteTask':
      return state.filter((task) => task.id !== action.payload);
    case 'tasks/toggleCompleted':
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
