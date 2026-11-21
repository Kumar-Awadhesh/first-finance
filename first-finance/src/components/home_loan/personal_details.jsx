import { useState } from "react";


const PersonalDetails = () => {
const [user, setUser] = useState("")


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <div className="front-container">
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
                            <h5>Marital Status :</h5>
                            <select className="select-options">
                                <option value="">Select</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>
                        </div>
                        <div>
                            <h5>Address :</h5>
                            <textarea name="" id="" placeholder="Enter your address" value={user} onChange={(e) => userRegistration("address", e.target.value)}></textarea>
                        </div>
                    </div>
                    
                    <div className="submit-btn-container"><button >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default PersonalDetails;