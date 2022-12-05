import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../UI.styled';

const HeaderEl = styled.header`
  background-color: #333;
  color: snow;
`;
// prideti esamam Cotainer papildomu savybiu css
const ThisContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav``;

const LinkTo = styled(Link)`
  display: inline-block;
  padding: 0.4em 1em;
  color: inherit;
  font-size: 1.1rem;
`;

const Logo = styled(Link)`
  padding: 0.4em 1em;
  color: inherit;
  font-size: 1.5rem;
  padding-left: 0;
`;

function Header(props) {
  return (
    <HeaderEl>
      <ThisContainer>
        <Logo>ReactRouter</Logo>
        <Nav>
          <LinkTo to='/'>Home</LinkTo>
          <LinkTo to='/users'>Users</LinkTo>
        </Nav>
      </ThisContainer>
    </HeaderEl>
  );
}
export default Header;
