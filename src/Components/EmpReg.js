import React, { useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector} from 'react-redux';
import { TextField } from '@material-ui/core';
import { addData, editData, updateData } from '../Action/empAction';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string'
import { useHistory } from 'react-router-dom';

const EmpReg = () => {

    const { id } = queryString.parse(window.location.search);

    const editEmpId = useSelector(state => state.empReducer.editEmpId);
    const formikState = useSelector(state => state.empReducer.formikState);
    const history = useHistory();
    

    const validation = Yup.object().shape({
        ename: Yup.string()
        .required('Employee Name is Required'),

        profession: Yup.string()
        .required('profession is Required'),

        email: Yup.string()
        .required('E-Mail is Required'),

        pwd: Yup.string()
        .min(6,'Password Must be at least 6 Character'),

        phone: Yup.string()
        .required('Contact is Required'),

        salary: Yup.string()
        .required('salary is Required'),
    })

    const dispatch = useDispatch(); 
    
    const formik = useFormik({
        initialValues: {
            ename:'',
            profession:'',
            email:'',
            pwd:'',
            phone:'',
            salary:'',
        },
       // validationSchema: {validation},
        onSubmit: (values) => {
            if( id ) {
                console.log("update",values)
                dispatch(updateData(id,values))
                history.push('/deshboard')
            } else {
                dispatch(addData(values))
                formik.handleReset()
                history.push('/deshboard')
                
            }
        }
    });

    // id of edit data
    useEffect(() => {  
        if (id) {
            dispatch(editData(id))
        }
    }, [])

    useEffect(() => {
        if (id && formikState) {
            formik.setValues(formikState)  //show new value in formikState
            //console.log("newformikstate",formikState)     
        }
    }, [formikState], // init data blank 
   // console.log("formikstate",formikState) 
    )

    return (
        <>
            
            <div className="addItems">
                <form onSubmit={formik.handleSubmit}>
                
                <h2> Registration Form </h2>
                <TextField 
                     input type="text" placeholder="Employee Name" name='ename' 
                     onChange={formik.handleChange} autoComplete='off'
                     value={formik.values.ename} required 
                />
                <br /><br />
                <TextField 
                     input type="text" placeholder="Profession" name='profession' 
                     onChange={formik.handleChange} autoComplete='off'
                     value={formik.values.profession} required
                />
                <br /><br />
                <TextField 
                     input type="email" placeholder="Email-Id" name='email' 
                     onChange={formik.handleChange} autoComplete='off'
                     value={formik.values.email} required
                />
                <br /><br />
                <TextField 
                     input type="password" placeholder="Password" name='pwd' 
                     onChange={formik.handleChange} autoComplete='off'
                     value={formik.values.pwd} required
                />
                <br /><br />
                <TextField 
                     input type="number" placeholder="Contact No" name='phone' 
                     onChange={formik.handleChange} autoComplete='off'
                     value={formik.values.phone} required
                />
                <br /><br />
                <TextField 
                     input type="number" placeholder="Salary" name='salary' 
                     onChange={formik.handleChange} autoComplete='off'
                     value={formik.values.salary} required
                /> 
                <br /><br />
                {
                    !editEmpId ? (<button className="btn btn-dark mt-3" type='submit'>
                                          Submit
                                   </button>) 
                                :
                                   (<button className="btn btn-dark mt-3">
                                            Update
                                    </button>)
                }
                  &nbsp;  <button className="btn btn-danger mt-3 ml-3" 
                                  type='reset' onClick={formik.handleReset}> 
                                  cancel
                          </button>

                </form> 

                  <br /> 
                <NavLink to="/deshboard"><button> Dashboard </button></NavLink>
            </div>
        </>
    )
}

export default EmpReg
