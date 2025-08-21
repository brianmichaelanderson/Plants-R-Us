const CartItem = (props) => {
  const { item } = props;

  return (
    <div className='flex m-4'>
      <img className='w-28 rounded-md' src={item.image_src} />
      <div className='mx-4 flex justify-between flex-1'>
        <div>
          <div className='text-emerald-700 font-playfair'>
            <div className=''>{item.plant_name}</div>
          </div>
          <div className='flex text-slate-500'>
            <div className="w-12 text-slate-400">qty:</div>
            <div>{item.quantity}</div>
          </div>
          <div className='flex text-slate-500'>
            <div className="w-12 text-slate-400">color: </div>
            <div>{item.pot_color}</div>
          </div>
        </div>
      </div>
      <div className='text-slate-500 pr-8'>
        ${item.price_per_unit * item.quantity}
      </div>
    </div>
  );
};

export default CartItem;
