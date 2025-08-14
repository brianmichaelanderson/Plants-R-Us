import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as plantService from 'services/plant';

const PlantShowPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await plantService.getPlantById({ id: plantId });
      console.log(await response.json());
    })();
  }, [plantId]);
  return (
    <div>
      <div>This is the PlantShowPage</div>
    </div>
  );
};

export default PlantShowPage;
