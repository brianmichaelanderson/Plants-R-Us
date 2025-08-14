import { useEffect, useState } from 'react';
import * as plantService from 'services/plant';
import NavBar from 'shared-components/NavBar.jsx';
import RedirectToSigninIfSignedOut from 'shared-components/RedirectToSigninIfSignedOut';
import PlantItem from './PlantItem';
import LoadingSpinner from 'shared-components/LoadingSpinner';

const PlantListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);

  const getAllPlants = async () => {
    setIsLoading(true);
    const response = await plantService.getPlants();
    const data = await response.json();
    console.log('response.status = ', response.status);
    console.log('data = ', data);
    setPlants(data);
    setIsLoading(false);
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
    <RedirectToSigninIfSignedOut>
      <NavBar />
      <div className='bg-emerald-50 min-h-screen'>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div key='plants' className='flex justify-center'>
            <div className='w-full max-w-5xl px-3 py-4'>
              <div className='font-playfair text-4xl text-emerald-700 '>
                Plants In Stock
              </div>
              <div className='flex flex-wrap'>
                {plants.map((plant) => (
                  //Set unique key because backend randomizes what's returned for get plants requests
                  <div key={plant.name} className='mt-2 mr-2'>
                    <PlantItem plant={plant} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSigninIfSignedOut>
  );
};

export default PlantListPage;
