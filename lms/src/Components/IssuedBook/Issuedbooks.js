import React, { useContext} from "react";
//Importing Css
import "./Issuedbook.css";
//Importing Table From Bootstrap
import Table from "react-bootstrap/Table";
//Importing Modal
import ModalIssueBook from "./ModalForIssueBooks";
//Importing Dashboard
import Dashboard from "../Dashboard/dashboard";
//Importing Modal For ReturnBook
import Returnbook from "./ModalForReturn";
//Importing IssueBookListArray 
import { issueBookListContext } from '../../App'
//Importing BookListArray 
import { bookListContext } from "../../App";
//Importing StudentListArray 
import { studentListContext } from '../../App';

function Issuedbooks() {

  const [issueBookListArray] =useContext(issueBookListContext)
  const [bookListArray] = useContext(bookListContext);

  const [studentListArray] = useContext(studentListContext)


  // const bookTitleKeeys = bookListArray.map((item)=> {
  //   return  item.bookTitleId;
  //  })
  //  console.log(bookTitleKeeys)

  //Remaining increment
  // const countRemaining = () =>{
  // const countRem = bookListArray.map((item) => {
  //     if(item.name === selectedBookKey){
  //       item.remaining= ++item.remaining;
  //     }
  //     return (item)
  //   })
  //    setBookListArray(countRem)
  // }

  // const countRemaining = () =>{
  //   const count = bookListArray.map((item)=>{
  //     return(
  //       IssueBookListArray.map((book)=>{
  //         if(item.bookTitle === book.bookTitleId){
  //           console.log("hii")
  //         }
  //       })
  //       )
  //   }
  // )}


  return (
    <div className="d-flex">
  <div>
    <Dashboard />
  </div>
    <div className="container-issuebooks">
        <p className="header-of-issuedbooks">Issued Books</p>
        <hr />
        <div className="srch-cls"><input className="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search" aria-label="Search" />
        <ModalIssueBook /></div>

    <Table responsive>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Student</th>
          <th>Issue Date</th>
          <th>Due Date</th>
          <th>Fine (Rs. 10 per day) </th>
          <th>Actions</th>
        </tr>
      </thead>
      {issueBookListArray.map((item) => {
            return (
      <tbody key={item.issueId}>
        <tr>
          {bookListArray.map((book)=>{
            
            if(item.bookTitle === book.bookTitleId){
              return (<td>{book.name}</td>)
            }
          })}
          {studentListArray.map((std)=>{
            if(item.students === std.nameId){
              return(<td>{std.name}</td>)
            }
          })}
          <td>{item.issueDate}</td>
          <td>{item.dueDate}</td>
          <td>10</td>
          <td>< Returnbook issueTitleId={item.bookTitle} issueBooksId={item.issueId} /></td>     
        </tr>    
      </tbody>
      );
    })}
    </Table>

    </div>
    </div>
  );
}

export default Issuedbooks;
