import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { POT_COLORS,getRandomIdx } from 'shared-components/util'; //Moved POT_COLORS & getRandomIdx to a shared dir

const PlantItem = (props) => {
  const { plant } = props;
  const [imageIdx, setImageIdx] = useState(() => getRandomIdx(plant.images));

  // console.log('imageIdx', imageIdx, 'plant.images.length', plant.images.length)

  // console.log('PlantItem.jsx plant state = ', plant);

  return (
    <div className='mr-8 mb-5'>
      <Link to={`/plants/${plant.id}`}>
        <img
          className='w-[280px] h-[320px] rounded-md'
          src={plant.images[imageIdx].src}
        />
      </Link>
      <div className='flex justify-between items-center mt-3 text-emerald-700 text-xl'>
        <div className='font-playfair'>{plant.name}</div>
        <div className='flex items-center'>${plant.price}</div>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <div className='text-slate-500'>{plant.images[imageIdx].pot_color}</div>
        <div className='flex'>
          {/* get pot_color name to look up as key in POT_COLORS for TWCSS bg styling */}
          {plant.images.map((imageElement, idx) => (
            <div
              key={idx}
              className={clsx(
                'ml-[3px] h-5 w-5 rounded-full border border-slate-500',
                POT_COLORS[imageElement.pot_color],
                imageIdx === idx && 'outline outline-slate-400 outline-offset-2'
              )}
              onMouseEnter={() => setImageIdx(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
