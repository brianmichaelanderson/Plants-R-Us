import { useEffect, useState } from 'react';
import * as plantService from 'services/plant';
import NavBar from 'shared-components/NavBar.jsx';

const PlantListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);
  
  const getAllPlants = async () => {
    const response = await plantService.getPlants();
    const data = await response.json();
    console.log('response.status = ', response.status);
    console.log('data = ', data);
  };

  useEffect(() => {
    getAllPlants();
    //Below lets everything reside in the useEffect, which doesn't allow async
    //putting another anonymous function wrapped in () can be set as async with it's () followed by another set of () to invoke it
    // (async () => {
    //   const response = await plantService.getPlants();
    //   console.log('getPlants response =', response.status);
    // })();
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default PlantListPage;
