import { useState } from 'react';
import Field from './Field';

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = '';
    }
    return initialState;
  });
  const [loading, setLoading] = useState(false);

  return (
    <form
      className='bg-white border border-slate-300 rounded-md p-4 m-4 font-lato'
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
      }}
    >
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
      <button className='bg-emerald-700 text-white rounded-md w-full mt-4 py-2 relative flex justify-center'>
        {submitButtonLabel}
        {loading && <div className="absolute right-6 top-2 animate-spin">
          <i className='fa-solid fa-spinner text-xl'></i>
        </div>}
      </button>
    </form>
  );
};

export default AuthForm;
