import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { issueBookListContext } from '../../App'

function ModalIssueBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [issueBookListArray, setIissueBookListArray] =useContext(issueBookListContext)

  const [issueBook, setIissueBook]= useState([
    {
      bookTitle:"",
      student: "",
      issueDate:"",
      dueDate: ""
    }
  ])

  const handleSubmit = () =>{
    const newData = {
      id: new Date().getTime().toString(),
      bookTitle: issueBook.bookTitle,
      student: issueBook.student,
      issueDate: issueBook.issueDate,
      dueDate: issueBook.dueDate
    }
    setIissueBookListArray([...issueBookListArray,newData]);
    setIissueBook("")
    console.log(newData)
    }

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
              <Form.Label>Book</Form.Label>
              <Form.Control type="text"
               placeholder="Select Book" 
               autoFocus 
               value={issueBook.bookTitle}
               required
               onChange={(e) =>setIissueBook({ ...issueBook, bookTitle: e.target.value })}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student</Form.Label>
              <Form.Control type="text"
               placeholder="Select Student" 
               value={issueBook.student}
               required
               onChange={(e) =>setIissueBook({ ...issueBook, student: e.target.value })}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Issue Date</Form.Label>
              <Form.Control type="date"
               placeholder="09-11-2022" 
               value={issueBook.issueDate}
               required
               onChange={(e) =>setIissueBook({ ...issueBook, issueDate: e.target.value })}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" 
              placeholder="Select Book" 
              value={issueBook.dueDate}
               required
               onChange={(e) =>setIissueBook({ ...issueBook, dueDate: e.target.value })}
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
