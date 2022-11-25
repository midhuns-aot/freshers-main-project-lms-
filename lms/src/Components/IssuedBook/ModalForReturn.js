import React, { useState, useContext } from 'react';
// Import Buttons From Bootstrap
import Button from 'react-bootstrap/Button';
// Modal From Bootstrap
import Modal from 'react-bootstrap/Modal';
//Icon Of Pencil
import { MdOutlineAssignmentReturn } from "react-icons/md";
// Importing IsuueBookListArray 
import { issueBookListContext } from '../../App'

function Returnbook({setSelectedBookKey, bookTitles, countRemaining, issueId}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [issueBookListArray, setIssueBookListArray] =useContext(issueBookListContext)

  //For Removing Returned Books
  const  handleRemove = () => {
    console.log(issueId)
    setIssueBookListArray(issueBookListArray.filter((issueBookListArray) => issueBookListArray.issueId !==issueId))
  }
  
  return (
    <>
      <MdOutlineAssignmentReturn className='edit' onClick={()=> {handleShow();setSelectedBookKey(bookTitles)}}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='border border-0' closeButton>
          <Modal.Title style={{paddingLeft:"150px"}}>Mark as returned</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>Are you sure to mark this book as returned?</Modal.Body>
        <Modal.Footer className="justify-content-center border border-0 gap-3 ">
          <div className='d-flex gap-3'>
          <Button className='noButton' variant="outline-secondary" onClick={handleClose}>
            No
          </Button> 
          <Button className='yesButton' onClick={()=> {handleClose();countRemaining();handleRemove()}}>
            Yes
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Returnbook;