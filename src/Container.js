import React from 'react'
import './Container.css'
import TopContainer from './TopContainer'
import MainContainer from './Components/MainContainer'
import DoctorsList from './Components/DoctorsList'
import PatientsList from './Components/PatientsList'
import PatientsProfile from './Components/PatientProfile'


function Container() {
  return (
    <div className='container'>
        {/* <h1>Hello</h1> */}
        <TopContainer />
        {/* <DoctorsList/> */}
        {/* <PatientsList/> */}
        <PatientsProfile/>

        {/* <MainContainer /> */}



    </div>
  )
}

export default Container