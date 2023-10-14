import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/actions';
import { statusFilters } from '../../redux/constants';
import s from './TasksFilter.module.scss';

const TasksFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={s.filterWrapper}>
      <h2>Filter by status</h2>
      <div className={s.buttonWrapper}>
        <button
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </button>
        <button
          selected={filter === statusFilters.active}
          onClick={() => handleFilterChange(statusFilters.active)}
        >
          Active
        </button>
        <button
          selected={filter === statusFilters.completed}
          onClick={() => handleFilterChange(statusFilters.completed)}
        >
          Complited
        </button>
      </div>
    </div>
  );
};

export default TasksFilter;
