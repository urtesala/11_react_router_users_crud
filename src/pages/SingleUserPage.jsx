import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Section, Title } from '../components/UI.styled'
import { getData } from '../helper';

const dummyUser = {
  id: 2,
  firstName: 'Sheldon',
  lastName: 'Quigley',
  maidenName: 'Cole',
  age: 28,
  gender: 'male',
  email: 'hbingley1@plala.or.jp',
  phone: '+7 813 117 7139',
  username: 'hbingley1',
  password: 'CQutx25i8r',
  birthDate: '2003-08-02',
  image: 'https://robohash.org/doloremquesintcorrupti.png',
  bloodGroup: 'O+',
  height: 187,
  weight: 74,
  eyeColor: 'Brown',
  hair: {
    color: 'Blond',
    type: 'Curly',
  },
  domain: '51.la',
  ip: '253.240.20.181',
  address: {
    address: '6007 Applegate Lane',
    city: 'Louisville',
    coordinates: {
      lat: 38.1343013,
      lng: -85.6498512,
    },
    postalCode: '40219',
    state: 'KY',
  },
  macAddress: '13:F1:00:DA:A4:12',
  university: 'Stavropol State Technical University',
  bank: {
    cardExpire: '10/23',
    cardNumber: '5355920631952404',
    cardType: 'mastercard',
    currency: 'Ruble',
    iban: 'MD63 L6YC 8YH4 QVQB XHIK MTML',
  },
  company: {
    address: {
      address: '8821 West Myrtle Avenue',
      city: 'Glendale',
      coordinates: {
        lat: 33.5404296,
        lng: -112.2488391,
      },
      postalCode: '85305',
      state: 'AZ',
    },
    department: 'Services',
    name: 'Aufderhar-Cronin',
    title: 'Senior Cost Accountant',
  },
  ein: '52-5262907',
  ssn: '447-08-9217',
  userAgent:
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30',
};

const ThisSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #333;
`;

function SingleUserPage(props) {
  const allParams = useParams();
  const currentUserId = allParams.userId;

  // 1. susikurti data state for current user currentUser
  const [currentUser, setCurrentUser] = useState({});
  // 2. parsisiusti su feth useEffecte duomenis apie konkretu useri getData fn
  useEffect(() => {
    // 3. set state su gautais duomenimis
    getData(setCurrentUser, `https://dummyjson.com/users/${currentUserId}`);
  }, []);
  // 4. is state atvaizduojam daugiau info apie useri

  // 5. stilius kaip paveiklselyje
  const fullName = `${currentUser.firstName} ${currentUser.lastName}`;
  return (
    <ThisSection>
      <UserImage src={currentUser.image} alt={fullName} />
      <h1>{fullName}</h1>
      <p>email</p>
      <p>
        <i className='fa fa-phone-square' aria-hidden='true'></i> Tel
      </p>
      <p>
        He|She is 180cm height, weights 80 km. Has a green eyes and brown
        straight hair studies in university : uni
      </p>
      <p>I should load 🦸 with id: {currentUserId}</p>
    </ThisSection>
  );
}
export default SingleUserPage;
