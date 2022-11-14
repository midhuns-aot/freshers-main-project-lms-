import React from 'react'
import './Issuedbook.css'

function Issuedbooks() {
  return (
    <div className='Container'>

        <div className='navbars'>
            <h3>LMS</h3>
            <ul>
                <li> <a className='nav-item' href="isuuedBooks"> Issued Books</a></li>
                <li> <a className='nav-item' href="allBooks"> All Books</a></li>
                <li> <a className='nav-item' href="students">Students</a></li>
            </ul>
        </div>


        <div className='body-div'>
            <h2>Issued Books</h2>
            <hr />
            <div className='search-box'>
                <div>
                <input type="text" className='text-feild'/>
                </div>
                <button className='issue-book-btn'>Issue Book</button>
            </div>
        </div>
    </div>
  )
}

export default Issuedbooks