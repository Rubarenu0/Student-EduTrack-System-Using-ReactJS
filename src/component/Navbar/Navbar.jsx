import React from 'react'
import './navbar.css';
import { FaUserFriends } from "react-icons/fa";
import { BsWindowDesktop } from "react-icons/bs";
import { RiSettings6Fill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src="./hicetlogo.png" alt="" />
      </div>
      <div className="option1">
        <FaUserFriends className='icon'/><br />
        <span>Student Management</span>
      </div>
      <div className="option2">
        <BsWindowDesktop className='icon'/><br />
        <span>Financial Management</span>
      </div>
      <div className="option3">
        <RiSettings6Fill className='icon'/><br />
        <span>Quality Control</span>
      </div>
      <div className="option3">
        <TbReport className='icon'/><br />
        <span>Report Delivery</span>
      </div>
      <div className="option4">
        <FaFileAlt className='icon'/><br />
        <span>Attendance</span>
      </div>
      <div className="row">
        <div className='col'>
            <BsFillQuestionCircleFill className='icon1'/>
        </div>
        <div className='col'>
            <IoSettings className='icon1'/>
        </div>
        <div className='col'>
            <FiLogOut className='icon1'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
