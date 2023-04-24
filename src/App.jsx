import './App.scss';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="container">
      {/* header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <main className="content">Content</main>
    </div>
  );
}

export default App;
