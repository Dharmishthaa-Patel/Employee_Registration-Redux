import React from 'react';
import './App.css';
import EmpReg from './Components/EmpReg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Deshboard from './Components/Deshboard';

const App = () => {

  return (
   <>
   
      <NavBar />

      <Switch>
        <Route exact path="/">
        <EmpReg />
        </Route>

        <Route path="/deshboard">
           <Deshboard />
        </Route>

        <Route path="/:id">
           <EmpReg />
        </Route>

      </Switch>
         
   </>
  )
}

export default App;
