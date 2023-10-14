import React from 'react';
import { useSelector } from 'react-redux';
import s from './TasksInfo.module.scss';
import { getTasks } from '../../redux/selectors';

const TasksInfo = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <h2>Tasks</h2>
      <p>`Active: {count.active}`</p>
      <p>`Completed: {count.completed}`</p>
    </div>
  );
};

export default TasksInfo;
