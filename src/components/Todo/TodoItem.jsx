import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { getFormattedDate } from '../../utils/DateUtils';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';


export function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
  // Check === DONE === todo.status == true
  // const [isCheck, setIsCheck] = useState(todo.status);
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleCheck = () => {
    // setIsCheck(!isCheck);
    onEditTodo(todo.id, {status: !todo.status})
  };

  const handleOpenEditMode = () => {
    setIsEdit(true);
  };

  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id)
  };


  let checkBoxStyle = todo.status
    ? styles.checkbox__icon__done
    : styles.checkbox__icon;
  let taskStyle = todo.status ? styles.done : '';

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
          <p>{getFormattedDate(todo.due_date)}</p>

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
