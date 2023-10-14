import React from 'react';

import Task from '../Task/Task';
import s from './TasksList.module.scss';

const TasksList = () => {
  return (
    <div>
      <ul>
        <li>
          <Task />
          <hr style={{ marginTop: 20, marginBottom: 20 }} />
        </li>
      </ul>
    </div>
  );
};

export default TasksList;
