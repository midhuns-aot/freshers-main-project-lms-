import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { bookListContext } from "../../App";
import { nanoid } from "nanoid";

// const tableContent = createContext();

function ModalAddingBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bookListArray, setBookListArray] = useContext(bookListContext);

  // const [book, setBook] = useState([
  //   {
  //     bookId: "",
  //     name: "",
  //     author: "",
  //     language: "",
  //     totalCopies: "",
  //     remaining: "",
  //   },
  // ]);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [totalCopies, setTotalCopies] = useState("");
  const [remaining, setRemaining] = useState("");

  const handleSubmit = () => {
    const newItem = {
      bookId: nanoid(),
      name: name,
      author: author,
      language: language,
      totalCopies: totalCopies,
      remaining: remaining,
    };
    setBookListArray([...bookListArray, newItem]);
    // console.log(newItem);
    setName("");
    setAuthor("");
    setLanguage("");
    setTotalCopies("");
    setRemaining("");
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
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Jane Austen"
                value={author}
                required
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>

            <Form.Label>Language</Form.Label>
            <Form.Select
              className="mb-3"
              controlid="exampleForm.ControlInput1"
              required
              onChange={(e) => setLanguage(e.target.value)}
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
                  value={totalCopies}
                  onChange={(e) => setTotalCopies(e.target.value)}
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
                  onChange={(e) => setRemaining(e.target.value)}
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
