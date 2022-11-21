import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { studentListContext } from '../../App';
import { nanoid } from "nanoid";

function ModalForStudents() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [studentListArray, setStudentlistArray] = useContext(studentListContext)


  // const [student, setStudent] = useState([
  //   {
  //     id: "",
  //     name:"",
  //     email: ""
  //   }
  // ]);

  const [name, setName] = useState();
  const [email, setEmail] = useState();



  const handleSubmit = () => {
    const newStudent =  {
     stdId: nanoid(),
      name :name,
      email:email
    };
    setStudentlistArray([...studentListArray, newStudent]);
    setName("");
    setEmail("")
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
               value={name}
               required onChange={(e) => setName( e.target.value)}
               autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" 
              placeholder="Eg: johndoe@gmail.com" 
              value={email}
              required onChange={(e) => setEmail(e.target.value)}
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
