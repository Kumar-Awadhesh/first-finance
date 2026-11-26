import { useState } from "react";
import {useNavigate} from "react-router-dom"


const PersonalDetails = () => {
    const [userData, setUserData] = useState({
        full_name: "", date_of_birth: "", mobile_number: "", pan_number: "",
        aadhaar_number: "", marital_status: "", address: ""
    })
    const navigate = useNavigate();


    const userRegistration = (data, value) => {
        setUserData(prev => ({...prev, [data]: value}))
    }


    const personalDetailsSubmission = () => {
        // navigate('/profession')
        console.log(userData)
    }


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Personal Details</h3>
                    <div className="front-container">
                        <div>
                            <h5>Full Name :</h5>
                            <input type="text" placeholder="Enter full name" value={userData.full_name} onChange={(e) => userRegistration("full_name", e.target.value)} />
                        </div>
                        <div>
                            <h5>Date of Birth :</h5>
                            <input type="date" placeholder="Select your date of birth" value={userData.date_of_birth} onChange={(e) => userRegistration("date_of_birth", e.target.value)} />
                        </div>
                        <div>
                            <h5>Mobile Number :</h5>
                            <input type="text" placeholder="Enter mobile number" value={userData.mobile_number} onChange={(e) => userRegistration("mobile_number", e.target.value)} />
                        </div>
                        <div>
                            <h5>Pan Number :</h5>
                            <input type="text" placeholder="Enter pan number" value={userData.pan_number} onChange={(e) => userRegistration("pan_number", e.target.value)} />
                        </div>
                        <div>
                            <h5>Aadhaar Number :</h5>
                            <input type="text" placeholder="Enter aadhaar number" value={userData.aadhaar_number} onChange={(e) => userRegistration("aadhaar_number", e.target.value)} />
                        </div>
                        <div>
                            <h5>Marital Status :</h5>
                            <select className="select-options" value={userData.marital_status} onChange={(e)=> userRegistration("marital_status", e.target.value)}>
                                <option value="">Select</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>
                        </div>
                        <div>
                            <h5>Address :</h5>
                            <textarea placeholder="Enter your address" value={userData.address} onChange={(e) => userRegistration("address", e.target.value)}></textarea>
                        </div>
                    </div>
                    
                    <div className="submit-btn-container"><button onClick={personalDetailsSubmission} >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default PersonalDetails;