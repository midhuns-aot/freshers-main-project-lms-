import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { bookListContext } from "../../App";

// const tableContent = createContext();

function ModalAddingBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bookListArray, setBookListArray] = useContext(bookListContext);

  const [book, setBook] = useState([
    {
      id: "",
      name: "",
      author: "",
      language: "",
      totalCopies: "",
      remaining: "",
    },
  ]);


  const handleSubmit = () => {
    const newItem = {
      id: new Date().getTime().toString(),
      name: book.name,
      author: book.author,
      language: book.language,
      totalCopies: book.totalCopies,
      remaining: book.remaining,
    };
    setBookListArray([...bookListArray, newItem]);
    setBook("");
    console.log(newItem);
  };

  return (
    <>
      <Button className="addbook-btn" variant="primary" onClick={handleShow}>
        Add Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Pride and Prejudice"
                autoFocus
                value={book.name}
                required
                onChange={(e) => setBook({ ...book, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Jane Austen"
                value={book.author}
                required
                onChange={(e) => setBook({ ...book, author: e.target.value })}
              />
            </Form.Group>

            <Form.Label>Language</Form.Label>
            <Form.Select
              className="mb-3"
              controlid="exampleForm.ControlInput1"
              required
              onChange={(e) => setBook({ ...book, language: e.target.value })}
            >
              <option>Select Language</option>
              <option>English</option>
              <option>Malayalam</option>
              <option>Hindi</option>
            </Form.Select>

            <div className="childrens-add-modal">
              <Form.Group
                className="mb-3"
                controlid="exampleForm.ControlInput1"
              >
                <Form.Label>Total Copies</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="5"
                  required
                  value={book.totalCopies}
                  onChange={(e) =>
                    setBook({ ...book, totalCopies: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlid="exampleForm.ControlInput1"
              >
                <Form.Label>Remaining</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="2"
                  required
                  onChange={(e) =>
                    setBook({ ...book, remaining: e.target.value })
                  }
                />
              </Form.Group>
            </div>
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
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddingBook;
