import React from 'react'
// Importing SideBar Provider
import { ProSidebarProvider } from 'react-pro-sidebar'
// Importing SideBar Items
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// For Routing
import { Link } from 'react-router-dom';
//Importing CSS
import './dashboard.css';
//Book Icon
import { IoBookSharp } from "react-icons/io5";
//People Icon
import { MdOutlinePeopleAlt } from "react-icons/md";
//Check-Circle Icon
import { BsCheck2Circle } from "react-icons/bs";
//Importing logo of LMS
import Whitelogo from '../../Images/Mainlogo-white-fill.png'

function Dashboard() {
  return (
    <div >
          <div>
                <ProSidebarProvider>
                        
                    <Sidebar>
                        <Menu className='sidebar' style={{height: "100vh"}}>
                            <img src= {Whitelogo} alt="WhiteLogo" className='pt-4 ps-3' />
                            <MenuItem routerLink={<Link to="/isuuedbooks"/>} className='pt-4' > <BsCheck2Circle /> Issued Books</MenuItem>
                            <MenuItem routerLink={<Link to="/allbooks"/>} className='pt-3'> <IoBookSharp /> All Books</MenuItem>
                            <MenuItem routerLink={<Link to="/students"/>} className='pt-3'> <MdOutlinePeopleAlt /> Students</MenuItem>
                            <hr className='bottom-line' />
                        </Menu>
                    </Sidebar>
                </ProSidebarProvider>
            </div>
    </div>
  )
}

export default Dashboard;