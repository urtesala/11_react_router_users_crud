import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import SingleUserPage from './pages/SingleUserPage';
import UsersPage from './pages/UsersPage';
import './reset.css';

function App() {
  return (
    <div className='App container'>
      <Nav />
      <Switch>
        {/* :userId dinaminis parametras kurio reiksme galime keisti useParams() : hook*/}
        <Route path={'/users/:userId'}>
          <SingleUserPage />
        </Route>
        <Route path={'/users'}>
          <UsersPage />
        </Route>
        <Route path={'/'} exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
