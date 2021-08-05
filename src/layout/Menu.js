
import { Link } from "react-router-dom";

export default function Menu(){
    
    return (
        <nav className="row navWrapper" >
            <Link className="col" to="/about">
                About
            </Link>
            <Link className="col" to="/projects">
                Projects
            </Link>
            {/* <Link className="col" to="/contact">
                Contact
            </Link> */}
        </nav>
    )
}