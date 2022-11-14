import Loginpage from './Components/LoginPage/Loginpage';
import Issuedbooks from "./Components/IssuedBookPage/Issuedbooks";
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
  <div>
      <BrowserRouter>
        <Routes>
        <Route path='/login' element= {Loginpage()} />
        <Route path='/adminpage' element= {Issuedbooks()} />

        </Routes>
      </BrowserRouter>
    </div>


  );
}
export default App;
