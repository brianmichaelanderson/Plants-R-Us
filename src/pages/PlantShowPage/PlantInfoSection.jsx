import { useState } from 'react';
import BenefitBox from './BenefitBox';
import PlantHeading from './PlantHeading';
import PlantPurchaseOptions from './PlantPurchaseOptions';
import { getRandomIdx } from 'shared-components/util';
import Zoom from 'react-medium-image-zoom';  //for zooming into images
import 'react-medium-image-zoom/dist/styles.css';

const PlantInfoSection = (props) => {
  const { plant } = props;
  //implement imageIdx & its setter here in parent so image can change when onMouseEnter is activated to setImageIdx in child/PlantPurchaseOptions
  const [imageIdx, setImageIdx] = useState(() => getRandomIdx(plant.images));

  // console.log('PlantInfoSection passed prop plant state = ', plant);

  return (
    <div className='flex flex-col md:flex-row w-full max-w-5xl my-8 mx-6'>
      <div className='flex-1'>
        <div className='block md:hidden px-8'>
          <PlantHeading plant={plant} />
        </div>
        <Zoom>
          <img className='rounded-lg' src={plant.images[imageIdx].src} />
        </Zoom>
        <div className='flex mt-4'>
          <BenefitBox
            icon='far fa-check-circle'
            title='Guaranteed Healthy'
            description='Guaranteed to arrive healthy or your money back'
          />
          <div className=' border border-slate-300'></div>
          <BenefitBox
            icon='fa-solid fa-truck-fast'
            title='Free Shipping'
            description='Guaranteed to arrive healthy or your money back'
          />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='hidden md:block  px-8'>
          <PlantHeading plant={plant} />
        </div>
        <p className='text-slate-600 leading-relaxed mt-4 px-1 md:px-8'>
          {plant.description}
        </p>
        <div className='px-8 mt-6'>
          {/* just need to pass current state imageIdx and it's setter */}
          <PlantPurchaseOptions
            plant={plant}
            imageIdx={imageIdx}
            setImageIdx={setImageIdx}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantInfoSection;
