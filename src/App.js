import React from 'react';
import './App.css';
import EmpReg from './Components/EmpReg';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
   <>
   <div className='container mt-3'>
    <div className='row'>
      <div className='col-md-7'>
      <EmpReg />
      </div>
    </div>
   </div>      
   </>
  )
}

export default App
