import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteData, searchFilter } from '../Action/empAction';


const Deshboard = () => {

const list = useSelector(state => state.empReducer.list);
const searchInput = useSelector((state) => state.empReducer.searchInput);
const dispatch = useDispatch();


    return (
        <>
            <div className='Container'>
                <div className='display-3 my-5 text-center'>
                    <div className='row'>
                        <div className='col-md-12 my-5 text-right'>
                         <h1> Employee List </h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <input type="text" 
                       placeholder='Search...' 
                       className='search'
                       value={searchInput}
                       onChange={(e) => dispatch((searchFilter(e.target.value)))}   
                />
               
                <Link to='/'> Go Back </Link>
            </div>

                <div className='col-md-12 mx-auto'>
                    <table className='table table-hover'>
                            <thead className='text-white bg-dark text-center'>
                                <tr>
                                    
                                    <th scope='col'>Employee Name</th>
                                    <th scope='col'>Profession</th>
                                    <th scope='col'>Email-id</th>
                                    <th scope='col'>Password</th>
                                    <th scope='col'>Contact No</th>
                                    <th scope='col'>Salary</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {  
                                list.map((elem) => {
                                    return(
                                        <>
                                        <tr key={elem.id}>
                                            <th>{elem.ename}</th>
                                            <th>{elem.profession}</th>
                                            <th>{elem.email}</th>
                                            <th>{elem.pwd}</th>
                                            <th>{elem.phone}</th>
                                            <th>{elem.salary}</th>
                                            <td> <Link type='button' to={`/:?id=${elem.id}`}
                                                    className='btn btn-small btn-primary mr-2'> 
                                                    Edit
                                                </Link>
                                            </td>
                                            <td> <button type='button' 
                                                    className='btn btn-small btn-danger' 
                                                    onClick={() => {dispatch(deleteData(elem.id))}}>Delete
                                                </button>
                                            </td>
                                        </tr>
                                        </>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>

            
        </>
    )
}

export default Deshboard;
