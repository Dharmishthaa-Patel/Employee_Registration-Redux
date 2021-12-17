import React from 'react'
import { useState } from 'react';
import { Formik, Form, useFormik } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

const EmpReg = () => {

    const [inputData, setInputData] = useState('');
    // const list = useSelector((state) => state.empReducer.list);
    // const dispatch = useDispatch();


    const validation = Yup.object({
        ename: Yup.string()
        .max(15,'Must be 15 Characters or Less'),
        // .required('Required'),

        profession: Yup.string(),
        // .required('Required'),

        email: Yup.string()
        .email('Email is Invalid'),
        // .required('Required'),

        pwd: Yup.string()
        .min(6,'Password Must be at least 6 Charaters'),
        // .required('Required'),

        cpwd: Yup.string()
        .oneOf([Yup.ref('pwd'),null], 'Password Must be Match'),
        // .required('Required'),

        salary: Yup.number()
        // .required('Required')
    });

    return (
        <>
            <Formik
            initialValues={{
                ename: '',
                profession: '',
                email: '',
                pwd: '',
                cpwd: '',
                salary: ''
            }}
            validationSchema={validation}
            onSubmit={values => {
                console.log(values)
            }}
            >
                {/* {Formik => {
                    console.log(Formik)
                }} */}

                {Formik => ( 
                    <div>
                        <h1 className='my-4 font-weight-bold-display-4'>Registration Form </h1>
                        {/* {console.log(Formik.values)} */}

                        <Form>

                            <TextField input  placeholder=' Your Name' 
                                       name="ename" type="text" value={inputData.ename}
                                       onChange={(event) => setInputData(event.target.value)}/>
                            <br />
                            <TextField input  placeholder=' Your profession' 
                                       name="profession" type="text" value={inputData.profession}
                                       onChange={(event) => setInputData(event.target.value)}/>
                            <br />
                            <TextField input  placeholder=' Your E-Mail' 
                                       name="email" type="text" value={inputData.email}
                                       onChange={(event) => setInputData(event.target.value)}/>
                            <br />
                            <TextField input  placeholder=' Your Password' 
                                       name="pwd" type="password" value={inputData.pwd}
                                       onChange={(event) => setInputData(event.target.value)}/>                           
                            <br />
                            <TextField input  placeholder=' Your Confirm Password' 
                                       name="cpwd" type="password" value={inputData.cpwd}
                                       onChange={(event) => setInputData(event.target.value)}/>                            
                            <br />
                            <TextField input placeholder='Your Salary' 
                                       name="salary" type="number" value={inputData.salary}
                                       onChange={(event) => setInputData(event.target.value)}/>
                            <br />

                            <button className="btn btn-dark mt-3" type='submit'>Submit</button>&nbsp;
                            <button className="btn btn-danger mt-3 ml-3" type='reset'>cancel</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default EmpReg;


