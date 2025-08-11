import clsx from 'clsx';

const PlantItem = (props) => {
  const { plant } = props;

  const POT_COLORS = {
    stone: 'bg-stone-200',
    slate: 'bg-slate-300',
    sky: 'bg-sky-700',
    black: 'bg-gray-600',
    white: 'bg-gray-50',
    amber: 'bg-amber-600',
  };

  console.log('console.log(plant) = ', plant);

  return (
    <div className='mr-8 mb-5'>
      <img
        className='w-[280px] h-[320px] rounded-md'
        src={plant.images[0].src}
      />
      <div className='flex justify-between items-center mt-3 text-emerald-700 text-xl'>
        <div className='font-playfair'>{plant.name}</div>
        <div className='flex items-center'>${plant.price}</div>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <div className="text-slate-500">color</div>
        <div className="flex">
            {/* get pot_color name to look up as key in POT_COLORS for TWCSS bg styling */}
          {plant.images.map((imageElement, idx) => (
            <div key={idx} className={clsx("ml-1 h-5 w-5 rounded-full border border-slate-500", POT_COLORS[imageElement.pot_color]
            )}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
