import PlantHeading from './PlantHeading';

const PlantInfoSection = (props) => {
  const { plant } = props;

  console.log("PlantInfoSection passed prop plant state = ", plant) 

  return (
    <div className='flex w-full max-w-5xl my-8'>
      <div className='flex-1'>
        <img src={plant.images[0].src} />
      </div>
      <div className='flex flex-col flex-1 px-8'>
      <PlantHeading plant={plant}/>
        <p className='text-slate-600 leading-relaxed'>{plant.description}</p>
      </div>
    </div>
  );
};

export default PlantInfoSection;
