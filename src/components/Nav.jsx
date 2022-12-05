import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link to='/'>Home Page</Link>
      <Link to='/users'>Users</Link>
    </nav>
  );
}
export default Nav;
