import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"


const LoanDetails = () => {
    const [eligibleLoan, setEliginleLoan] = useState(null);
    const [loanEmi, setLoanEmi] = useState(null)
    const navigate = useNavigate();


    const loanData = JSON.parse(localStorage.getItem("Loan"))
    useEffect(() => {
        console.log(loanData)
        const loanOffered = (Number(loanData[0]?.propertyValue) * 80 / 100)
        const interest = Number(loanOffered * 12 / 100 * 1 / 12)
        const emi = Number(Math.ceil(loanOffered / 60) )
        setLoanEmi(interest + emi)
        setEliginleLoan(loanOffered)
    },[])
    console.log(loanEmi)

    const loanDetailsSubmission = () => {
        navigate('/personal_details')
    }

    


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Loan Details and Loan Tenure Details</h3>
                    <div className="front-container">
                        <div>
                            <h5>Home Loan Type :</h5>
                            <h5>
                                {loanData[0]?.homeLoanType}
                                <p>Loan requested for new home purchase</p>
                            </h5>
                        </div>
                        <div>
                            <h5>Estimated Property Value :</h5>
                            <h5>{loanData[0]?.propertyValue}
                                <p>Purchased property estimated value</p>
                            </h5>
                        </div>
                        <div>
                            <h5>Loan Requested :</h5>
                            <h5>{loanData[0]?.loanAmount}
                                <p>Home loan amount requested</p>
                            </h5>
                        </div>
                        <div>
                            <h5>Eligible Loan Amount :</h5>
                            <h5>
                                {eligibleLoan}
                                <p>Loan eligibilities 80% of property value</p>
                            </h5>
                        </div>
                        <div>
                            <h5>Loan Tenure :</h5>
                            <h5>
                                {loanData[0]?.loanTenure} Years
                                <p>Total loan tenure</p>
                            </h5>
                        </div>
                        <div>
                            <h5>Monthly EMI :</h5>
                            <h5>
                                {loanEmi}
                                <p>EMI per month with included interest</p>
                            </h5>
                        </div>
                    </div>

                    <div className="submit-btn-container"><button onClick={loanDetailsSubmission} >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default LoanDetails;