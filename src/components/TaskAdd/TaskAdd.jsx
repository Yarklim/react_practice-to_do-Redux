import React from 'react';
import s from './TaskAdd.module.scss';

const TaskAdd = () => {
  return (
    <div>
      <form className={s.formWrapper}>
        <input
          type="text"
          placeholder="Enter task text..."
          className={s.inputAdd}
        />
        <button>Add task</button>
      </form>
    </div>
  );
};

export default TaskAdd;
