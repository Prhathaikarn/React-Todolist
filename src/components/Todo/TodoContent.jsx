import styles from './TodoContent.module.scss';

export function TodoContent() {
  const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);
  const now = new Date ()
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  console.log(now.toLocaleDateString('en-US',options))

  return (
    <main className="content">
      <div className={styles.header}>
        <h2>Inbox</h2>
        <p>{now.toLocaleDateString('en-US',options)}</p>
      </div>
      <div>Add todo</div>
      <ul>
        {mockTodo.map((el) => (
          <li key={el}>{`item-${el}`}</li>
        ))}
      </ul>
    </main>
  );
}
