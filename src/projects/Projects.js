import React, { useEffect, useState } from 'react';
import Header from '../home/Header';
import projects from '../db/db.js';
import ProjectPreview from './ProjectPreview';
import Social from '../layout/Social';

export default function Projects(){

    const activeInitiator = {
        all: "",
        frontend: "",
        backend: "",
    }

    const [active, setActive] = useState({...activeInitiator, all: "active"});
    const [previews, setPreviews] = useState("")
    const [filteredProjects, setFilteredProjects] = useState(projects)

    useEffect(() => {
        if(filteredProjects){
            setPreviews(filteredProjects.map((project) => {
                return <ProjectPreview key={project.id} project={project} />
            }))
        }
    }, [filteredProjects]);


    const filterHandler = (filter) => {
        if (filter === "all"){
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter((project) => project[filter]))
        }
        setActive({
            ...activeInitiator,
            [filter]: "active"
        })
    }

    return (
        <>
            <Header />
            <div className="previews container-fluid container-md">
                <div className="row">
                    <div className="col col-12 filter">
                        <span className="filter-icon" />
                        <button
                            className={active.all}
                            onClick={() => filterHandler("all")}
                        >
                            All
                        </button>
                        <button
                            className={active.frontend}
                            onClick={() => filterHandler("frontend")}
                        >
                            Frontend
                        </button>
                        <button
                            className={active.backend}
                            onClick={() => filterHandler("backend")}
                        >
                            Backend
                        </button>
                    </div>
                    {previews}
                </div>
            </div>
            <Social />

        </>
    )
}