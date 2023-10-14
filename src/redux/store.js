import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { statusFilters } from './constants';

const initialState = {
  tasks: [
    { id: 1, text: 'Learn HTML and CSS', completed: true },
    { id: 2, text: 'Learn JavaScript', completed: true },
    { id: 3, text: 'Learn React', completed: true },
    { id: 4, text: 'Learn Node JS', completed: true },
  ],
  filters: {
    status: statusFilters.all,
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
