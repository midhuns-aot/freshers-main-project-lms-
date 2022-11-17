import React, { useContext } from "react";
import "./Allbooks.css";
import Table from "react-bootstrap/Table";
import { RiPencilFill } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import ModaAddingBook from "./ModalForAddingBook";
import Dashboard from "../Dashboard/dashboard";

import { bookListContext } from "../../App";

function Allbooks() {
  const [bookListArray] = useContext(bookListContext);
  return (
    <div className="d-flex">
      <div>
        <Dashboard />
      </div>

      <div className="container-Allbooks">
        <p className="header-of-issuedbooks">All Books</p>
        <hr />
        <div className="srch-cls">
          <input
            className="form-control my-5"
            style={{ width: "600px" }}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <ModaAddingBook />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Language</th>
              <th>Total Copies</th>
              <th>Remaining</th>
              <th>Actions</th>
            </tr>
          </thead>
          {bookListArray.map((item) => {
            return (
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>{item.language}</td>
                  <td>{item.totalCopies}</td>
                  <td>{item.remaining}</td>
                  <td>
                    <RiPencilFill /> <HiOutlineTrash />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default Allbooks;
