import Loginpage from './Components/LoginPage/Loginpage';
import Issuedbooks from "./Components/IssuedBook/Issuedbooks";
import Allbooks from './Components/Allbooks/Allbooks'
import Students from './Components/Students/Students'
import './App.css';
import React, { useEffect } from 'react';
import {  Route, Routes} from 'react-router-dom';

import { createContext, useState } from 'react';
import ViewStudent from './Components/Students/ViewStudent';

// import { tableContent } from "./Components/Allbooks/ModalForAddingBook"
 const bookListContext  = createContext()
 const issueBookListContext = createContext()
 const studentListContext = createContext()

 const getBookList = () => {
  let bookListArray = localStorage.getItem('bookListArray');
  if(bookListArray){
    return JSON.parse(localStorage.getItem('bookListArray'));
  }else {
    return [];
  } 
 }

 const getIssueBookList = () => {
  let issueBookListArray = localStorage.getItem('issueBookListArray');
  if(issueBookListArray){
    return JSON.parse(localStorage.getItem('issueBookListArray'));
  }else {
    return [];
  } 
 }

 const getStudentList = () => {
  let studentListArray = localStorage.getItem('studentListArray');
  if(studentListArray){
    return JSON.parse(localStorage.getItem('studentListArray'));
  }else {
    return [];
  } 
 }



function App() {

  const [bookListArray, setBookListArray] = useState(getBookList())
  const [issueBookListArray, setIissueBookListArray] = useState(getIssueBookList())
  const [studentListArray, setStudentlistArray] = useState(getStudentList())


  useEffect(()=>{
    localStorage.setItem('bookListArray', JSON.stringify(bookListArray))
    localStorage.setItem('issueBookListArray', JSON.stringify(issueBookListArray))
    localStorage.setItem('studentListArray', JSON.stringify(studentListArray))
  }, [bookListArray, issueBookListArray, studentListArray]);


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
        <Route path='/students/view' element= {<ViewStudent />} />

        </Routes>
        </studentListContext.Provider>
        </issueBookListContext.Provider>
        </bookListContext.Provider>
    </div>


  );
}
export default App;
export {bookListContext};
export {studentListContext};
export {issueBookListContext};
