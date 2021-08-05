import { useState } from "react";
import { Link } from "react-router-dom";
import projects from '../db/db.js';

export default function Avatar() {

    const [projectLink, setProjectLink] = useState(1)
    const [avatar, setAvatar] = useState("avatar-img")

    const randomProject = () => {
        const range = projects.length;
        setProjectLink( Math.floor(Math.random() * range) +1);
        const diceNumber = Math.floor(Math.random() * 24) + 1;
        setAvatar(`dice dice-${diceNumber}`);
    }


    return (
        <>
        <div className="navWrapper">
            <Link to={`/${projectLink}`} 
                onMouseEnter={randomProject}
                onMouseLeave={() => setAvatar("avatar-img")}
            >
                <span className={`avatar ${avatar}`} ></span>
            </Link>
        </div>
        <div className="navWrapper">
            <Link to="/" id="logo">
                <span className="logo"></span>
            </Link>
        </div>
        </>
    )
}