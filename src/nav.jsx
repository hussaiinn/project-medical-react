import './css/aboutUs.css'
export default function Navbar() {
    return (
        <div className="conatiner">
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container-fluid">
                    <span className="navbar-brand nav-us">DocConnect</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-content-us" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active nav-text-us" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item nav-item-us">
                                <a className="nav-link nav-text-us" href="#">Look Doctors hussain</a>
                            </li>
                            <li className="nav-item nav-item-us">
                                <a className="nav-link nav-text-us" href="#">Medicine</a>
                            </li>
                            <li className="nav-item nav-item-us">
                                <a className="nav-link nav-text-us" href="#">My News</a>
                            </li>
                            <li className="nav-item nav-item-us">
                                <a className="nav-link nav-text-us" href="#">Video Consultant</a>
                            </li>
                            <li className="nav-item nav-item-us us-button" id="login">

                                <a className="nav-link nav-text-us" href="#">Login</a>

                            </li>
                            <li className="nav-item nav-item-us us-button" id="signUp">

                                <a className="nav-link nav-text-us" href="#">Sign Up</a>

                            </li>


                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}