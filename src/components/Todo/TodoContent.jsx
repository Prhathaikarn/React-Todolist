import styles from './TodoContent.module.scss';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';

export function TodoContent() {
  const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);
  const now = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  console.log(now.toLocaleDateString('en-US', options));

  return (
    <main className="content">
      {/* Todo-Header */}
      <div className={styles.header}>
        <h1>Inbox</h1>
        <p>{now.toLocaleDateString('en-US', options)}</p>
      </div>

      {/* Add Todo */}
      <div className={styles.add__todo}>
        <span>+</span>
        <h3>Add task</h3>
      </div>

      {/* Todo form */}
      <form className={styles.todo__form__container}>
        <input className={styles.todo__form__input} placeholder="Task Name" />
        <div className={styles.todo__form__footer}>
          <p className={styles.todo__error}>Title is required</p>
          <div className={styles.todo__form__buttons}>
            <button>Cancel</button>
            <button>Add Task</button>
          </div>
        </div>
      </form>

      {/* TodoList */}
      <ul>
        {mockTodo.map((el) => (
          <li className={styles.todo__item__container} key={el}>
            <div className={styles.checkbox__container}>
              <HiCheck className={styles.checkbox__icon} />
            </div>
            <p className={styles.done}>{`item-${el}`}</p>

            <div className={styles.edit__icon}>
              <HiPencil />
            </div>

            <div className={styles.delete__icon}>
              <HiTrash />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
