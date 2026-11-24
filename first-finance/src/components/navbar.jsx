import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();



    return (
        <>
            <main>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <h3 className="navbar-brand" onClick={()=> navigate('/')}>First Finance</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <h5 className="nav-link active" aria-current="page" onClick={()=> navigate('/')}>Home</h5>
                                </li>
                                <li className="nav-item">
                                    <h5 className="nav-link" onClick={()=> navigate("/home_loan_details")}>Home Loan</h5>
                                </li>
                                <li className="nav-item">
                                    <h5 className="nav-link" >Personal Loan</h5>
                                </li>
                                <li className="nav-item">
                                    <h5 className="nav-link" tabIndex="-1" aria-disabled="true">Business Loan</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </main>
        </>
    )
}

export default Navbar;