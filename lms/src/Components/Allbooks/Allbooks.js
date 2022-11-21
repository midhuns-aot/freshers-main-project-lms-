import React, { useContext } from "react";
// Importing CSS
import "./Allbooks.css";
// Importing Table
import Table from "react-bootstrap/Table";

//Imporing Modal For Adding Books
import ModalAddingBook from "./ModalForAddingBook";
// Importing Dashboard
import Dashboard from "../Dashboard/dashboard";
// Importing Modal For Deleting
import Delete from "./modalDelete";
//Importing Arrays
import { bookListContext } from "../../App";


import Edit from "./modalEdit"

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
          <ModalAddingBook />
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
              <tbody key={item.bookId}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>{item.language}</td>
                  <td>{item.totalCopies}</td>
                  <td>{item.remaining}</td>
                  <td>
                    {/* <Edit keyId={item.bookId} /> */}
                    <Edit 
                    keyId={item.bookId}
                    editName={item.name}
                    editAuthor={item.author}
                    editLanguage={item.language}
                    editTotalCopies={item.totalCopies}
                    editRemaining={item.remaining}

                    />
                    <Delete keyId={item.bookId} />
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
