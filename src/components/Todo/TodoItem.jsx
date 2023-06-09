import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { TodoForm } from './TodoForm';
import { getFormattedDate } from '../../utils/DateUtils';
import PropTypes from 'prop-types';
import axios from 'axios';

TodoItem.propTypes = {
  onAddTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  todo: PropTypes.oneOfType([PropTypes.object]),
};

//todoSchema :  {id:1, task: asdadsasdas, status : false, due_date : 2002-04-20}
export function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
  const [isEdit, setIsEdit] = useState(false)
  const updateTodoStatus = async () => {
    try {
      let updateTodo = { ...todo, status: !todo.status };
      let response = await axios.put(
        `http://localhost:8080/todos/${todo.id}`,
        updateTodo
      );
      let updatedTodo = response.data.todo;
      onEditTodo(updatedTodo.id, { status: updatedTodo.status });
    } catch (error) {
      console.log(error.response.status);
    }

    // onEditTodo(todo.id, { status: !todo.status }); // handleEditTodo(todo.id, {status:!todo.status})
  };

  const handleOpenEditMode = () => {
    setIsEdit(true);
    console.log(todo.id);
  };

  const handleDeleteTodo = () => {
    console.log('delete');
    onDeleteTodo(todo.id);
    // setTodos(currentTodos => currentTodos.filter(todoObj=> todoObj.id !== todo.id))
  };

  let checkboxStyle = todo.status
    ? styles.checkbox__icon__done
    : styles.checkbox__icon;
  let taskStyle = todo.status ? styles.done : '';
  // #2 : render
  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item__container}>
          <div
            className={styles.checkbox__container}
            onClick={updateTodoStatus}
          >
            <HiCheck className={checkboxStyle} />
          </div>

          <p className={taskStyle}>{todo.task}</p>
          <span className={styles.date__text}>
            {getFormattedDate(todo.date)}
          </span>

          <div className={styles.edit__icon} onClick={handleOpenEditMode}>
            <HiPencil />
          </div>

          <div className={styles.delete__icon} onClick={handleDeleteTodo}>
            <HiTrash />
          </div>

          {/* <div className={styles.delete__icon} onClick={()=> onDeleteTodo(todo.id)}>
                        <HiTrash />
                    </div> */}
        </li>
      ) : (
        <TodoForm
          submitText="Edit task"
          onSetIsShowForm={setIsEdit}
          // oldTask={todo.task}
          onEditTodo={onEditTodo}
          todo={todo}
        />
      )}
    </>
  );
}
