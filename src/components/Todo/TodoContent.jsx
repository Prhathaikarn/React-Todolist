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

    // สร้าง state ใหม่
    // update state โดย new state
    // const newTodos = [newTodoObj, ...todos];
    // setTodos(newTodos);

    // update state โดย callback
    setTodos(currentState => [newTodoObj, ...currentState]);
  };

  // UPDATE TO DO
  const handleEditTodo = (todoId, updateObj) => {
    // console.log(todoId, newTask);

    const foundedIndex = todos.findIndex(todoObj => todoObj.id === todoId);
    if (foundedIndex === -1) return;
    const newTodos = [...todos];
    // let oldTodoObj = newTodos[foundedIndex]
    // oldTodoObj.task = newTask;
    newTodos[foundedIndex] = { ...newTodos[foundedIndex], updateObj };
    setTodos(newTodos);
  };

  const handleDelete = (todoId) => {
    // #1
    // const foundedIndex = todos.findIndex((todoObj) => todoObj.id === todoId);
    // if (foundedIndex === -1) return;
    // const newTodos = [...todos];
    // newTodos.splice(foundedIndex, 1);
    // setTodos(newTodos);

    // #2
    setTodos(curr => curr.filter((todoObj) => todoObj.id !== todoId))


  };

  return (
    <main className="content">
      {/* Todo-Header */}
      <TodoHeader title='Today'/>

      {/* Add Todo */}
      <AddTodo onAddTodo={handleAddTodo} />

      {/* TodoList */}
      <TodoLists
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDelete}
      />
    </main>
  );
}
