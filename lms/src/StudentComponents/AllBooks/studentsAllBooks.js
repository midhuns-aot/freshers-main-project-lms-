import React from "react";
import DashboardStudent from "../DashBoardStudent/dashboardStudent";
//Importing Table From Bootstrap
import Table from "react-bootstrap/Table";
import "./studentsAllBooks.css";

function StudentsAllBooks() {
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
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Return Date</th>
                <th>Fine (Rs. 10 per day) </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>It Start With Us</td>
                <td>Colleen Hoover</td>
                <td>10-11-2022 </td>
                <td>18-11-2022</td>
                <td>18-11-2022</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>
        </div>
    </div>
  );
}

export default StudentsAllBooks;
