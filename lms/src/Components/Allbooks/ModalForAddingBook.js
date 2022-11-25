import React, { useState, useContext } from "react";
// Import Buttons From Bootstrap
import Button from "react-bootstrap/Button";
// Form From Bootstrap
import Form from "react-bootstrap/Form";
// Modal From Bootstrap
import Modal from "react-bootstrap/Modal";
// Importing BookListArray 
import { bookListContext } from "../../App";
//For Unique Id
import { nanoid } from "nanoid";


function ModalAddingBook() {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);setErrors(false)};
  const handleShow = () => setShow(true);

  const [bookListArray, setBookListArray] = useContext(bookListContext);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [totalCopies, setTotalCopies] = useState("");
  const [remaining, setRemaining] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = () => {
    if (name.length === 0 ||author.length ===0 || language.length===0) {
      setErrors(true);
      handleShow()
      return 0;
    }
    else{
    const newItem = {
      bookId: nanoid(),
      bookTitleId : nanoid(),
      name: name,
      author: author,
      language: language,
      totalCopies: totalCopies,
      remaining: remaining,
    };
    setBookListArray([...bookListArray, newItem]);
    setName("");
    setAuthor("");
    setLanguage("");
    setTotalCopies("");
    setRemaining("");
    console.log(newItem)
  };
}

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
              {errors && name.length <= 0 ? (
                <label className="errormsg-allbooks">Name Feild Cannot be Empty</label>
              ) : (
                ""
              )}
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
              {errors && author.length <= 0 ? (
                <label className="errormsg-allbooks">Author Feild Cannot be Empty</label>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group>  
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
            {errors && language.length <= 0 ? (
                <label className="errormsg-allbooks">Please Select the Language</label>
              ) : (
                ""
              )}
              </Form.Group>

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
