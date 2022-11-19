import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { IoBookSharp } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import Whitelogo from '../../Images/Mainlogo-white-fill.png'

function Dashboard() {
  return (
    <div >
          <div>
                <ProSidebarProvider>
                        
                    <Sidebar>
                    
                        <Menu className='sidebar' style={{height: "100vh"}}>
                            <img src= {Whitelogo} alt="WhiteLogo" className='pt-4 ps-3' />
                            <MenuItem routerLink={<Link to="/isuuedbooks" />} className='pt-4' > <BsCheck2Circle /> Issued Books</MenuItem>
                            <MenuItem routerLink={<Link to="/allbooks" />} className='pt-3'> <IoBookSharp /> All Books</MenuItem>
                            <MenuItem routerLink={<Link to="/students" />} className='pt-3'> <MdOutlinePeopleAlt /> Students</MenuItem>
                            <hr className='bottom-line' />
                        </Menu>
                    </Sidebar>
                </ProSidebarProvider>
            </div>
    </div>
  )
}

export default Dashboard;