import React, { useState ,useContext } from "react";
// Importing Css
import "./Students.css";
// Importing Table From Bootstrap
import Table from "react-bootstrap/Table";
//Importing Modal For Adding Students
import ModalForStudents from "./ModalForStudent";
//Importing Dashboard
import Dashboard from "../Dashboard/dashboard";
//Importing StudentListArray 
import { studentListContext } from '../../App';
//Importng Delete Modal
import Delete from "./modalDeleteStudent";
//Importng Edit Modal
import Edit from "./ModalForEditStudent";
//import Navigation Hook
import { useNavigate } from "react-router-dom";
//importing Logo Of Icon
import { HiOutlineEye } from "react-icons/hi";


function Students() {

  const [studentListArray] = useContext(studentListContext)
  const [searches, setSearches] = useState("")

  const navigate = useNavigate();

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
              <td key={item.nameId}>{item.name}</td>
              <td >{item.email}</td>
              <td>
                <Edit 
                keyId={item.stdId}
                editName={item.name}
                editEmail={item.email}
                /> 
                <Delete  keyID={item.stdId} />  
                <HiOutlineEye
                style={{ color: "#7E7E7F" }}
                onClick = {() =>{
                  navigate("/students/view")
                }}
                />
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
