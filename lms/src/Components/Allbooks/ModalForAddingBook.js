import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModaAddingBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='addbook-btn' variant="primary" onClick={handleShow}>
      Add Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Select Book"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Select Student"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="select"
                placeholder="Select Book"/>
            </Form.Group> 

            <div className='childrens-add-modal'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Copies</Form.Label>
              <Form.Control
                type="text"
                placeholder="Select Student"/>
            </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Remaining</Form.Label>
              <Form.Control
                type="text"
                placeholder="Select Student"/>
            </Form.Group>
            </div>


                     
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='modal-buttons1' variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='modal-buttons2' variant="primary" onClick={handleClose}>
          Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModaAddingBook;

