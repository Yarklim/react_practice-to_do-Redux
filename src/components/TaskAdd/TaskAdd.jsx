import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';
import s from './TaskAdd.module.scss';

const TaskAdd = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <div>
      <form className={s.formWrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Enter task text..."
          className={s.inputAdd}
        />
        <button>Add task</button>
      </form>
    </div>
  );
};

export default TaskAdd;
