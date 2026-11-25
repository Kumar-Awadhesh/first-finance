import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"


const LoanDetails = () => {
    const [eligibleLoan, setEliginleLoan] = useState(null);
    const [loanEmi, setLoanEmi] = useState(null)
    const navigate = useNavigate();


    useEffect(() => {
        const loanData = JSON.parse(localStorage.getItem("Loan"))
        setLoanTenure(loanData)
    },[])


    const loanDetailsSubmission = () => {
        navigate('/personal_details')
    }

    
    console.log(loanTenure);


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Loan Details and Loan Tenure Details</h3>
                    <div className="front-container">
                        <div>
                            <h5>Home Loan Type :</h5>
                        </div>
                        <div>
                            <h5>Estimated Property Value :</h5>
                        </div>
                        <div>
                            <h5>Eligible Loan Amount :</h5>
                        </div>
                        <div>
                            <h5>Loan Tenure :</h5>
                        </div>
                        <div>
                            <h5>Monthly EMI :</h5>
                        </div>
                    </div>

                    <div className="submit-btn-container"><button onClick={loanDetailsSubmission} >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default LoanDetails;