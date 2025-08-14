const BenefitBox = () => {
  return (
    <div className='flex justify-between flex-1 mt-2 font-lato'>
      <div className='flex flex-col items-center p-2'>
        <i class='fa-regular fa-circle-check p-2 text-emerald-700 text-2xl'></i>
        <div className="text-slate-600 m-1">Guaranteed Healthy</div>
        <div className='text-slate-600 text-center text-sm'>Guaranteed to arrive healthy or your money back</div>
      </div>
      <div className='flex flex-col items-center p-2 border-l-2 border-slate-300'>
        <i className='fa-solid fa-truck-fast p-2 text-emerald-600 text-2xl'></i>
        <div className="text-slate-700 m-1">Free Shipping</div>
        <div className='text-slate-600 text-sm text-center'>Get free ground shipping on orders of $50 or more</div>
      </div>
    </div>
  );
};

export default BenefitBox;
