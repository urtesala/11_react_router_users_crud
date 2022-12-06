

import { Link } from 'react-router-dom';
import { Section, Title } from '../components/UI.styled';

function NotFound(props) {
  return (
    <Section>
      <Title>404 page not found</Title>
      <Link to='/'>Try home page ?</Link>
    </Section>
  );
}
export default NotFound;