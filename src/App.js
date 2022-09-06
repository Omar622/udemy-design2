import { useRoutes } from 'react-router-dom';
import './App.css';
import Router from './routes';

function App() {
  const Routes = () => useRoutes(Router);
  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

