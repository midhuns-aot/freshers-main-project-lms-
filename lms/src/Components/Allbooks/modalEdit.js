import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { bookListContext } from "../../App";

//Importig Pencil Icon 
import { RiPencilFill } from "react-icons/ri";


function ModalEditingBook({keyId, editName, editAuthor, editLanguage, editTotalCopies, editRemaining}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bookListArray, setBookListArray] = useContext(bookListContext);

 
  const [name, setName] = useState(editName);
  const [author, setAuthor] = useState(editAuthor);
  const [language, setLanguage] = useState(editLanguage);
  const [totalCopies, setTotalCopies] = useState(editTotalCopies);
  const [remaining, setRemaining] = useState(editRemaining);

  const editBookList = () =>{
    setBookListArray(
      bookListArray.map((bookListArray) => {
        if(bookListArray.bookId === keyId) {
          console.log("clicked")
        return {
          ...bookListArray,
          name: name,
          author: author,
          language: language,
          totalCopies: totalCopies,
          remaining: remaining,
        };
      }
      return  bookListArray;
      })
      ) 
}
  return (
    <>
      <RiPencilFill  onClick={handleShow}/>

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
              value={language}
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
                  value={remaining}
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
              editBookList();
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditingBook;
