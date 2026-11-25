import { useState } from "react";
import {useNavigate} from "react-router-dom";


const HomeLoanDetails = () => {
    const [homeLoan, setHomeLoan] = useState({
        homeLoanType: "", propertyValue: "", loanAmount: "", loanTenure: ""
    });
    const [homeLoanFormData, setHomeLoanFormData] = useState([]);
    const navigate = useNavigate();


    const homeLoanData = (data, value) => {
        setHomeLoan(prev => ({...prev, [data]: value}))
    }


    const homeLoanSubmission = () => {
        setHomeLoanFormData(homeLoan)
        const oldLoanData = JSON.parse(localStorage.getItem("Loan")) || []
        
        const loanData = [...oldLoanData, homeLoan]
        localStorage.setItem("Loan", JSON.stringify(loanData))
        
    }

    


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Home Loan and Home Loan Type</h3>
                    <div className="front-container">
                        <div>
                            <h5>Home Loan Type :</h5>
                            <select className="select-options" value={homeLoan.homeLoanType} onChange={(e)=> homeLoanData("homeLoanType", e.target.value)}>
                                <option value="">Select</option>
                                <option value="New Home Purchase">New Home Purchase</option>
                                <option value="Construction of Home">Home Construction</option>
                                <option value="Plot Purchase">Plot Purchase</option>
                            </select>
                        </div>
                        <div>
                            <h5>Estimated Property Value :</h5>
                            <input type="number" placeholder="Enter property value" value={homeLoan.propertyValue} onChange={(e)=> homeLoanData("propertyValue", e.target.value)} />
                        </div>
                        <div>
                            <h5>Loan Amount :</h5>
                            <input type="number" placeholder="Enter loan amount required" value={homeLoan.loanAmount} onChange={(e)=> homeLoanData("loanAmount", e.target.value)} />
                        </div>
                        <div>
                            <h5>Loan Tenure :</h5>
                            <select className="select-options" value={homeLoan.loanTenure} onChange={(e)=> homeLoanData("loanTenure", e.target.value)}>
                                <option value="">Select</option>
                                <option value="5">5 Years</option>
                                <option value="6">6 Years</option>
                                <option value="7">7 Years</option>
                                <option value="8">8 Years</option>
                                <option value="9">9 Years</option>
                                <option value="10">10 Years</option>
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