import React from "react";
import "./Issuedbook.css";
import Table from "react-bootstrap/Table";
import ModalIssueBook from "./ModalForIssueBooks";
import { MdAssignmentReturn } from "react-icons/md";

function Issuedbooks() {
  return (

    <div className="container-issuebooks">
        <p className="header-of-issuedbooks">Issued Books</p>
        <hr />
        <div className="srch-cls"><input class="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search" aria-label="Search" />
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
      <tbody>
        <tr>
          <td>It Start With Us</td>
          <td>Nitha Samuel</td>
          <td>02-11-2022 </td>
          <td>09-11-2022</td>
          <td>10</td>
          <td><MdAssignmentReturn /></td>     
        </tr>
        <tr>
          <td>The Breach</td>
        <td>Anjali Thomas</td>
        <td>02-11-2022</td>
        <td>09-11-2022</td>
        <td>10</td>
        <td><MdAssignmentReturn /></td>
        </tr>
        <tr>
          <td>Rich Dad Poor Dad</td>
          <td>Rahul S</td>
          <td>03-11-2022</td>
          <td>10-11-2022</td>
          <td>0</td>
          <td><MdAssignmentReturn /></td>
        </tr>
      </tbody>
    </Table>

    </div>
  );
}

export default Issuedbooks;
