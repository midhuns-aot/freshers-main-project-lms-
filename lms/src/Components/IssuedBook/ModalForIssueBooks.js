import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { issueBookListContext } from "../../App";
import { studentListContext } from '../../App';
import { bookListContext } from "../../App";
import { nanoid } from "nanoid";

function ModalIssueBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [issueBookListArray, setIissueBookListArray] =useContext(issueBookListContext);

  const [studentListArray, setStudentListArray] = useContext(studentListContext)
  const [bookListArray, setBookListArray] = useContext(bookListContext);


  const [bookTitle, setBookTitle] = useState();
  const [students, setStudents] = useState();
  const [issueDate, setIssueDate] = useState();
  const [ dueDate, setDueDate] = useState();

  const handleSubmit = () => {
    const newData = {
      issueId: nanoid(),
      bookTitle: bookTitle,
      student: students,
      issueDate: issueDate,
      dueDate: dueDate,
    };
    setIissueBookListArray([...issueBookListArray, newData]);
    setBookTitle("");
    setStudents("");
    setIssueDate("");
    setDueDate("");
  };

  return (
    <>
      <Button className="issuedbook-btn" variant="primary" onClick={handleShow}>
        Issue Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Issue Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"#09174A"}}>Book</Form.Label>
              <Form.Select
                type="select"
                placeholder="Select Book"
                autoFocus
                value={bookTitle}
                required
                onChange={(e) =>setBookTitle(e.target.value )}
              >
                <option>Select Book</option>
                {bookListArray.map((item)=>{
                  return <option>{item.name}</option>
                })}
                
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

              <Form.Label style={{color:"#09174A"}}>Student</Form.Label>
              <Form.Select
                type="select"
                placeholder="Select Book"
                autoFocus
                value={students}
                required
                onChange={(e) =>setStudents(e.target.value )}
              >
                <option>Select Student</option>
                {studentListArray.map((item)=>{
                  return <option>{item.name}</option>
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Issue Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="09-11-2022"
                value={issueDate}
                required
                onChange={(e) =>setIssueDate(e.target.value )}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select Book"
                value={dueDate}
                required
                onChange={(e) =>setDueDate(e.target.value )}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-buttons1"
            variant="outline-secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className="modal-buttons2"
            variant="primary"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
          >
            Issue Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalIssueBook;
