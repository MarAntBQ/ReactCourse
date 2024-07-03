import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const course = {
    id: 1,
    title: 'React in Action',
    content: 'Learn to build React Applications with this course.',
    author: 'MarAnBQ'
  }

  return (
    <div className="App">
      <PruebaContext.Provider value={course}>
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
