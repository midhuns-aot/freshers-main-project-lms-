import React,  {useContext } from 'react'
import DashboardStudent from '../DashBoardStudent/dashboardStudent'
import Table from "react-bootstrap/Table";

// Importing IssueBookListArray 
import { issueBookListContext } from "../../App";
// Importing StudentListArray 
import { studentListContext } from '../../App';
//Importing BookListArray 
import { bookListContext } from "../../App";
import {useParams} from 'react-router-dom';



function MyBook() {

  const [studentListArray] = useContext(studentListContext);
  const [issueBookListArray] =useContext(issueBookListContext);
  const [bookListArray] = useContext(bookListContext);

  const tempStudentDetailsArr = issueBookListArray.map((item)=>{
    let studentObj = {
      key : item.key,
      book : "",
      author : "",
      issueDate : item.issueDate,
      dueDate : item.dueDate,
    }
    bookListArray.map((book)=>{
      if(item.bookTitle === book.bookTitleId){
        studentObj.book = book.name
        studentObj.author = book.author
      }
    })

    studentListArray.map((std)=>{
      if(item.students === std.nameId){
        studentObj.key = std.nameId
      }
    })

    return studentObj

  })
  const obj = useParams(); 
  
  return (
    <div className="d-flex">
      <div>
        <DashboardStudent />{" "}
      </div>
        <div className="container-studentAllBook">
          <p className="header-of-studentAllBook">My Books</p>
          <hr />
          
          <div className="srch-cls">
            <input
              className="form-control my-5"
              style={{ width: "600px" }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div>
            <label className="sort-text">Sort By :</label>
            <select className="slct-option">
                <option>Issue Date</option>
                <option>Due Date</option>
            </select>
            </div>
          </div>

          <div className="navbarss d-flex gap-4">
            <p>Issued Books (6)</p>
            <p>Pending to return (4)</p>
            <p>Returned Books (2)</p>
          </div>

          <Table responsive className="mt-5">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Return Date</th>
                <th>Fine (Rs. 10 per day) </th>
              </tr>
            </thead>
            {tempStudentDetailsArr.map((list)=>{
              if(list.key === obj.studentId){
                             
              return (            
            <tbody>
              <tr>
                <td>{list.book}</td>
                <td>{list.author}</td>
                <td>{list.issueDate}</td>
                <td>{list.dueDate}</td>
                <td>-</td>
                <td>0</td>
              </tr>
            </tbody>
              )
              }
            })}
          </Table>
        </div>
    </div>
  );
}
export default MyBook