import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import SingleUserPage from './pages/SingleUserPage';
import UsersPage from './pages/UsersPage';
import './reset.css';

function App() {
  return (
    <div className='App container'>
      <Header />
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
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
