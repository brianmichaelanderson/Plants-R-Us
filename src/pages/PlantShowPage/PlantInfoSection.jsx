
const PlantInfoSection = (props) => {
    const { plant } = props;

// console.log("plant prop in PlantInfoSection = ", plant)

  return (
    <div className='flex w-full max-w-5xl my-8'>
      <div className='flex-1'>
        <img src={plant.images[0].src} />
      </div>
      <div className='flex flex-col flex-1 px-8'>
        <div className='flex justify-between text-emerald-800 text-4xl'>
          <div className='font-playfair'>{plant.name}</div>
          <div className='font-lato'>${plant.price}</div>
        </div>
        {plant.botanical_name}
        <p>{plant.description}</p>
      </div>
    </div>
  );
};

export default PlantInfoSection;
