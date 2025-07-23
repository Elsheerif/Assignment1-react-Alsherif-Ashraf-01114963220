import Home from "../pages/Home"
import About from "../pages/About"
import Portfolio from "../pages/Portfolio"
import Contacts from "../pages/Contact"
import "../style/Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar() {
    return <>

        <nav className="nav navbar navbar-expand-lg bg-body-danger p-4">
            <div className="container-fluid">
                <Link className=" navbar-brand text-white logo " to="/Home">Start Framework</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contacts</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    </>
}