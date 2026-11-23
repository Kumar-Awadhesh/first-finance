import { useState } from "react";


const SalaryDetails = () => {
    const [user, setUser] = useState("");


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Salary and Organization Details </h3>
                    <div className="front-container">
                        <div>
                            <h5>Company Name :</h5>
                            <input type="text" placeholder="Enter organization name" value={user} onChange={(e) => userRegistration("licence_number", e.target.value)} />
                        </div>
                        <div>
                            <h5>Monthly Salary :</h5>
                            <input type="number" placeholder="Enter loan amount required" value={user} onChange={(e) => userRegistration("date_of_birth", e.target.value)} />
                        </div>
                        <div>
                            <h5>Work Experience (In Years) :</h5>
                            <select className="select-options">
                                <option value="">Select</option>
                                <option value="five">1 Year</option>
                                <option value="six">2 Years</option>
                                <option value="seven">3 Years</option>
                                <option value="eight">4 Years</option>
                                <option value="nine">5 Years</option>
                                <option value="ten">More Than 5 Years</option>
                            </select>
                        </div>
                        <div>
                            <h5>Payment Mode :</h5>
                            <select className="select-options">
                                <option value="">Select</option>
                                <option value="bank">Bank</option>
                                <option value="cheque">Cheque</option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>
                    </div>

                    <div className="submit-btn-container"><button >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default SalaryDetails;