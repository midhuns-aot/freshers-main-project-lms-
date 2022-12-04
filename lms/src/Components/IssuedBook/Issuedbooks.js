import React, { useContext, useState } from "react";
//Importing Css
import "./Issuedbook.css";
//Importing Table From Bootstrap
import Table from "react-bootstrap/Table";
//Importing Modal
import ModalIssueBook from "./ModalForIssueBooks";
//Importing Dashboard
import Dashboard from "../Dashboard/dashboard";
//Importing Modal For ReturnBook
import Returnbook from "./ModalForReturn";
//Importing IssueBookListArray
import { issueBookListContext } from "../../App";
//Importing BookListArray
import { bookListContext } from "../../App";
//Importing StudentListArray
import { studentListContext } from "../../App";

import { nanoid } from "nanoid";
import DateDiff from "date-diff";

function Issuedbooks() {
  const [issueBookListArray, setIissueBookListArray] =
    useContext(issueBookListContext);
  const [bookListArray] = useContext(bookListContext);
  const [studentListArray] = useContext(studentListContext);

  const [searches, setSearches] = useState("");

  const tempIssueBookListArr = issueBookListArray.map((issue) => {
    let issueObj = {
      keyId: nanoid(),
      bookTitle: "",
      bookTitleId: issue.key,
      student: "",
      issueDate: issue.issueDate,
      dueDate: issue.dueDate,
      fine: issue.key,
    };
    bookListArray.map((book) => {
      if (issue.bookTitle === book.bookTitleId) {
        issueObj.bookTitle = book.name;
        issueObj.bookTitleId = book.bookTitleId;
      }
    });

    studentListArray.map((std) => {
      if (issue.students === std.nameId) {
        issueObj.student = std.name;
      }
    });

    var date1 = new Date();
    var date2 = new Date(issue.dueDate);
    var diff = new DateDiff(date1, date2);
    let Fine = Math.round(diff.days()) * 10;
    if (Fine > 0) {
      issueObj.fine = Fine;
    } else {
      issueObj.fine = 0;
    }
    return issueObj;
  });

  return (
    <div className="d-flex">
      <div>
        <Dashboard />
      </div>
      <div className="container-issuebooks">
        <p className="header-of-issuedbooks">Issued Books</p>
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
          <ModalIssueBook />
        </div>

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
          {tempIssueBookListArr
            .filter((value) => {
              if (searches === "") {
                return value;
              } else if (
                value.bookTitle.toLowerCase().includes(searches.toLowerCase())
              ) {
                return value;
              } else if (
                value.student.toLowerCase().includes(searches.toLowerCase())
              ) {
                return value;
              }
              return 0;
            })
            .map((item) => {
              return (
                <tbody key={item.keyId}>
                  <tr>
                    <td>{item.bookTitle}</td>
                    <td>{item.student}</td>
                    <td>{item.issueDate}</td>
                    <td>{item.dueDate}</td>
                    <td>{item.fine}</td>
                    <td>
                      <Returnbook
                        issueTitleId={item.bookTitleId}
                        issueBooksId={item.keyId}
                        tempIssueBookListArr={tempIssueBookListArr}
                      />
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

export default Issuedbooks;
