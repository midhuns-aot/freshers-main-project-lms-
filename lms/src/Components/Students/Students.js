import React, { useContext } from "react";
import "./Students.css";

import Table from "react-bootstrap/Table";

import { RiPencilFill } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

import ModalForStudents from "./ModalForStudent";
import Dashboard from "../Dashboard/dashboard";

import { studentListContext } from '../../App';


function Students() {

  const [studentListArray] = useContext(studentListContext)

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
          />
          <ModalForStudents />
        </div>

        <Table responsive>
          <thead align="center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {studentListArray.map((item) => {
            return (
          <tbody align="center">
            <tr>
              <td>{item.name}</td>
              <td >{item.email}</td>
              <td>
                <RiPencilFill  /> <HiOutlineTrash className="trash ms-2"/> <AiOutlineEye className="ms-2"/>
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
