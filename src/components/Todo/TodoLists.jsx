import { TodoItem } from './TodoItem';

export function TodoLists({ todos, onEditTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todoObj) => (
        <TodoItem key={todoObj.id} todo={todoObj} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
}
