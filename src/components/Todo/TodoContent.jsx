import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json';

export function TodoContent() {
  // Logic
  const [todos, setTodos] = useState(mockData);
  // ADD TO DO
  const handleAddTodo = (newTask) => {
    let newTodoObj = {
      id: uuidv4(),
      task: newTask,
      status: false,
      due_date: '',
    };

    // const newTodos = [newTodoObj, ...todos];
    // setTodos(newTodos);

    setTodos((currentState) => [newTodoObj, ...currentState]);
  };

  // UPDATE TO DO
  const handleEditTodo = (todoId, newTask) => {
    console.log(todoId, newTask);

    const foundedIndex = todos.findIndex((todoObj) => todoObj.id === todoId);
    if (foundedIndex === -1) return;
    const newTodos = [...todos];
    // let oldTodoObj = newTodos[foundedIndex]
    // oldTodoObj.task = newTask;
    newTodos[foundedIndex] = {...newTodos[foundedIndex], task: newTask}
    setTodos(newTodos)

  };

  return (
    <main className="content">
      {/* Todo-Header */}
      <TodoHeader />

      {/* Add Todo */}
      <AddTodo onAddTodo={handleAddTodo} />

      {/* TodoList */}
      <TodoLists todos={todos} onEditTodo={handleEditTodo} />
    </main>
  );
}
