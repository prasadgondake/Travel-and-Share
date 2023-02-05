import React from 'react';
// import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';
// const useContext=React.useContext;

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famour sky scrapers in the world',
        imageUrl: 'https://www.urbansplatter.com/wp-content/uploads/2014/07/Empire-State-Building-2013.jpg',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    // {
    //     id: 'p2',
    //     title: 'Empire State Building',
    //     description: 'One of the most famour sky scrapers in the world',
    //     imageUrl: 'https://www.urbansplatter.com/wp-content/uploads/2014/07/Empire-State-Building-2013.jpg',
    //     address: '20 W 34th St., New York, NY 10001',
    //     location: {
    //         lat: 40.7484405,
    //         lng: -73.9878531
    //     },
    //     creator: 'u2'
    // }
];
// const {userId}=useParams();
const UserPlaces= ()=>{
    try{
        // const userId=useParams().userId;
        // const loadedPlaces=DUMMY_PLACES.filter(place=>place.creator===userId);
        return <PlaceList items={DUMMY_PLACES}/>
  } catch (error){
    console.log(error);
    // alert('Something went wrong!');
  }
};


// const UserPlaces= ()=>{
//     try{
//         const userId=useContext().userId;
//         const loadedPlaces=DUMMY_PLACES.filter(place=>place.creator===userId);
//         return <PlaceList items={loadedPlaces}/>
//   } catch (error){
//     // console.log(error);
//     // alert('Something went wrong!');
//   }
// };


        

export default UserPlaces;