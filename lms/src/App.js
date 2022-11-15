import Loginpage from './Components/LoginPage/Loginpage';
import Issuedbooks from "./Components/IssuedBook/Issuedbooks";
import Dashboard from './Components/Dashboard/dashboard';
import Allbooks from './Components/Allbooks/Allbooks'
import Students from './Components/Students/Students'
import './App.css';
import React from 'react';
import {  Route, Routes} from 'react-router-dom';

function App() {
  return (
  <div>
      {/* <BrowserRouter> */}
        <Routes>
        <Route path='/' element= {Loginpage()} />
        <Route path='/isuuedbooks' element= {Issuedbooks()} />
        <Route path='/dashboard' element= {Dashboard()} />
        <Route path='/allbooks' element= {Allbooks()} />
        <Route path='/students' element= {Students()} />

        </Routes>
      {/* </BrowserRouter> */}
    </div>


  );
}
export default App;
