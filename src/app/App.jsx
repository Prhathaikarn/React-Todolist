import './App.scss'; // Global
import { useState } from 'react';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { TodoContent } from '../components/Todo/TodoContent';
import allTodoMock from '../data/todos.json';
import { getSevenDayRange } from '../utils/DateUtils';

function App() {
  const [todos, setTodos] = useState(allTodoMock);
  const [filterList, setFilterList] = useState(allTodoMock);

  // Filter Todo
  const handleFilterLists = (index) => {
    const [nowStr, nextSevenStr] = getSevenDayRange();
    // let returnValue = getSevenDayRange() // ["2023-04-26", "2023-05-03"]
    // const nowStr = returnValue[0]
    // const nextSevenStr = returnValue[1]

    let filteredTodo = [...allTodoMock];

    // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
    if (index === 1)
      filteredTodo = allTodoMock.filter(
        (todoObj) => todoObj.due_date === nowStr
      );
    else if (index === 2)
      filteredTodo = allTodoMock.filter(
        (todoObj) =>
          todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenStr
      );

    setTodos(filteredTodo);
    setFilterList(filteredTodo);
  };

  // Search Todo
  const handleSearch = (searchText) => {
    const newTodo = filterList.filter((todoObj) =>
      todoObj.task.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setTodos(newTodo);
  };

  return (
    <div className="container">
      <Header onSearchText={handleSearch} />
      <Sidebar onSelectTab={handleFilterLists} />
      <TodoContent todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
