import React from 'react'
import Table from 'react-bootstrap/esm/Table'

function ViewStudent() {
    return (
      <>
        
        <div className='container d-flex row gap-4 text-nowrap p-5'>
          <div className='px-4 pt-3 pb-4' style={{backgroundColor: "white"}}>
            <h6>Nitha Samuel</h6>
            <p>nithasamuel@gmail.com</p>
          </div>
          <div style={{backgroundColor: "white"}}>
          <h5>Issued Books</h5>
          <div className='search'>
            <input className="form-control my-2" 
            style={{ width: "600px" }} 
            type="search" 
            placeholder="Search by book title or author" 
            aria-label="Search"
            />
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Return Date</th>
                <th>Fine <br />
                  (Rs. 10 per day)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>It Start With Us</td>
                <td>Colleen Hoover</td>
                <td>10-11-2022</td>
                <td>18-11-2022</td>
                <td>-</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>
        </div>
        </div>
      </>
    )
  }

export default ViewStudent