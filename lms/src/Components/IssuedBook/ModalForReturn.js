import React, { useState, useContext } from 'react';
// Import Buttons From Bootstrap
import Button from 'react-bootstrap/Button';
// Modal From Bootstrap
import Modal from 'react-bootstrap/Modal';
//Icon Of Pencil
import { MdOutlineAssignmentReturn } from "react-icons/md";
// Importing IsuueBookListArray 
import { issueBookListContext } from '../../App'

import { bookListContext } from "../../App";

function Returnbook({issueTitleId, issueBooksId}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let count;
  const [bookListArray] = useContext(bookListContext);
  const [issueBookListArray, setIssueBookListArray] =useContext(issueBookListContext)


// Counting Remaining Incrementing
  const countRemaining = ()=>{
   count  = bookListArray.map((item)=>{
      if(item.bookTitleId === issueTitleId){
        item.remaining = ++item.remaining;
      }
      return (count)  
    })
  }


  // const calculateFine=()=>{ 
  //   const today = new Date();
  //   // let diffInTime = today.getTime() - dueDatecalc.getTime();
  //   let Difference = Math.floor((today.getTime() - dueDatecalc.getTime())/ (1000 * 3600 * 24))
  //   setfine(Math.round(Difference*10))
  //   if (fine < 0){
  //     setfine("-")
  //   }

  



  //Removing Returned Books From The List
  const removeReturnedBooks = () => {
    
    setIssueBookListArray(issueBookListArray.filter((issueBookListArray) => issueBookListArray.issueId !==issueBooksId))
  } 
  
  return (
    <>
      <MdOutlineAssignmentReturn className='edit'  onClick={()=> {handleShow()}}/>
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
          <Button className='yesButton' onClick={()=> {handleClose();countRemaining();removeReturnedBooks()}}>
            Yes
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Returnbook;