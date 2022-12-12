import React, { useState, useContext, useEffect } from 'react';
// Import Buttons From Bootstrap
import Button from 'react-bootstrap/Button';
// Modal From Bootstrap
import Modal from 'react-bootstrap/Modal';
//Icon Of Pencil
import { MdOutlineAssignmentReturn } from "react-icons/md";
// Importing IsuueBookListArray 
import { issueBookListContext } from '../../App'

import { bookListContext } from "../../App";

function Returnbook({issueTitleId}) {

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
      
      //console.log(retrnDate)
      return (count)
    })
  }


  const thisMonth = new Date().getMonth() + 1;
  useEffect(() => {
    setIssueBookListArray(
      issueBookListArray.map((book) => {
        if (book.key === issueTitleId) {
          return {
            ...book,
            isReturned: true,
            returnDate:
              new Date().getFullYear() +
              "-" +
              thisMonth +
              "-" +
              new Date().getDate(),
          };
        }
        return book;
      })
    );
  }, []);
  



  // let setReturnClick = tempIssueBookListArr.map((item)=>{ 
  //   if(item.keyId ===returnClickId )
  //   item.returnClick = true
   
  // })
  

  // let setReturnClick = ()=>{
  //   for(let i = 0; i<tempIssueBookListArr.length; i++){
  //     if(tempIssueBookListArr[i].keyId === returnClickId){
  //       tempIssueBookListArr[i].returnClick = true
  //     }
  //     console.log(tempIssueBookListArr[i].keyId)
  //   }
  // }


  // const removeReturnedBooks = () => {
  //   for(let i = 0; i <= tempIssueBookListArr.length; i++ ){
  //     console.log("klai" +tempIssueBookListArr[i].keyId )
  //     console.log("koi" + issueBooksId)
  //   tempIssueBookListArr.filter((tempIssueBookListArr) => tempIssueBookListArr[i].keyId !==issueBooksId)
  //   }
  // } 
  
  return (
    <>
      <MdOutlineAssignmentReturn className='edit'  onClick={()=> {handleShow(); console.log("clickeed")}}/>
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
          <Button className='yesButton' onClick={()=> {handleClose();countRemaining()}}>
            Yes
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Returnbook;