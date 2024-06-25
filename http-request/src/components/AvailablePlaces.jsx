import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const[isFetching,setIsFetching]=useState([]);
  const [error, setError]=useState();
  useEffect(() => {
    async function fetchPlaces(){
      setIsFetching(true);
      try{
      const response= await fetch("http://localhost:3000/places");
      if(!response.ok) throw new Error('Failed to fetch places');
      const resData = await response.json();

      navigator.geolocation.getCurrentPosition((position)=>{
        const sortedPlaces = sortPlacesByDistance(resData.places,
          position.coords.latitude,
          position.coords.longitude)
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);

      });
      
    }
    catch(error){
      setError({message:error.message || 'Could not fetch places, pls try again'})
      setIsFetching(false);
    }
     
    }
    fetchPlaces();
    // fetch("http://localhost:3000/places").then((response) => {
    //   return response.json().then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });
    // });
  }, []);

  if(error)return <Error
    title="An error occured"
    message={error.message } />
  
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="fetching Place Data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
