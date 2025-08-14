import PlantHeading from './PlantHeading';

const PlantInfoSection = (props) => {
  const { plant } = props;

  //   console.log("PlantInfoSection passed prop plant state = ", plant)

  return (
    <div className='flex flex-col md:flex-row w-full max-w-5xl my-8 mx-6'>
      <div className='flex-1'>
        <div className='block md:hidden px-8'>
          <PlantHeading plant={plant} />
        </div>
        <img className='rounded-lg'src={plant.images[0].src} />
        {/* <p className='flex md:hidden text-slate-600 leading-relaxed p-2'>{plant.description}</p> */}
      <div className='flex justify-center'>Todo</div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='hidden md:block  px-8'>
          <PlantHeading plant={plant} />
        </div>
        <p className='text-slate-600 leading-relaxed mt-4 px-1 md:px-8'>{plant.description}</p>
      </div>
    </div>
  );
};

export default PlantInfoSection;
