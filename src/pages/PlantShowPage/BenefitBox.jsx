import clsx from 'clsx';

const BenefitBox = (props) => {
    const { icon, title, description} = props;
  return (
      <div className='flex flex-col items-center p-2 flex-1'>
        {/* when using clsx JS code doesn't need to be in curlys as the whole expression is already in curlys */}
        <i className={clsx('p-2 text-emerald-700 text-2xl',icon)}></i>
        <div className="text-slate-600 m-1 text-center">{title}</div>
        <div className='text-slate-600 text-center text-sm'>{description}</div>
 
    </div>
  );
};

export default BenefitBox;
