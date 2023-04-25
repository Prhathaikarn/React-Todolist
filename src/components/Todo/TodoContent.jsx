import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';

export function TodoContent() {

  return (
    <main className="content">
      {/* Todo-Header */}
      <TodoHeader />

      {/* Add Todo */}
      <AddTodo />

      {/* TodoList */}
      <TodoLists />
      
    </main>
  );
}
