import clsx from 'clsx';
import { POT_COLORS,getRandomIdx } from 'shared-components/util';

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;

  return (
    <div>
      <div className='text-emerald-700 mb-3'>
        <i className='fa-solid fa-brush text-2xl mr-2'></i>
        Plant Color
      </div>
      <div className='flex'>
        {/* POT_COLORS has key matching images.pot_colors names to TWCSS bg- colors */}
        {plant.images.map((image, idx) => (
          <div className='flex flex-col items-center mr-1'>
            <div
              key={image.pot_color}
              className={clsx(
                'w-10 h-10 rounded-full mr-2 border border-slate-500 mb-1',
                POT_COLORS[image.pot_color]
              )}  
            ></div>
            <div className='text-slate-500 text-sm'>{image.pot_color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
