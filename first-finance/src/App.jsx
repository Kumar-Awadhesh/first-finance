import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar'
import PersonalDetails from './components/home_loan/personal_details'
import HomeLoanDetails from './components/home_loan/home_loan_details'
import Profession from './components/home_loan/profession'
import SalaryDetails from './components/home_loan/salary_details'
import BusinessDetails from './components/home_loan/business_details'
import CoApplicantDetails from './components/home_loan/co_applicant_details'
import DocumentUpload from './components/home_loan/document_upload'
import LoanDetails from './components/home_loan/loan_Details'
import './App.css'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home_loan_details' element={<HomeLoanDetails/>} />
        <Route path='/loan_details' element={<LoanDetails/>} />
        <Route path='/personal_details' element={<PersonalDetails/>} />
        <Route path='/profession' element={<Profession/>} />
        <Route path='/salary_details' element={<SalaryDetails/>} />
        <Route path='/business_details' element={<BusinessDetails/>} />
        <Route path='/co-applicant_details' element={<CoApplicantDetails/>} />
        <Route path='/document_upload' element={<DocumentUpload/>} />
      </Routes>
    </>
  )
}

export default App
