import ReactDOM from 'react-dom/client';
import Yellow from './Yellow';
import './App.css';
import Blue from './Blue';
import Red from './Red';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div>
      <Yellow />
      <Red />
      <Blue />
    </div>
  );
}

root.render(<App />);

export default App;
