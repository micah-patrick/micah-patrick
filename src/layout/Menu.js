import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Menu(){

    const path = useHistory().location.pathname;

    const activeInitiator = {
        about: "",
        projects: "",
    }

    const [active, setActive] = useState(activeInitiator);

    useEffect(() =>{
        if(path === "/about"){
            setActive({
                ...activeInitiator,
                about: "active"
            })
        }
        if(path === "/projects"){
            setActive({
                ...activeInitiator,
                projects: "active"
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <nav className="row navWrapper" >
            <Link className={`col ${active.about}`} to="/about">
                About
            </Link>
            <Link className={`col ${active.projects}`} to="/projects">
                Projects
            </Link>
        </nav>
    )
}