import Loginpage from './Components/LoginPage/Loginpage';
import Issuedbooks from "./Components/IssuedBook/Issuedbooks";
import Allbooks from './Components/Allbooks/Allbooks'
import Students from './Components/Students/Students'
import './App.css';
import React from 'react';
import {  Route, Routes} from 'react-router-dom';

import { createContext, useState } from 'react';

// import { tableContent } from "./Components/Allbooks/ModalForAddingBook"
 const bookListContext  = createContext()
 const issueBookListContext = createContext()
 const studentListContext = createContext()


function App() {

  const [bookListArray, setBookListArray] = useState([])
  const [issueBookListArray, setIissueBookListArray] = useState([])
  const [studentListArray, setStudentlistArray] = useState([])


  return (
  <div>
      {/* <BrowserRouter> */}
      {/* < tableContent> */}
      <bookListContext.Provider value={[bookListArray, setBookListArray]}>
        <issueBookListContext.Provider value={[issueBookListArray, setIissueBookListArray]}>
          <studentListContext.Provider value={[studentListArray, setStudentlistArray]}>
        <Routes>
        <Route path='/' element= { <Loginpage /> } />
        <Route path='/isuuedbooks' element= { <Issuedbooks />} />
        {/* <Route path='/dashboard' element= {<Dashboard />} /> */}
        <Route path='/allbooks' element= { <Allbooks />} />
        <Route path='/students' element= { <Students />} />

        </Routes>
        </studentListContext.Provider>
        </issueBookListContext.Provider>
        </bookListContext.Provider>
      {/* </BrowserRouter> */}
      {/* </tableContent> */}
    </div>


  );
}
export default App;
export {bookListContext};
export {studentListContext};
export {issueBookListContext};
