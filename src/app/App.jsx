import './App.scss'; // Global
import { useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { TodoContent } from '../components/Todo/TodoContent';
import allTodomock from '../data/todos.json';
import { getSevenDayRange } from '../utils/DateUtils';

function App() {
  const [todos, setTodos] = useState(allTodomock);

  // Filter Todo

  const handleFilterLists = (index) => {
    const [nowStr, nextSevenStr] = getSevenDayRange();
    let filteredTodo = [...allTodomock];

    // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
    if (index === 1) {
      filteredTodo = allTodomock.filter(
        (todoObj) => todoObj.due_date === nowStr
      );
    } else if (index === 2) {
      filteredTodo = allTodomock.filter(
        (todoObj) =>
          todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenStr
      );
    }
    setTodos(filteredTodo);
  };

  const handleSearch = (searchText) => {
    const newTodo = allTodomock.filter((todoObj) =>
      todoObj.task.includes(searchText)
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
