import { useParams } from 'react-router-dom';
import { Section, Title } from '../components/UI.styled';

function SingleUserPage(props) {
  const allParams = useParams();
  //   console.log('allParams ===', allParams);
  //   console.log('userId ===', allParams.userId);
  const currentUserId = allParams.userId;

  //susikurti data state for current user currentUser
  //parsisiusti su fetch useEffect duomenis apie konkretu user
  // is gautu duomenu atvaizduojam daugiau info apie useri

  return (
    <Section>
      <Title>Single user page</Title>
      <p>I should load user with id: {currentUserId}</p>
    </Section>
  );
}
export default SingleUserPage;
