import { useState } from 'react';
import Field from './Field';

const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = '';
    }
    return initialState;
  });

  console.log(values);

  return (
    <form className='bg-white border border-slate-300 rounded-md p-4 m-4 font-lato'>
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className='bg-emerald-700 text-white rounded-md w-full mt-4 py-2'>
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
