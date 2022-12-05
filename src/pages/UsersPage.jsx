import { useEffect, useState } from 'react';
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
      let url = 'https://dummyjson.com/users';
      url = '/api/users.json';

      const resp = await fetch(url);
      const dataInJs = await resp.json();

      //   const usersWithNameAndId = dataInJs.users.map((uOb) => ({
      //     id: uOb.id,
      //     firstName: uOb.firstName,
      //     lastName: uOb.lastName,
      //     age: uOb.age,
      //   }));
      //   console.log(JSON.stringify(usersWithNameAndId));

      //   console.log('dataInJs ===', dataInJs.users);
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
