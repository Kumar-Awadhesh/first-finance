import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CoApplicantDetails = () => {
const [user, setUser] = useState("");
const navigate = useNavigate();


    const coApplicantDetailsSubmission = () => {
        navigate('/document_upload')
    }


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Co-Applicant Details</h3>
                    <div className="front-container">
                        <div>
                            <h5>Relationship with Applicant :</h5>
                            <select className="select-options">
                                <option value="">Select</option>
                                <option value="spouse">Spouse</option>
                                <option value="mother">Mother</option>
                                <option value="father">Father</option>
                                <option value="sibling">Sibling</option>
                                <option value="friend">Friend</option>
                            </select>
                        </div>
                        <div>
                            <h5>Full Name :</h5>
                            <input type="text" placeholder="Enter full name" value={user} onChange={(e) => userRegistration("licence_number", e.target.value)} />
                        </div>
                        <div>
                            <h5>Date of Birth :</h5>
                            <input type="date" placeholder="Select your date of birth" value={user} onChange={(e) => userRegistration("date_of_birth", e.target.value)} />
                        </div>
                        <div>
                            <h5>Mobile Number :</h5>
                            <input type="text" placeholder="Enter mobile number" value={user} onChange={(e) => userRegistration("name", e.target.value)} />
                        </div>
                        <div>
                            <h5>Pan Number :</h5>
                            <input type="text" placeholder="Enter pan number" value={user} onChange={(e) => userRegistration("date_of_birth", e.target.value)} />
                        </div>
                        <div>
                            <h5>Address :</h5>
                            <textarea name="" id="" placeholder="Enter your address" value={user} onChange={(e) => userRegistration("address", e.target.value)}></textarea>
                        </div>
                    </div>
                    
                    <div className="submit-btn-container"><button onClick={coApplicantDetailsSubmission} >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default CoApplicantDetails;