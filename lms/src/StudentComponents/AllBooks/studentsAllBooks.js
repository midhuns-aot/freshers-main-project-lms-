import React, { useContext, useState } from "react";
import DashboardStudent from "../DashBoardStudent/dashboardStudent";
//Importing Table From Bootstrap
import Table from "react-bootstrap/Table";
import "./studentsAllBooks.css";
//Importing BookListArray
import { bookListContext } from "../../App";
//importing Logo Of Icon
import { HiOutlineEye } from "react-icons/hi";//Importing IssueBookListArray


function StudentsAllBooks() {
  const [bookListArray] = useContext(bookListContext);
  const [searches, setSearches] = useState("");
  const [sortName, setsortName] = useState("");




  const handleSort=(e)=>{
    setsortName(e.target.value)
    console.log(sortName)
    if(sortName === "author"){
      bookListArray.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
    }
    if(sortName === "bookTitle"){
      bookListArray.sort(function (a, b) {
        if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
        if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
        return 0;
      })
    }
  }




  return (
    <div className="d-flex">
      <div>
        <DashboardStudent />{" "}
      </div>
      <div className="container-studentAllBook">
        <p className="header-of-studentAllBook">All Books</p>
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
            <select className="slct-option" onClick={handleSort}>
              <option value="bookTitle">Book Title</option>
              <option value="author">Author</option>
            </select>
          </div>
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Language</th>
              <th>Total Copies</th>
              <th>Remaining</th>
              <th>Action</th>
            </tr>
          </thead>
          {bookListArray
            .filter((value) => {
              if (searches === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searches.toLowerCase())
              ) {
                return value;
              } else if (
                value.author.toLowerCase().includes(searches.toLowerCase())
              ) {
                return value;
              }
              return 0;
            }).map((book) => {
            return (
              <tbody key={book.bookId}>
                <tr>
                  <td key={book.bookTitleId}>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.language}</td>
                  <td>{book.totalCopies}</td>
                  <td>{book.remaining}</td>
                  <td><HiOutlineEye style={{color : "#7E7E7F"}} /></td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default StudentsAllBooks;
