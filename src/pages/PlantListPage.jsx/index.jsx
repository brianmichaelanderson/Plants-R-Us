import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
    // console.log('response.status = ', response.status);
    // console.log('data = ', data);
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
            <div className='w-full max-w-5xl px-3 py-4 ml-8'>
              <div className='font-playfair text-4xl text-emerald-700'>
                Plants In Stock
              </div>
              <div className='flex justify-center flex-wrap'>
                {plants.map((plant, idx) => (
                  //Set unique key because backend randomizes what's returned for get plants requests
                  <motion.div
                    key={plant.name}
                    initial={{ opacity: 0, y: '20px' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      //mod 3 always gives remainder 0, 1, or 2
                      //Then that gets multiplied by .02.
                      delay: 0.3 + (idx % 3) * 0.02,
                      duration: 0.4,
                    }}
                    className='mt-2 mr-2'
                  >
                    <PlantItem plant={plant} />
                  </motion.div>
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
