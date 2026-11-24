import { useState } from "react";
import {useNavigate} from "react-router-dom";


const HomeLoanDetails = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();


    const homeLoanSubmission = () => {
        navigate("/personal_details")
    }


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Home Loan and Home Loan Type</h3>
                    <div className="front-container">
                        <div>
                            <h5>Home Loan Type :</h5>
                            <select className="select-options">
                                <option value="">Select</option>
                                <option value="home_purchase">New Home Purchase</option>
                                <option value="construction">Home Construction</option>
                                <option value="plot_purchase">Plot Purchase</option>
                            </select>
                        </div>
                        <div>
                            <h5>Estimated Property Value :</h5>
                            <input type="number" placeholder="Enter property value" />
                        </div>
                        <div>
                            <h5>Loan Amount :</h5>
                            <input type="number" placeholder="Enter loan amount required" />
                        </div>
                        <div>
                            <h5>Loan Tenure :</h5>
                            <select className="select-options">
                                <option value="">Select</option>
                                <option value="five">5 Years</option>
                                <option value="six">6 Years</option>
                                <option value="seven">7 Years</option>
                                <option value="eight">8 Years</option>
                                <option value="nine">9 Years</option>
                                <option value="ten">10 Years</option>
                            </select>
                        </div>
                    </div>

                    <div className="submit-btn-container"><button onClick={homeLoanSubmission} >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default HomeLoanDetails;