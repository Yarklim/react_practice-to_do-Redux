import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import s from './TasksList.module.scss';

const TasksList = () => {
  return (
    <div>
      <ul>
        <li className={s.listItem}>
          <div className={s.itemText}>
            <input type="checkbox" />
            <p>Learn HTML</p>
          </div>
          <CloseIcon style={{ fill: 'red' }} />
        </li>
      </ul>
      <hr style={{ marginTop: 20, marginBottom: 20 }} />
    </div>
  );
};

export default TasksList;
