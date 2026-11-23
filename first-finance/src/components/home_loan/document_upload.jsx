import { useState } from "react";


const DocumentUpload = () => {



    return (
        <>
            <main className="loan-container">
                <div className="form-container">
                    <h3 className="form-header">Document Upload</h3>
                    <div className="front-container">
                        <div>
                            <h5>Identity & Address Proof :</h5>
                            <p><input type="file" placeholder="" accept="image/*" onChange={(e) => userRegistration("licence_number", e.target.files[0])} />
                                <p>Aadhaar Card and Pan card</p>
                            </p>
                        </div>
                        <div>
                            <h5>Income Proof (Salaried) :</h5>
                            <p><input type="file" placeholder="" accept="image/*" onChange={(e) => userRegistration("licence_number", e.target.files[0])} />
                                <p>Last 3 month'salary slip / Last 6 months bank statement</p>
                            </p>
                        </div>
                        <div>
                            <h5>Income Proof (Business) :</h5>
                            <p><input type="file" placeholder="" accept="image/*" onChange={(e) => userRegistration("licence_number", e.target.files[0])} />
                                <p>Last 2 years ITR with computation / Last 6–12 months' business bank statement, GST registration/business proof.</p>
                            </p>
                        </div>
                        <div>
                            <h5>Property Document :</h5>
                            <p><input type="file" placeholder="" accept="image/*" onChange={(e) => userRegistration("licence_number", e.target.files[0])} />
                                <p>Agreement / Property Ownership document</p>
                            </p>
                        </div>
                        <div>
                            <h5>Consent :</h5>
                            <p><input type="checkbox" placeholder="" value={""} onChange={(e) => userRegistration("licence_number", e.target.value)} />
                                <p>Consent to provide aadhaar details and credit bureau information</p>    
                            </p>
                        </div>
                        
                    </div>

                    <div className="submit-btn-container"><button >Save & Preview</button></div>
                </div>
            </main>
        </>
    )
}

export default DocumentUpload;