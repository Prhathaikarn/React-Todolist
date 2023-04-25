import { TodoItem } from './TodoItem';

export function TodoLists({ todos, onEditTodo }) {
  return (
    <ul>
      {todos.map((todoObj) => (
        <TodoItem key={todoObj.id} todo={todoObj} onEditTodo={onEditTodo} />
      ))}
    </ul>
  );
}
