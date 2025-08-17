import clsx from 'clsx';
import { useState } from 'react';
import { addPlantToCart } from 'services/cart';
import LoadingSpinner from 'shared-components/LoadingSpinner';
import { POT_COLORS } from 'shared-components/util';

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className='text-emerald-700 mb-3'>
        <i className='fa-solid fa-brush text-2xl mr-2'></i>
        Plant Color
      </div>
      <div className='flex'>
        {/* POT_COLORS has key matching images.pot_colors names to TWCSS bg- colors */}
        {plant.images.map((image, idx) => (
          // unique key for each mapped output, but still want the idx from .map to use w/ setImageIdx in the onMouseEnter().
          <div
            key={image.pot_color}
            className='flex flex-col items-center mr-1'
          >
            <div
              className={clsx(
                'w-10 h-10 rounded-full mr-2 border border-slate-500 mb-1',
                POT_COLORS[image.pot_color],
                imageIdx === idx &&
                  'outline outline-1 outline-offset-2 outline-slate-600'
              )}
              onMouseEnter={() => setImageIdx(idx)}
            ></div>
            <div
              className={clsx(
                'text-slate-500 text-sm',
                imageIdx === idx && 'text-slate-800'
              )}
            >
              {image.pot_color}
            </div>
          </div>
        ))}
      </div>
      <div className='mt-8 flex'>
        <div className='border-2 border-slate-400 text-slate-500 text-xl rounded-full px-2 py-2 flex justify-center items-center'>
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className='fa-solid fa-minus px-2'></i>
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <i className='fa-solid fa-plus px-2'></i>
          </button>
        </div>
        <button
          className='flex justify-center items-center border bg-emerald-600 flex-1 rounded-full mx-3 text-white px-2 py-2'
          onClick={async () => {
            setIsLoading(true);
            const response = await addPlantToCart({
              plantId: plant.id,
              quantity,
              potColor: plant.images[imageIdx].pot_color,
            });
            setIsLoading(false);
            console.log(response.status);
          }}
        >
          {isLoading ? (
            <span key='spinner'>
              <i className='fa-solid fa-spinner animate-spin text-2xl p-2'></i>
            </span>
          ) : (
            <span key='cart'>
              <i className='fa-solid fa-cart-shopping p-2 text-2xl'></i>
            </span>
          )}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
