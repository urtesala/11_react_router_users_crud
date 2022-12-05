import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import './reset.css';

function App() {
  return (
    <div className='App container'>
      <Nav />
      <Switch />
      <Route path={'/home'}>
        <HomePage />
      </Route>
      <Route path={'/users'}>
        <UsersPage />
      </Route>
    </div>
  );
}

export default App;
