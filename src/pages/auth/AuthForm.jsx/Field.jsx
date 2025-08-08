const Field = (props) => {
  const { label, type, onChange, value } = props;

  return (
    <div>
      <div className='flex flex-col'>
        <label for={label} className='pl-1'>
          {label}
        </label>
        <input
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          className='border border-slate-400 focus:outline-emerald-700 w-64 rounded-lg px-2 py-1'
        />
      </div>
    </div>
  );
};

export default Field;
