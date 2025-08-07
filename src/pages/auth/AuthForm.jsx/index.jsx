const AuthForm = (props) => {
  const { fields } = props;

  return (
    <form className='border border-slate-300 rounded-md p-4 m-4'>
      {fields.map((field) => (
        <div key={field.label} className='flex flex-col'>
          <label for={field.label} className=''>
            {field.label}
          </label>
          <input id={field.label} type={field.type} className="border border-slate-400 focus:border-emerald-700 w-64 rounded-lg px-2 py-1" />
        </div>
      ))}
    </form>
  );
};

export default AuthForm;
