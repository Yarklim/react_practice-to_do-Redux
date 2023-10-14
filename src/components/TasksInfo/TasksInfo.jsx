import React from 'react';
import { useSelector } from 'react-redux';
import s from './TasksInfo.module.scss';

const TasksInfo = () => {
  //   const activeCount = useSelector(0);
  //   const complitedCount = useSelector(0);

  return (
    <div>
      <h2>Tasks</h2>
      <p>`Active: ${0}`</p>
      <p>`Completed: ${0}`</p>
    </div>
  );
};

export default TasksInfo;
