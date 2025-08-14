const PlantHeading = (props) => {
    const {plant} = props;
    return (
        <>
          <div className='flex justify-between text-emerald-800 text-4xl mb-4'>
          <div className='font-playfair'>{plant.name}</div>
          <div className='font-lato'>${plant.price}</div>
        </div>
        <div className="font-playfair italic mb-4 text-slate-600">{plant.botanical_name}</div>
        </>
    )
}

export default PlantHeading;