import React, { useState, useContext } from 'react';
// Import Buttons From Bootstrap
import Button from 'react-bootstrap/Button';
// Modal From Bootstrap
import Modal from 'react-bootstrap/Modal';
//Trash Icon
import { TbTrash } from 'react-icons/tb';
// Importing BookListArray 
import { bookListContext } from "../../App";

function Delete({keyId}) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [bookListArray, setBookListArray] = useContext(bookListContext);
  
//   DELETE FUNCTION
  const  handleDelete = () => {
    console.log(keyId)
    setBookListArray(bookListArray.filter((bookListArray) => bookListArray.bookId !==keyId))
  }

  return (
    <>
      <TbTrash className='trash m-3' onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='border border-0' closeButton>
          <Modal.Title style={{paddingLeft:"200px"}}>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>Are you sure to delete this?</Modal.Body>
        <Modal.Footer className="justify-content-center border border-0 gap-3 ">
            <div className='d-flex gap-3'>
          <Button className='noButton'  variant="outline-secondary" onClick={handleClose}>
            No
          </Button> 
          <Button className='yesButton'  onClick={() => {
              handleClose();
              handleDelete();
            }} >
            Yes
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete