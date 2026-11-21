import { useState } from "react";


const BusinessDetails = () => {
    const [user, setUser] = useState("");


    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <div className="front-container">
                        <div>
                            <h5>Firm Name :</h5>
                            <input type="text" placeholder="Enter business name" value={user} onChange={(e) => userRegistration("licence_number", e.target.value)} />
                        </div>
                        <div>
                            <h5>Business Age (In Years) :</h5>
                            <select className="select-options">
                                <option value="">Select</option>
                                <option value="one">1 Year</option>
                                <option value="two">2 Years</option>
                                <option value="three">3 Years</option>
                                <option value="four">4 Years</option>
                                <option value="five">5 Years</option>
                                <option value="more">More Than 5 Years</option>
                            </select>
                        </div>
                        <div>
                            <h5>Gross Annual Income :</h5>
                            <input type="number" placeholder="Enter gross annual income" value={user} onChange={(e) => userRegistration("date_of_birth", e.target.value)} />
                        </div>
                    </div>

                    <div className="submit-btn-container"><button >Save & Next</button></div>
                </div>
            </main>
        </>
    )
}

export default BusinessDetails;