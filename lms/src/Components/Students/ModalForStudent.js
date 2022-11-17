import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { studentListContext } from '../../App';

function ModalForStudents() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [studentListArray, setStudentlistArray] = useContext(studentListContext)


  const [student, setStudent] = useState([
    {
      id: "",
      name:"",
      email: ""
    }
  ]);

  const handleSubmit = () => {
    console.log("clicked")
    const newStudent =  {
      id: new Date().getTime().toString(),
      name :student.name,
      email:student.email
    };
    setStudentlistArray([...studentListArray, newStudent]);
    setStudent("");
    console.log(newStudent);
  };

  return (
    <>
      <Button className="issuedbook-btn" variant="primary" onClick={handleShow}>
        Add New Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
               placeholder="Eg: John Doe" 
               value={student.name}
               required onChange={(e) => setStudent({ ...student, name: e.target.value })}
               autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" 
              placeholder="Eg: johndoe@gmail.com" 
              value={student.email}
              required onChange={(e) => setStudent({ ...student, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
               placeholder="******" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Conform Password</Form.Label>
              <Form.Control type="password" placeholder="******" />
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
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForStudents;
