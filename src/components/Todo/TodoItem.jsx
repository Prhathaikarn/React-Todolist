import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';

export function TodoItem({ todo, onEditTodo }) {
  // Check === DONE === todo.status == true
  const [isCheck, setIsCheck] = useState(todo.status);
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleCheck = () => {
    setIsCheck(!isCheck);
  };

  const handleOpenEditMode = () => {
    setIsEdit(true);
  };

  const handleDeleteTodo = () => {};

  let checkBoxStyle = isCheck
    ? styles.checkbox__icon__done
    : styles.checkbox__icon;
  let taskStyle = isCheck ? styles.done : '';

  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item__container}>
          <div
            className={styles.checkbox__container}
            onClick={handleToggleCheck}
          >
            <HiCheck className={checkBoxStyle} />
          </div>
          <p className={taskStyle}>{todo.task}</p>

          <div className={styles.edit__icon} onClick={handleOpenEditMode}>
            <HiPencil />
          </div>

          <div className={styles.delete__icon} onClick={handleDeleteTodo}>
            <HiTrash />
          </div>
        </li>
      ) : (
        <TodoForm
          submitText="Edit Task"
          onSetIsShowForm={setIsEdit}
          // oldTask={todo.task}
          onEditTodo={onEditTodo}
          todo={todo}
        />
      )}
    </>
  );
}
