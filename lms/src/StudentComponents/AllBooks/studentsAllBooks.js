import React, { useContext } from "react";
import DashboardStudent from "../DashBoardStudent/dashboardStudent";
//Importing Table From Bootstrap
import Table from "react-bootstrap/Table";
import "./studentsAllBooks.css";
//Importing BookListArray
import { bookListContext } from "../../App";
//importing Logo Of Icon
import { HiOutlineEye } from "react-icons/hi";

function StudentsAllBooks() {
  const [bookListArray] = useContext(bookListContext);
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
          />
          <div>
            <label className="sort-text">Sort By :</label>
            <select className="slct-option">
              <option>Issue Date</option>
              <option>Due Date</option>
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
          {bookListArray.map((book) => {
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
