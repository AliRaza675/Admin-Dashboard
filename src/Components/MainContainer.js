import React from 'react'
// import { useNavigate } from 'react-router-dom'
import './MainContainer.css';
import Doctor from '../Images/doctor svg.svg'
import { FaMessage, FaUserDoctor } from 'react-icons/fa6';
import { FaCopyright, FaUser } from 'react-icons/fa';
import { BsFillCalendar2CheckFill, BsFillCalendarXFill, BsFillCalendar2PlusFill, BsFillCalendar2XFill } from "react-icons/bs";

function MainContainer() {
    // const navigate = useNavigate()

    // function goToDoctorsList(){
    //     navigate("/DoctorsList")
        
    // }

  return (

    

    <div className='main-container'>
        <div className='left-container'>

        <div className='Appointments'>
                <div className='upcoming-appointments'>
                <h3>Pending Appointments</h3>
                    <i><BsFillCalendar2PlusFill/></i>
                </div>
                <div className='scheduled-appointments'>
                    <h3>Scheduled Appointments</h3>
                    <i><BsFillCalendar2CheckFill/></i>
                
                </div>
                <div className='canceled-appointments'>
                <h3>Cancelled Appointments</h3>
                    <i><BsFillCalendar2XFill/></i>
                </div>

            </div>
            
            <div className='doctor-patient'>
                <div className='doctor'>
                    <h1>Doctor Management</h1>
                    <i><FaUserDoctor /></i>
                    {/* <img src= {Doctor} alt=''/> */}
                </div>

                <div className='patient'>
                    <h1>Patient Management</h1>
                    <i><FaUser /></i>

                    {/* <img src= {Doctor} alt=''/> */}
                 </div>
            
            </div>

            <div className='footer'>
            <div className='footer-content'>
                <i><FaCopyright/></i>
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
                        {/* <i className='message-pp'><FaMessage/></i> */}

                        <button> View user </button>
                        
                    </div>

                    <div className='single-user'>
                        <i className='doctor-pp'><FaUser/></i>
                        <p> John Doe </p>
                        {/* <button> View user </button> */}
                        
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
        

    </div>
  )
}

export default MainContainer