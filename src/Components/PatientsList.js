import React from 'react'

import './DoctorsList.css'

import { FaBackward, FaUserDoctor } from 'react-icons/fa6';
import { FaCopyright, FaUser } from 'react-icons/fa';
import { BsFillCalendar2CheckFill, BsFillCalendarXFill, BsFillCalendar2PlusFill, BsFillCalendar2XFill, BsBack, BsArrow90DegLeft, BsArrowLeft } from "react-icons/bs";




function PatientsList() {
  return (
<div className='main-container'>
        <div className='left-container'>

        <div className=''>
        <div className=''>
        <i className='patient-pp'><BsArrowLeft/></i>

                <h4>Doctor Management</h4>
                <br/>
                <div className='users-list'>
                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <i className='patient-pp'><FaUser/></i>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='doctor-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='doctor-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='doctor-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                </div>
            </div>


                
            </div>
            
           

            <div className='footer'>
            <div className='footer-content'><i><FaCopyright/></i>
                <p>  deCancer, A skin cancer detection application.</p>
                </div>
            </div>
            
            



        </div>
        <div className='right-container'>
            <div className='online-users'>
                <h4>Online users</h4>
                <p className='doctor-online'>Doctors</p>
                <p className='patient-online'>Patients</p>

                <div className='users-list'>
                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='doctor-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='doctor-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='doctor-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='patient-pp'><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i><FaUser/></i>
                        <p> John Doe </p>
                        <button> View user </button>
                        
                    </div>

                </div>
            </div>


        </div>
        

    </div>  )
}

export default PatientsList