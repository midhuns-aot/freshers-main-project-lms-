import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { FaBookReader } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";

function Dashboard() {
  return (
    <div >
          <div>
                <ProSidebarProvider>
                        
                    <Sidebar>
                    
                        <Menu className='sidebar' style={{height: "100vh"}}>
                        <h2 className='icon-head'><FaBookReader style={{ width: "45px", height: "45px", color:"#fff"}} />
                        LMS</h2>
                            <MenuItem routerLink={<Link to="/isuuedbooks" />}> <BsCheck2Circle /> Issued Books</MenuItem>
                            <MenuItem routerLink={<Link to="/allbooks" />}> <IoBookSharp /> All Books</MenuItem>
                            <MenuItem routerLink={<Link to="/students" />}> <MdOutlinePeopleAlt /> Students</MenuItem>
                            <hr className='bottom-line' />
                        </Menu>
                    </Sidebar>
                </ProSidebarProvider>
            </div>
    </div>
  )
}

export default Dashboard;