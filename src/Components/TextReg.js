import React from 'react'
import { ErrorMessage, useField } from 'formik';

const TextField = ({ TextField, ...props}) => {
    const [field, meta] = useField(props);
    // console.log(field, meta);

    return (
        <>
            <div className='mb-2'>
                <input htmlFor={field.name}  autoComplete='off' required
                        className={`form-control shadow-none ${meta.touched && meta.error && 'Is Invalid'}`}
                        {...field} {...props}
                />
            <ErrorMessage name={field.name} component="div" className="error"/>   
            </div>
        </>
    )
}

export default TextField;
