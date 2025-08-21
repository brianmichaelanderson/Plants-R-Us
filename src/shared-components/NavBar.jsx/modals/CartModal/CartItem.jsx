const CartItem = (props) => {
  const { item } = props;

  return (
    <div className='flex m-4'>
      <img className='w-28 rounded-md' src={item.image_src} />
      <div className='mx-4 flex-1'>
        <div className='text-emerald-700 font-playfair flex justify-between'>
          <div className=''>{item.plant_name}</div>
          <div className='text-slate-500 pr-8'>
            ${item.price_per_unit * item.quantity}
          </div>
        </div>
        <div className="flex">
          <div>color: {item.pot_color}</div>
        </div>
          <div>qty:</div>
          <div>{item.quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
