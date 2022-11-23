import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { studentListContext } from "../../App";
import { nanoid } from "nanoid";

function ModalForStudents() {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);setErrors(false);}  
  const handleShow = () => setShow(true);

  const [studentListArray, setStudentlistArray] =
    useContext(studentListContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(false);
  const [passOne, setPassOne] = useState("");
  const [passTwo, setPassTwo] = useState("");

  const handleSubmit = () => {
    if (name.length === 0) {
      setErrors(true);
      handleShow()
      return 0
    }
    else if(passOne !== passTwo){
      setErrors(true);
      handleShow()
      return 0
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) || email.length === 0){
      setErrors(true);
      handleShow()
      return 0
    }
    else{
    const newStudent = {
      stdId: nanoid(),
      name: name,
      email: email,
      passOne: passOne,
      passTwo: passTwo
    };
    setStudentlistArray([...studentListArray, newStudent]);
    setName("");
    setEmail("");
    setPassOne("");
    setPassTwo("");
    setErrors(false);
    console.log(newStudent);
    return 0
  }
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
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              {errors && name.length <= 0 ? (
                <label className="errormsg-stdn">Name Feild Cannot be Empty</label>
              ) : (
                ""
              )}
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
              {errors ?(
                <label className="errormsg-stdn">Invalid format</label>
              ) : ("")}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password"
              placeholder="******" 
              value={passOne}
                required
                onChange={(e) => setPassOne(e.target.value)}
              />
              {errors && passOne.length <= 0 ? (
                <label className="errormsg-stdn">Passwords Doesn't Match</label>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Conform Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="******"
              value={passTwo}
              required
              onChange={(e) => setPassTwo(e.target.value)}
              />
              {errors && passTwo.length <= 0 ? (
                <label className="errormsg-stdn">Passwords Doesn't Match</label>
              ) : (
                ""
              )}
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
