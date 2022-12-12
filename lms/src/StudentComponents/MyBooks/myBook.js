import React, {useContext, useState } from 'react'
import DashboardStudent from '../DashBoardStudent/dashboardStudent'
import Table from "react-bootstrap/Table";

// Importing IssueBookListArray 
import { issueBookListContext } from "../../App";
// Importing StudentListArray 
import { studentListContext } from '../../App';
//Importing BookListArray 
import { bookListContext } from "../../App";
import {useParams} from 'react-router-dom';
import { nanoid } from 'nanoid';

import DateDiff from "date-diff";



function MyBook() {

  const [studentListArray] = useContext(studentListContext);
  const [issueBookListArray] =useContext(issueBookListContext);
  const [bookListArray] = useContext(bookListContext);

  const [searches, setSearches] = useState("");
  const [sortName, setsortName] = useState("");

  const tempStudentDetailsArr = issueBookListArray.map((item)=>{
    let studentObj = {
      keyId : nanoid(),
      key : item.key,
      book : "",
      author : "",
      issueDate : item.issueDate,
      dueDate : item.dueDate,
      fine: item.key,
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
    var date1 = new Date();
    var date2 = new Date(item.dueDate);
    var diff = new DateDiff(date1, date2);
    let Fine = Math.round(diff.days()) * 10;
    if (Fine > 0) {
      studentObj.fine = Fine;
    } else {
      studentObj.fine = 0;
    }

    return studentObj

  })
  const obj = useParams(); 


//Sorting
  
  const handleMybooksSort = (e) => {
    setsortName(e.target.value);

    if (sortName === "newest") {
      console.log(sortName);
      issueBookListArray.sort(
        (objA, objB) => new Date(objA.issueDate) - new Date(objB.issueDate)
      );
    }

    if (sortName === "oldest") {
      issueBookListArray.sort(
        (objA, objB) => new Date(objB.issueDate) - new Date(objA.issueDate)
      );
    }
  };


  
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
              value={searches}
              onChange={(e) => setSearches(e.target.value)}
            />
            <div>
            <label className="sort-text">Sort By :</label>
            <select className="slct-option"onClick={handleMybooksSort}>
                <option value = "newest">Newest</option>
                <option value = "oldest">Oldest</option>
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
            {tempStudentDetailsArr
            .filter((value) => {
              if (searches === "") {
                return value;
              } else if (
                value.book.toLowerCase().includes(searches.toLowerCase())
              ) {
                return value;
              } else if (
                value.author.toLowerCase().includes(searches.toLowerCase())
              ) {
                return value;
              }
              return 0;
            }).map((list)=>{
              if(list.key === obj.studentId){
                             
              return (            
            <tbody key={list.keyId}>
              <tr>
                <td>{list.book}</td>
                <td>{list.author}</td>
                <td>{list.issueDate}</td>
                <td>{list.dueDate}</td>
                <td>-</td>
                <td>{list.fine}</td>
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