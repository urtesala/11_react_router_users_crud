import styled from 'styled-components';
import { Section } from '../components/UI.styled';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 0.4em;
`;

function HomePage(props) {
  return (
    <Section>
      <Title>Home Page</Title>
      <p>welcome</p>
    </Section>
  );
}
export default HomePage;
