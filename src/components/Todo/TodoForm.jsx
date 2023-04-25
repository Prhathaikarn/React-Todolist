import styles from './TodoForm.module.scss';
import React, { useState } from 'react';

export function TodoForm({ onSetIsShowForm, submitText, todo, onEditTodo }) {
  const [task, setTask] = useState(todo.task || '');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Submit');

    if (task.trim() === '') {
      setIsError(true);
      return;
    } else {
      onEditTodo(todo.id,task);
    }
    onSetIsShowForm(false);
  };

  const handleClickCancel = (e) => {
    // console.log('Cancel');
    // onSetIsAddMode?.(false);
    // onSetIsEditMode?.(false);
    onSetIsShowForm?.(false);
  };

  const handleChangeInput = (e) => {
    // console.log(e.target.value);
    setIsError(false);
    setTask(e.target.value);
  };

  // const handleToggle  =() => setIsError(!isError)

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={task}
        onChange={handleChangeInput}
      />
      <div className={styles.todo__form__footer}>
        {isError && <p className={styles.todo__error}>Task name is required</p>}
        <div className={styles.todo__form__buttons}>
          <button type="button" onClick={handleClickCancel}>
            Cancel
          </button>
          <button type="submit">{submitText}</button>
        </div>
      </div>
    </form>
  );
}
