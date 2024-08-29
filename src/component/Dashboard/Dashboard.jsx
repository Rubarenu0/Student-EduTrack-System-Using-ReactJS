import React, { useState } from 'react'
import './Dashboard.css';
import { FaUserAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineMan } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";


const Dashboard = () => {
  const[value,setValue]=useState(5);
  const[value1,setValue1]=useState(10);
  const[value2,setValue2]=useState(15);

  return (
    <div className='Dashboard'>
      <div className="header">
        <h1>STUDENT MANAGEMENT</h1>
      </div>
      <div className="section1">
        <div className="container1">
          <div className="row1">
            <div className="col1" onClick={()=>setValue(value+1)}>
              <div><FaUserAlt className='icon'/></div>
              <div>
              <h2>{value}</h2>
              <p>Regular Student</p>
              </div>
            </div>
            <div className="col2" onClick={()=>setValue1(value1+1)}>
              <div><FaUserTie className='icon'/></div>
              <div>
              <h2>{value1}</h2>
              <p>Remedial Student</p>
              </div>
            </div>
            <div className="col3" onClick={()=>setValue2(value2+1)}>
              <div><MdOutlineMan className='icon'/></div>
              <div>
              <h2>{value2}</h2>
              <p>In Paid Club</p>
              </div>
            </div>
          </div>
          <h2>Menu</h2>
          <div className="row2">
            <div className="col1">
              <FaUserAlt className='icon'/>
              <p>Regular Enrollment</p>
            </div>
            <div className="col2">
              <SlNotebook className='icon'/>
              <p>Remedial Enrollment</p>
            </div>
            <div className="col3">
              <MdOutlineMan className='icon'/>
              <p>Club Management</p>
            </div>
          </div>
          <div className="row3">
            <div className="col1">
              <FaBookReader className='icon'/>
              <p>Classroom <br /> Management</p>
            </div>
            <div className="col2">
              <IoMail className='icon'/>
              <p>SMS/EMAIL</p>
            </div>
            <div className="col3">
              <FaFileAlt className='icon'/>
              <p>Attendance</p>
            </div>
          </div>
          <div className="row4">
            <div className="col1">
              <FaHospital className='icon'/><br /> 
              <p>Clinic</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section2">
        <div className="container2">
          .row
          <FaUserAlt className='icon'/>
          <p>Regular Enrollment</p>
        </div>
        <div className="container2">
          <SlNotebook className='icon'/>
          <p>Remedial Enrollment</p>
        </div>
        <div className="container3">
          <MdOutlineMan className='icon'/>
          <p>Club Management</p>
        </div>
      </div>
      <div className="section2">
        <div className="container1">
          <FaBookReader className='icon'/>
          <p>Classroom Management</p>
        </div>
        <div className="container2">
          <IoMail className='icon'/>
          <p>SMS/EMAIL</p>
        </div>
        <div className="container3">
          <FaFileAlt className='icon'/>
          <p>Attendance</p>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <FaHospital className='icon'/><br /> 
          <p>Clinic</p>
        </div>
      </div> */}
    </div>
  )
}

export default Dashboard
