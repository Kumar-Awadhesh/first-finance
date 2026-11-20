import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar'
import PersonalDetails from './components/home_loan/personal_details'
import HomeLoanDetails from './components/home_loan/home_loan_details'
import './App.css'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home_loan_details' element={<HomeLoanDetails/>} />
        <Route path='/personal_details' element={<PersonalDetails/>} />
      </Routes>
    </>
  )
}

export default App
