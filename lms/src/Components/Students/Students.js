import React, { useState ,useContext } from "react";
import "./Students.css";

import Table from "react-bootstrap/Table";


// import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

import ModalForStudents from "./ModalForStudent";
import Dashboard from "../Dashboard/dashboard";

import { studentListContext } from '../../App';

import Delete from "./modalDeleteStudent";

import Edit from "./ModalForEditStudent";




function Students() {

  const [studentListArray] = useContext(studentListContext)

  const [searches, setSearches] = useState("")

  return (
    <div className="d-flex">
      <div>
      <Dashboard />
      </div>

      <div className="container-students">
        <p className="header-of-students">Students</p>
        <hr />
        <div className="srch-cls">
          <input
            className="form-control my-5"
            style={{ width: "600px" }}
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searches}
            onChange={(e) => setSearches(e.target.value)}
          />
          <ModalForStudents />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {studentListArray.filter((value) => {
            if (searches === "") {
              return value;
            } else if (value.name.toLowerCase().includes(searches.toLowerCase())) {
              return value
            }
            else if(value.email.toLowerCase().includes(searches.toLowerCase())){
              return value
            }
            return 0;
            }).map((item) => {
            return (
          <tbody key={item.stdId}>
            <tr>
              <td>{item.name}</td>
              <td >{item.email}</td>
              <td>
                <Edit 
                keyId={item.stdId}
                editName={item.name}
                editEmail={item.email}
                /> 
                <Delete  keyID={item.stdId} />  <AiOutlineEye/>
              </td>
            </tr>
          </tbody>
          );
        })}
        </Table>
      </div>
    </div>
  );
}

export default Students;
