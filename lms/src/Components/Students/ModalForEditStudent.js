import React, { useState, useContext } from "react";
// Importing Buttons From Bootstrap
import Button from "react-bootstrap/Button";
// Importing Form From Bootstrap
import Form from "react-bootstrap/Form";
// Importing Modal From Bootstrap
import Modal from "react-bootstrap/Modal";
//Imporing The Array 
import { studentListContext } from "../../App";
// Imporing The Pencil Icon
import { RiPencilFill } from "react-icons/ri";

function ModalForEditingStudents({ keyId, editName, editEmail }) {

  // Form Controls
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Retriving Array Using Context Method
  const [studentListArray, setStudentlistArray] = useContext(studentListContext);

  // Reriving the inputs Which is by passing properties
  const [name, setName] = useState(editName);
  const [email, setEmail] = useState(editEmail);

  // Function For Editing 
  const editStudent = () => {
    console.log("hai");
    setStudentlistArray(
      studentListArray.map((studentListArray) => {
        if (studentListArray.stdId === keyId) {
          return {
            ...studentListArray,
            name: name,
            email: email,
          };
        }
        return studentListArray;
      })
    );
  };

  return (
    <>
      <RiPencilFill onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Eg: johndoe@gmail.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="******" />
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
              editStudent();
            }}
          >
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForEditingStudents;
