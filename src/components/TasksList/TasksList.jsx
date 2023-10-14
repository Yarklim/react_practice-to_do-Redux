import React from 'react';
import { statusFilters } from '../../redux/constants';
import { useSelector } from 'react-redux';
import { getStatusFilter, getTasks } from '../../redux/selectors';
import Task from '../Task/Task';
import s from './TasksList.module.scss';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TasksList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <div>
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
            <hr style={{ marginTop: 20, marginBottom: 20 }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
