import React from 'react';
import s from './ToDo.module.scss';
import TasksInfo from '../../components/TasksInfo/TasksInfo';
import TasksFilter from '../../components/TasksFilter/TasksFilter';
import TaskAdd from '../../components/TaskAdd/TaskAdd';
import TasksList from '../../components/TasksList/TasksList';

const ToDo = () => {
  return (
    <div className={s.todoWrapper}>
      <div className={s.taskInfo}>
        <TasksInfo />
        <TasksFilter />
      </div>
      <TaskAdd />
      <TasksList />
    </div>
  );
};

export default ToDo;
