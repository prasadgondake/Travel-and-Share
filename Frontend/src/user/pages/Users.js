import React from 'react';
import UsersList from '../components/UsersList';

const Users=()=>{
    const USERS=[
      {
        id: 'u1' , 
        name:'Prasad Gondake', 
        image: 'https://www.amateurphotographer.co.uk/wp-content/uploads/2020/09/MAIN-Moonrise-over-Blea-Tarn-and-the-Langdales-scaled.jpg',
        places: 3  
      }
   ];
    return <UsersList items={USERS}/>;
};

export default Users;
