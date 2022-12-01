import React from 'react'
import DashboardStudent from '../DashBoardStudent/dashboardStudent'
import Table from "react-bootstrap/Table";

function myBook() {
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
export default myBook