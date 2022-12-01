import React, {useContext } from "react";
import Table from "react-bootstrap/esm/Table";
//Importing Dashboard
import Dashboard from "../Dashboard/dashboard";
import { IoIosArrowBack } from "react-icons/io";
//import Navigation Hook
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';


// Importing IssueBookListArray 
import { issueBookListContext } from "../../App";
// Importing StudentListArray 
import { studentListContext } from '../../App';
//Importing BookListArray 
import { bookListContext } from "../../App";
import { nanoid } from "nanoid";




function ViewStudent() {

const navigate = useNavigate();
const [studentListArray] = useContext(studentListContext)
const [issueBookListArray] =useContext(issueBookListContext);
const [bookListArray] = useContext(bookListContext);

  const tempStudentDetailsArr = issueBookListArray.map((item)=>{
    let studentObj = {
      viewStdnKey : nanoid(),
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
        <Dashboard />
      </div>
      
      <div className="viewContainer d-flex row text-nowrap p-5 gap-0">
        <div className="d-flex flex-column gap-3">
        <div className="back-to-stdnt-page">
          <p><IoIosArrowBack className="Arrow-icon"  onClick = {() =>{
                  navigate("/students")
                }} /> Students / {studentListArray.map((std)=>{
                    if(std.nameId === obj.studentId){
                    return(std.name)
                    } 
                })} </p>
        </div>
        <div className="student-name px-4 pt-3 pb-4" style={{ backgroundColor: "white" }}>
          <div className="name-email">
          <h6>{studentListArray.map((std)=>{
                    if(std.nameId === obj.studentId){
                    return(std.name)
                    } 
                })}</h6>
          <p>{studentListArray.map((std)=>{
                    if(std.nameId === obj.studentId){
                    return(std.email)
                    } 
                })}</p>
          </div>
          <div>
            <div className="d-flex gap-2"><p>Total Books issued</p> <p>5</p> </div>
            <div className="d-flex gap-4"><p>Returned Books</p> <p>4</p> </div>
            <div className="d-flex gap-5"><p>Total Fine</p> <p>Rs. 70</p> </div>
          </div>
        </div>
        </div>
        <div className="table-contents" style={{ backgroundColor: "white" }}>
          <h5>Issued Books</h5>
          <div className="search">
            <input
              className="form-control my-2"
              style={{ width: "600px"}}
              type="search"
              placeholder="Search by book title or author"
              aria-label="Search"
            />
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Return Date</th>
                <th>
                  Fine <br />
                  (Rs. 10 per day)
                </th>
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
    </div>
  );
}

export default ViewStudent;
