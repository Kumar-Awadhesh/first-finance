


const Navbar = () => {



    return (
        <>
            <main>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <h3 className="navbar-brand" href="#">First Finance</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home Loan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Personal Loan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Business Loan</a>
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