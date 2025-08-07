import { useState } from 'react';

const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for(let field of fields) {
        initialState[field.label] = ''
    }
    return initialState;
  });

console.log(values)

  return (
    <form className='border border-slate-300 rounded-md p-4 m-4 font-lato'>
      {fields.map((field) => (
        <div key={field.label} className='flex flex-col'>
          <label for={field.label} className='pl-1'>
            {field.label}
          </label>
          <input
            id={field.label}
            type={field.type}
            value={values[field.label]}
            onChange={(e) => {
                setValues({...values, [field.label]: e.target.value})
            }}
            className='border border-slate-400 focus:outline-emerald-700 w-64 rounded-lg px-2 py-1'
          />
        </div>
      ))}
      <button className='bg-emerald-700 text-white rounded-md w-full mt-4 py-2'>
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
