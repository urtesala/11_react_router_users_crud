import { Section } from '../components/UI.styled';

function UsersPage(props) {
  //susikurti usersArr state

  const [userArr, setUserArr] = useState([]);
  //useEffect supildyt state su duomenimis is dummyjson.com/users
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const url = 'https://dummyjson.com/users';
      const resp = await fetch(url);
      const dataInJs = await resp.json();
      console.log('dataInJs ===', dataInJs);
    } catch (error) {
      console.warn('klaida getData', error);
    }
  }

  return (
    <Section>
      <h1>Users Page</h1>
      <p>this is our users</p>
    </Section>
  );
}
export default UsersPage;
