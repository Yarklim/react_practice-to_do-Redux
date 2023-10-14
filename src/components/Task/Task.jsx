import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import s from './Task.module.scss';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task?.id));

  return (
    <div className={s.taskWrapper}>
      <div className={s.taskText}>
        <input type="checkbox" />
        <p>{task?.text}</p>
      </div>
      <CloseIcon
        style={{ fill: 'red', cursor: 'pointer' }}
        onClick={handleDelete}
      />
    </div>
  );
};

export default Task;
