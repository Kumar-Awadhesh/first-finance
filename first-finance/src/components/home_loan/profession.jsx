import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Profession = () => {
    const [user, setUser] = useState("")
    const navigate = useNavigate();


    const professionSubmission = () => {
        navigate('#')
    }


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Professional Details</h3>
                    <div className="front-container">
                        <div>
                            <h5>Profession :</h5>
                            <select className="select-options">
                                <option value="">Select</option>
                                <option value="salaried">Salaried</option>
                                <option value="business">Self Employed / Business</option>
                            </select>
                        </div>
                    </div>

                    <div className="submit-btn-container"><button onClick={professionSubmission} >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default Profession;