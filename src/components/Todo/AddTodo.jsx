import styles from './AddTodo.module.scss';
import { useState } from 'react';
import { TodoForm } from './TodoForm';

export function AddTodo() {
  const [isAddMode, setIsAddMode] = useState(false);

  const handleClickAddTask = () => {
    setIsAddMode(true);
  };

  return (
    <>
      {!isAddMode ? (
        <div className={styles.add__todo} onClick={handleClickAddTask}>
          <span>+</span>
          <h3>Add task</h3>
        </div>
      ) : (
        <TodoForm onSetIsShowForm={setIsAddMode} submitText="Add task" />
      )}
    </>
  );
}
