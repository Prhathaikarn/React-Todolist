import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
// import mockData from '../../data/todos.json';

export function TodoContent({ todos, setTodos, setFilterList }) {
  // # Logic

  // UPDATE-TODO
  // updateValue = {task: "Newtask", status : false}
  const handleEditTodo = (todoId, updateObj) => {

    const foundedIndex = todos.findIndex((todoObj) => todoObj.id === todoId);
    // Not founded
    if (foundedIndex === -1) return;
    // Founded
    const newTodos = [...todos];

    newTodos[foundedIndex] = { ...newTodos[foundedIndex], ...updateObj }; // ...{task: "Newtask", status : false}
    newTodos[foundedIndex] = Object.assign(
      {},
      newTodos[foundedIndex],
      updateObj
    );

    setTodos(newTodos);
    setFilterList(newTodos)
  };

  const handleDelete = (todoId) => {
    // Logic : Manipulate Array

    // #1
    // const foundedIndex = todos.findIndex(todoObj => todoObj.id === todoId)
    // if(foundedIndex == -1) return;
    // const newTodos = [...todos]
    // newTodos.splice(foundedIndex,1)
    // setTodos(newTodos)

    // #2
    setTodos((curr) => curr.filter((todoObj) => todoObj.id !== todoId));
  };

  // # UI
  return (
    <main className="content">
      <TodoHeader title="Inbox" />
      <AddTodo setTodos={setTodos} setFilterList={setFilterList} />
      <TodoLists
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDelete}
      />
    </main>
  );
}
