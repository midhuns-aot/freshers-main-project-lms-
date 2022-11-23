import React, { useContext } from "react";
import "./Issuedbook.css";
import Table from "react-bootstrap/Table";
import ModalIssueBook from "./ModalForIssueBooks";
// import { MdAssignmentReturn } from "react-icons/md";
import Dashboard from "../Dashboard/dashboard";
import Returnbook from "./ModalForReturn";

import { issueBookListContext } from '../../App'

function Issuedbooks() {

  const [issueBookListArray] =useContext(issueBookListContext)

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
          <td>{item.bookTitle}</td>
          <td>{item.student}</td>
          <td>{item.issueDate}</td>
          <td>{item.dueDate}</td>
          <td>10</td>
          <td>< Returnbook /></td>     
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
