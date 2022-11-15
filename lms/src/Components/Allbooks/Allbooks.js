import React from "react";
import "./Allbooks.css";
import Table from "react-bootstrap/Table";
import { RiPencilFill } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import ModaAddingBook from "./ModalForAddingBook";

function Allbooks() {
  return (

    <div className="container-Allbooks">
        <p className="header-of-issuedbooks">All Books</p>
        <hr />
        <div className="srch-cls"><input class="form-control my-5" style={{ width: "600px" }} type="search" placeholder="Search" aria-label="Search" />
        <ModaAddingBook /></div>

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
          <td><RiPencilFill />  <HiOutlineTrash /></td>     
        </tr>
        <tr>
          <td>The Breach</td>
        <td>Anjali Thomas</td>
        <td>02-11-2022</td>
        <td>09-11-2022</td>
        <td>10</td>
        <td><RiPencilFill />  <HiOutlineTrash /></td>
        </tr>
        <tr>
          <td>Rich Dad Poor Dad</td>
          <td>Rahul S</td>
          <td>03-11-2022</td>
          <td>10-11-2022</td>
          <td>0</td>
          <td><RiPencilFill />  <HiOutlineTrash /></td>
        </tr>
      </tbody>
    </Table>

    </div>
  );
}

export default Allbooks;