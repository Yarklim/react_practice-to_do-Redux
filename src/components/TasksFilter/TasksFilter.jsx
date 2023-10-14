import React from 'react';
import s from './TasksFilter.module.scss';

const TasksFilter = () => {
  return (
    <div className={s.filterWrapper}>
      <h2>Filter by status</h2>
      <div className={s.buttonWrapper}>
        <button>All</button>
        <button>Active</button>
        <button>Complited</button>
      </div>
    </div>
  );
};

export default TasksFilter;
