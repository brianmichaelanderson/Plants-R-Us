import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as plantService from 'services/plant';
import LoadingSpinner from 'shared-components/LoadingSpinner';
import NavBar from 'shared-components/NavBar.jsx';
import PlantInfoSection from './PlantInfoSection';

const PlantShowPage = () => {
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById({ id: plantId });
      setPlant(await response.json());
      setIsLoading(false);
    })();
  }, []);

  console.log('PlantShowPage plant state = ', plant);

  return (
    <div>
      <NavBar />
      <div className='flex justify-center bg-emerald-50 min-h-screen'>
        {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
      </div>
    </div>
  );
};

export default PlantShowPage;
